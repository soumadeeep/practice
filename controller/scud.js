//const { a } = something → Object Destructuring
// const [a] = something → Array Destructuring
//=======================================================================================================
// import database from "../database/dbconnection.js";

// export const fetchData = async () => {
//     try {
//         const [rows] = await database.query("SELECT * FROM student");
//         return rows;
//     } catch (error) {
//         console.log(`message: ${error}`);
//         return;
//     }
// };

// export const insertData = async (req, res, next) => {
//     try {
//         const { name, roll_no, className } = req.body;
//         const query = `INSERT INTO student(name, roll_no, \`class\`) VALUES (?, ?, ?)`;
//         const [result] = await database.execute(query, [name, roll_no, className]);
//         res.json({"message":"success"});
//     } catch (e) {
//         console.log(`insert error ${e}`);
//         res.status(500).send("Insert failed");
//     }
// };

//============================================================================================================
//using sequelize
// Insert
const studentmodel = require('../model/studentmodel')

const insertData = async(req,res)=>{
    try{
        const {name,roll_no,class_name} = req.body
        // here we can also use bulckCreate() meyhod it's take array of object and options check duplicate or redundent data
        const student = await studentmodel.create({name,roll_no,class_name})
        res.json(student)
    }catch(error){
        res.status(500).json({error:error.message})
    }

}
// Select
const fetchData = async(req,res)=>{
try{
  
    const students = await studentmodel.findAll()
    res.json(students)
    //res.send(students)

}catch(error){
    res.status(500).json({error:error.message})
}
}

// Update

const update = async(req,res)=>{
    try{
      const{name,roll_no,class_name} = req.body
      const student = await studentmodel.findByPk(req.params.id)
      console.log(req.params.id)
      if(!student) return res.status(404).json({message:"Not Found"})
       student.name = name,
       student.roll_no = roll_no,
       student.class_name = class_name
       await student.save()
       res.json(student)

    }catch(error){
        res.status(500).json({error:error.message})
    }
}

// Delate
const delate = async(req,res)=>{
    try{
     const student = await studentmodel.findByPk(req.params.id)
     if(!student) return res.status(404).json({message:"Not Found"})
        await student.destroy()
    res.json({message:"Delate successfully"})
    }catch(error){
        res.status(404).json({error:error.message})
    }
}

module.exports = {insertData,fetchData,update,delate}