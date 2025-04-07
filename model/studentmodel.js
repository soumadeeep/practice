const {DataTypes } = require("sequelize")
const {sequelize} = require("../database/dbconnection")
// here we create a model using define method where first we mention model name and then model structuer it's an javascript object
//student
const studentmodel = sequelize.define('studentsecond',{
    name:{type:DataTypes.STRING},
    roll_no:{type:DataTypes.STRING},
    class_name:{type:DataTypes.STRING}
})
//college
const college = sequelize.define('college',{
    college_name:DataTypes.STRING
})


module.exports = {studentmodel,college}