// account.js
// export{fs}
// export default undefined 
var express = require("express");
export{}
var accountRoutes = express.Router();
var fs = require('fs');
const { nextTick } = require("process");

module.exports = accountRoutes
// const dataPath = './details_folder/account.json'
// const dataPath = `C:/react-next-app/todoapp/backend/details_folder/account.json` // path to our JSON file
const dataPath = `C:/React-step/sandeepTaskReact/step-by-step/backend/details_folder/account.json` // path to our JSON file

// util functions
const saveAccountData = (data) => {
    const stringifyData = JSON.stringify(data)
    fs.writeFileSync(dataPath, stringifyData)
}
const getAccountData = () => {
    const jsonData = fs.readFileSync(dataPath)
    return JSON.parse(jsonData)   
}

// const getAccountDetails=(id) => {
//   const jsonData = fs.readFileSync(dataPath)
//   return JSON.parse(jsonData)   
// }

accountRoutes.post('/account/addaccount', (req, res) => {
    var existAccounts = getAccountData()    
    const newAccountId =(Math.random() *100)
// const newAccountId = Math.floor(100000 + Math.random() * 900000)
// const newAccountId=Array(1).fill().map(() => Math.round(Math.random() * 1))
 
    existAccounts[newAccountId] = req.body
    let acc = req.body;
    acc.id = newAccountId;
    existAccounts.push(acc)
   
    console.log(existAccounts);
    saveAccountData(existAccounts);
    res.send({success: true, msg: 'account added successfully'})
})

// Read - get all accounts from the json file
accountRoutes.get('/account/list', (req, res) => {
    const accounts = getAccountData()
    res.send(accounts)
  })

  // accountRoutes.get('/account/list/:id', (req, res) => {
  //   const accounts = getAccountData()
  //   res.send(accounts)
  // })  


//(get a specific user)
//   accountRoutes.get('/account/list/:id', function(req, res){
//     listId=req.params.id;
//     const accounts= getAccountData();
//     accounts.find(({id:listId}),function(err,val){
//       res.send(val);
//     })
//     res.send(accounts)
//   })

  // accountRoutes.get('/account/list/:id', (req, res) =>{
  //   const accounts = getAccountData();
  //   accounts.findById(req.params.id)
  //   .then(userfound =>{
  //     if(!doc) {return res.status(404).end();}
  //     return res.status(200).json(doc);
  //   })
  //   .catch(err=>next(err))
  //   })

  

  // Update - using Put method
// accountRoutes.put('/account/:id', (req, res) => {
//     var existAccounts = getAccountData()
//     fs.readFile(dataPath, 'utf8', (err, data) => {
//       const accountId = req.params['id'];
//       existAccounts[accountId] = req.body;
//       saveAccountData(existAccounts);
//       res.send(`accounts with id ${accountId} has been updated`)
//     }, true);
//   });

  // delete - using delete method
accountRoutes.delete('/account/delete/:id', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
      var existAccounts = getAccountData()
      const userId = req.params['id'];
      delete existAccounts[userId]; 
      saveAccountData(existAccounts);
      res.send(`accounts with id ${userId} has been deleted`)
    }, true);
  })
  // export{}
  /*Post->create
  Get->read
  Put->Update/Replace
  Delete->delete
  PATCH->Partial Update/Modify
  */
