//**** when every request come from client every time expesh check from first or base file */
const express = require("express");
const bodyParser = require("body-parser");
const firstroutes = require("./routes/firstroutes");
const {studentmodel,college} = require("./model/studentmodel");
const { sequelize } = require("./database/dbconnection");
const app = express();
// what happen hare when we post some data from Form it will store inside req.body object and when next page want to access this data it
// page access it using req.body.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
//app.post("/student",insertData)
app.use("/practice/v1", firstroutes);

// if you want to add new veriable in req object you simply use req.variablename = somthing
// when you create one request and when it goes to server and if you do any changes in req this it effect entire req object (only this api if you hit another api this time req objct is different
app.use((req, res, next) => {
  res.status(404).send("<h1>Page NotFound</h1>");
});

// app.use("/addproduct", (req, res) => {
//     res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">AddPoem</button></form>');
// });

// app.use('/product', (req, res) => {
//     console.log(req.body);
//     res.send("Product added successfully!");
// });

college.hasMany(studentmodel)
studentmodel.belongsTo(college)


sequelize.sync({alert:true})
  .then((result) => {
    //console.log(result);
    app.listen(5000, () => {
      console.log("Server running on port 5000");
    });
  })
  .catch((err) => {
    console.log(err);
  });

// app.listen(5000, () => {
//     console.log("Server running on port 5000");
// });

//======================
// 🛠 What to Do in Middleware?

// ✔ Pre-process the request before it reaches the controller
// ✔ Authenticate users (JWT, sessions, etc.)
// ✔ Validate request data
// ✔ Log API requests
// ✔ Handle errors globally

//==============================

// 🛠 What to Do in Controller?

// ✔ Handle requests & responses
// ✔ Call models to fetch/update data
// ✔ Send JSON responses to the client
// ✔ Handle validation errors & return messages
// ✔ Use services/helpers for complex logic
