const express = require("express");

const app = express();

app.use("/",(req,res)=>{
    res.send("Servers are Readys");
});

app.get("/hello",(req,res)=>{
    res.send("Helllo Helllo");
});

app.get("/test",(req,res)=>{
    res.send("Testing ROutes Call");
});

app.listen(3000,()=>{
    console.log(`Server Listen Port ${3000}`);
});