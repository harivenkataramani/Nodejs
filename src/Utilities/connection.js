var mongoose = require("mongoose")
var Schema = mongoose.Schema
mongoose.Promise = global.Promise
var url = "mongodb://localhost:27017/MyDatabase"

//new schema and connection to database has to be done

// var loginSchema =Schema({
//     loginuserId: String,
//     userName: String,
//     password: String,
// }, { collection: "Logindb" })

var registeredUserSchema =Schema({
    registeredUserId: String,
    userName: String,
    password: String,
    emailId: String,
    contactNo: Number
},{collection:"registerUserdb"})


var collection = {}

// collection.getLoginCollection = () =>{
//     return mongoose.connect(url,{useNewUrlParser:true}).then((database)=>{
//         return database.model('Login',loginSchema)
//     }).catch((error)=>{
//         let err = new Error("Could not connect to database")
//         err.status = 500;
//         throw err
//     })
// }

collection.getRegisteredUserCollection = () =>{
    return mongoose.connect(url,{useNewUrlParser:true, useUnifiedTopology: true}).then((database)=>{
        return database.model('RegisteredUsers',registeredUserSchema)
    }).catch((error)=>{
        console.log(error.message)
        console.log("error")
        let err = new Error("Could not connect to database")
        err.status = 500;
        throw err
    })
}

module.exports = collection