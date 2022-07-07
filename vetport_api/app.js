require("dotenv").config();

const express = require("express");
var bodyParser = require('body-parser')
const config = require("./config");
const { server } = config;
const { port, environment } = server;

//database 
const  Database  = require("./utils/database");
Database.connectMongo();




const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use("/api", require("./routes/index")); //api routes
app.listen(port, console.log(`${environment} server started on port ${port}`));