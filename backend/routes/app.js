// export{}
const express = require("express")
const bodyParser = require("body-parser")
const fs = require('fs');
// create our express app
const app = express()
// middleware
let cors = require('cors');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
// routae

const routes = require('./Route.js')
// app.use('/', routes)
app.use(cors())
//start server
// app.listen(4021, ()=>{
//     console.log("listeniing at port:4021")
// }) 
// const routes = require('./Route')
app.use('/', routes)
const port = process.env.PORT || 3080;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})
console.log(server);


app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
// app.get("/", (req, res) => {
//     var temo=console.log(__dirname);
//   });

 
//  app.get("/", (req, res) => {
//     res.sendFile(`${__dirname}/index.html`)
//   });

//   app.get("/register", (req, res) =>{
//     res.sendFile(`${__dirname}/Register.html`)
//   });

//   app.get("/List", (req, res) =>{
//     res.sendFile(`${__dirname}/List.html`)
//   });