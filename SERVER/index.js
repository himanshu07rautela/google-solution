const express = require("express");

const app = express();

const studentrouter = require("./routes/student");
const providerrouter = require("./routes/provider");
const jwt = require("jsonwebtoken");
app.use(express.json());
app.use("/provider",providerrouter);
app.use("/student",studentrouter);
app.listen(3000,function(){
    console.log("our server is running sucessfully in port 3000 ");
})
