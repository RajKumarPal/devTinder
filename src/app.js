const express = require("express");

const app = express();

// app.get(/.*fly$/,(req,res)=>{
//     res.send({ firstname:"Raj Kumar", lastname:"Pal" });
// });

// fly buterfly

// app.get(/\/ab?c/,(req,res)=>{
//     console.log(`Server Listen Port ${3000}`);
//     res.send({firstname:"Raj Kumar",lastname:"Pal"});
// })
// // abc ac 
// app.get(/\/ab+c/,(req,res)=>{
//     res.send({firstname:"Rajesh",lastname:"Pal"});
// });

// // abc abbbbc abbbbbbbbbc

app.get(/\/ab+cd/,(req,res)=>{
    console.log(`Server Listen Port ${3000}`);
    res.send({firstname:"Raj Kumar",lastname:"Pal"});
})

app.listen(3000,()=>{
    console.log(`Server Listen Port ${3000}`);
});