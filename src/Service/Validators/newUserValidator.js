let newUserValidator = {}

newUserValidator.validateUserEmail=(emailId)=>{
    if(!emailId.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,3})$/)){
        let err= new Error("Invalid Email ID format")
        err.status=406
        throw err
    }
}


newUserValidator.validateContactNo=(contactNo)=>{
    if(!typeof(contactNo)===Number||!contactNo.length===10){
        let err= new Error("Invalid Contact number. Contact number must contain 10 numbers E.g:9940526928")
        err.status=406
        throw err
    }
}

module.exports = newUserValidator