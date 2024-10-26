const http = require("http")
const express = require('express')
const mongoose = require('mongoose')


const { connectMongoDb } = require("./connection")
const { logReqRes } = require("./middlewares")



const app = express()
const PORT= 8000


connectMongoDb('mongodb+srv://athirarun219:waitnpCa24myAvRI@cluster0.k7u1d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>
    console.log("Mongodb connected")
    
)
app.use(express.urlencoded({extended:true}))
app.use(logReqRes("log.txt"))

app.listen(PORT,()=>console.log(`Server started at PORT :${PORT}`))

