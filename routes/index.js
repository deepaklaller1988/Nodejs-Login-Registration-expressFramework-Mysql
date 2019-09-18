const express = require('express');
const router = express.Router();
const indexModel=require('../models/indexModel')
//const mailapi = require('./mailapi');
const url= require('url')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/',function(req,res, next){
  indexModel.registerUser(req.body).then((result)=>{
    //mailapi.mymail(req.body)
    res.render('index',{'output':'registeration successful'})
  }).catch((err)=>{
    res.render('index',{'output':'registeration failed'})
  })
})

router.get('/login',function(req,res,next){
  res.render('login')
})

router.post('/login',function(req,res, next){
  indexModel.loginUser(req.body).then((result)=>{
    if(result.length>0)
    res.redirect('users')

    else
    res.render('login')
  }).catch((err)=>{console.log(err)})
})


router.get('/service',function(req,res,next){
  res.render('service')
})


router.get('/about',function(req,res,next){
  res.render('about')
})

router.get('/verifyusers',function(req,res,next){
var email=url.parse(req.url,true).query.email
indexModel.verifyusers(email).then((result)=>{
  res.render('verifyusers')
}).catch((err)=>{console.log(err)})
})


module.exports = router;
