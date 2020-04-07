const express = require('express');
const router = express.Router();
const userTestData = require('../../Model/TestData/setupTestData')


router.get("/setupdb", (req, res, next) => {
    userTestData.testDataSetup().then((data) => {
        console.log("Successfully added test data")
        res.send(data)
    }).catch((err) => {
        next(err)
    })
})

module.exports = router;