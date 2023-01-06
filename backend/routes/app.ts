// 
// export default undefined 




// import { fs } from "./account";

export{}
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

const routes = require('./Route.ts')
// app.use('/', routes)
app.use(cors())
//start server
// app.listen(4021, ()=>{
//     console.log("listeniing at port:4021")
// }) 
// const routes = require('./Route')\\
app.use('/', routes)
const port = process.env.PORT || 3080;let NEXT_PUBLIC_API_URL='';
 
    NEXT_PUBLIC_API_URL = `https://7df4-119-82-104-94.in.ngrok.io`
const server = app.listen(port, () => {
  // http://localhost:80 
  // console.log('connected to url'+NEXT_PUBLIC_API_URL);
  
  console.log('Connected to port ' + port)
})

console.log(server);
app.use(function(req, res, next) {
  const allowedOrigins = [`https://294a-119-82-104-94.in.ngrok.io`, 'http://localhost:3080'];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content- Type, Accept");
// res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
res.header('Access-Control-Allow-Credentials', true);
res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
next();

  // res.setHeader('Access-Control-Allow-Origin', '*');
  // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  // res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  // res.setHeader('Access-Control-Allow-Credentials', true);
  // next();
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