const http = require("http")
const express = require('express')
const mongoose = require('mongoose')


const app = express()
const PORT= 8000

mongoose.connect('mongodb+srv://athirarun219:waitnpCa24myAvRI@cluster0.k7u1d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>console.log("MongoDB Connected"))
.catch((err)=>console.log("mongo error",err))
app.use(express.urlencoded({extended:true}))
const mySerever = http.createServer((req,res)=>{
console.log(req);
res.end("Hello from server")

});

mySerever.listen(5000,()=>console.log("Server started"))

