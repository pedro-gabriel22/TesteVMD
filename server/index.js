const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require("mongoose")
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://localhost/cliente")
let db = mongoose.connection
db.on("error",()=> console.log("erro ao rodar banco..."))
db.once("open",()=>console.log("banco rodando..."))


app.listen(3001,(req,res)=>{
    console.log('servidor rodando...');
})