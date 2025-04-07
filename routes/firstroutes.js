const express = require("express")
const router = express.Router()
const{fetchData,insertData, update,delate} = require ("../controller/scud")
// if we use :and veriablename then we create a simple dynamic rout
router.get("/product/all",fetchData
    //.send(`Your name is : ${req.params.name} + ${data}`)
    )
router.get("/student",async(req,res,next)=>{
    res.send('<form action="post/student" method="POST"><input type="text" name="name"> <input type="text" name="roll_no"> <input type="text" name="class_name"><button type="submit">Add</button></form>')
})
router.get("/student/update/:id",async(req,res)=>{
    res.send(`<form action="/practice/v1/post/upstudent/${req.params.id}" method="POST"><input type="text" name="name"> <input type="text" name="roll_no"> <input type="text" name="class_name"><button type="submit">Add</button></form>`)
})

router.post("/post/student", insertData);
router.post("/post/upstudent/:id", update);
router.get("/student/delate/:id",delate)


// ach file is a module in node js 
module.exports = router

