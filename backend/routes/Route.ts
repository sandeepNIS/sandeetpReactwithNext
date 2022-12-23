// Route.js file

// import { fs } from "./account";
// export{}
var express = require("express")
const router = express.Router();
var fs = require('fs');
var accountRoutes = require('./account.ts') // import account route
router.use(accountRoutes) // use account route
module.exports = router;
// 