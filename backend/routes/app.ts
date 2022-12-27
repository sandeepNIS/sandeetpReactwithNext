// 
// export default undefined 
// import { fs } from "./account";
var express = require("express")
export{}
const bodyParser = require("body-parser")
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
// const routes = require('./Route')
app.use('/', routes)
const port = process.env.PORT || 3080;
var url = ''
  if (process.env.NODE_ENV === 'development') {
    url = 'http://localhost' // you must hardcode it somewhere. In production you don't.
  }
  {
  baseURL: 'https://domain.com/foo/bar' + '/' // in production the url variable will be set to the root url of your domain. '/' forces        the basedURL to only use the root url with NO endpoints.
}
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