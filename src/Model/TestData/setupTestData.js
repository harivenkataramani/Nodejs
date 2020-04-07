var connection = require("../../Utilities/connection")

// mock data and return value can be used from here


let registeredUserSampleData =[
    {registeredUserId:"U000000001",
    userName:"hari",
    emailId:"venkata.hari18@gmail.com",
    contactNo:9940526928,
    password:"Password@123"
    },
    {registeredUserId:"U000000002",
    userName:"Ashvin",
    emailId:"hari.datrack@gmail.com",
    contactNo:9884479774,
    password:"Password@123"
    },
]

exports.testDataSetup=()=>{
    // registered User Insertion
                return connection.getRegisteredUserCollection().then(registeredUsers=>{
                    return registeredUsers.deleteMany().then(()=>{
                        return registeredUsers.insertMany(registeredUserSampleData).then((data)=>{
                                        if(data){
                                            return "Successfully added test data into the collection"
                                        }
                                        else{
                                            throw new Error("Cannot Insert the test data! Please check the code or connection")
                                        }
                        })
                    })
                })
}