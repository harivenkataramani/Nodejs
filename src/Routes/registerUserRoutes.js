var express= require('express')
var router=express.Router()
var registerNewUser=require("../Model/beanClasses/newUserRegClass")
var registerUserService=require('../Service/registerUserService')


router.post('/userRegistration',(req,res,next)=>{
    let newUserData = req.body;
    let newReguserObj = new registerNewUser(newUserData)
    registerUserService.registerNewUserService(newReguserObj).then(successmessage=>{
        res.json({"message":successmessage})
    }).catch(err=>{
        next(err)
    })
})


module.exports=router

