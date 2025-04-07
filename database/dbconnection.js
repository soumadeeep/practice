// const mysql = require("mysql2")
// const config={
// host:"localhost",
// user:"root",
// database:"practice",
// password:"souma@2001"
// }
// // createPool is a one type of method that create a multipal connection that's healp us to execute multipal query
// const pool = mysql.createPool(config)
// // here we use promise() method because it directly handle our  multipal connection to relase connection and also we can use async and awit
// module.exports = pool.promise()

const Sequelize = require('sequelize')

const sequelize = new Sequelize('practice','root','souma@2001',{host:'localhost',dialect:'mysql'})

module.exports = {sequelize}


