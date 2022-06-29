const mongoose = require('mongoose')

const ClienteShema = new mongoose.Schema({
    nome:{type:String, required:true},
    cpf:{type:Number, required:true, maxLength:11},
    endereco:{
        cep:{type:Number, required:true, maxLength:8},
        logradouro:{type:String, required:true},
        cidade:{type:String},
        uf:{type:String}
    },
    telefone:[{
        ddd:{type:Number, required:true, maxLength:2},
        numero:{type:Number, required:true, maxLength:9}
    }],
    saldo:{type:Number}
})

const cliente = mongoose.model('Cliente',ClienteShema)
module.exports = cliente