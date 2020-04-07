var regUserModel = require('../Model/RegisterUserModel')
var validator = require('./Validators/newUserValidator')

let regNewUserService={}

regNewUserService.registerNewUserService=(newUserObj)=>{
    if(newUserObj.emailId!==""){
        if(newUserObj.contactNo!==null){
            validator.validateUserEmail(newUserObj.emailId)
            validator.validateContactNo(newUserObj.contactNo)
            return regUserModel.checkEmailId(newUserObj.emailId).then(EmailAddress=>{
                return regUserModel.checkcontactNo(newUserObj.contactNo).then(contactNum=>{
                    return regUserModel.registerUser(newUserObj).then(message=>{
                        console.log("message",message)
                        return message
                    })
                })
            })

        }
        else{
            let err = new Error("Please enter your Phone Number")
            err.status=406;
            throw err
        }
    }
    else{
        let err = new Error("Please enter your Email Address")
        err.status=406;
        throw err
    }
    // return regUserModel.newUserModel(validateContactNo).then(successMsg=>{
    //     if(!successMsg==="Successfully Registered User"){
    //         let err= new Error("Unable to insert into Db")
    //                 err.status=404
    //                 throw err
    //     }
    //     else{
    //         return successMsg
    //     }
    // })
}

module.exports=regNewUserService