var connections = require('../Utilities/connection')

var registerUserModel = {}

registerUserModel.generateUserId = () => {
    return connections.getRegisteredUserCollection().then((collection)=>{
        return collection.distinct("registeredUserId").then((ids) => {
            if(ids.length===0){
                return "U000000001"
            }
            else{
            var uId = ids.map((id) =>{
                return Number(id.slice(1,id.length))
            })
            var strLength= ids.map((id) =>{
                return id.length-1
            })
            // console.log("length of userid string",Math.max(...strLength))
            var idLength=Math.max(...strLength)
            var newId = Math.max(...uId);
            // console.log("last value in array",newId)
            var userid = newId + 1;
            // console.log("incrementing the length",newId)
            return ("U"+userid.toLocaleString().padStart(idLength,0));
        }
        })
    })
}

registerUserModel.checkEmailId=(emailAdd)=>{
return connections.getRegisteredUserCollection().then(collection=>{
    return collection.find({emailId:emailAdd}).then(data=>{
        console.log(data)
        if(data.length===0){
            return emailAdd
        }
        else{
            let err= new Error("Email Address is already used!")
            err.status=406
            throw err
        }
    }) 
})
}

registerUserModel.checkcontactNo=(phoneNo)=>{
    return connections.getRegisteredUserCollection().then(collection=>{
        return collection.find({contactNo:phoneNo}).then(data=>{
            if(data.length===0){
                return phoneNo
            }
            else{
                let err= new Error("Phone Number is already used!")
                err.status=406
                throw err
            }
        }) 
    })
    }

registerUserModel.registerUser=(newUserObj)=>{
    return registerUserModel.generateUserId().then(id=>{
        newUserObj.registeredUserId=id
        return connections.getRegisteredUserCollection().then(collection=>{
            return collection.create(newUserObj).then(data=>{
                console.log("response",data)
                if(data){
                    return "User has been successfully added!!"
                }
                else{
                    let err = new Error("Cannot add user Details! Please ensure your connectivity")
                    err.status=406;
                    throw err;
                }
            })
        })
    })
}

module.exports = registerUserModel