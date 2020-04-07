const express = require('express');
const bodyParser = require("body-parser");
const dbSetupRouter = require('./Routes/SetupDB/setupdb');
const registerUserRouter = require('./Routes/registerUserRoutes')
const myErrorLogger = require('./utilities/errorLogger')
const myRequestLogger = require('./utilities/requestLogger')

const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(myRequestLogger);
app.use('/', dbSetupRouter);
app.use('/', registerUserRouter);
app.use(myErrorLogger);

app.listen(5000);
console.log("Server listening in port 5000");