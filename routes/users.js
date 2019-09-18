var express = require('express');
var router = express.Router();
const url=require('url')
const usersModel=require('../models/usersModel')

/* GET users listing. */
router.get('/', function(req, res, next) {
usersModel.fetchUsers().then((result)=>{
  res.render('userdetails',{'result':result})
}).catch((err)=>{
  console.log(err)
})

router.get('/manageuserstatus', function(req, res, next) {
  var urlData=url.parse(req.url,true).query
  usersModel.manageUserStatus(urlData).then((result)=>{
  	res.redirect('/users')
  }).catch((err)=>{
  	console.log(err)
  })
});

});

module.exports = router;
