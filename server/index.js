const mongoose = require("mongoose")
const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())


const UsuarioRouter = require("./Routes/UsuarioRouter")

mongoose.connect("mongodb://localhost/cliente")
let db = mongoose.connection
db.on("error",()=> console.log("erro ao rodar banco..."))
db.once("open",()=>console.log("banco rodando..."))

app.use("/",UsuarioRouter)

app.listen(3001,(req,res)=>{
    console.log('servidor rodando...');
})