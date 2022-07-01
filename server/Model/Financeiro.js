const mongoose = require('mongoose')

const FinanceiroShema = new mongoose.Schema({
    cpf:{type:Number,required: true,minLength:11, maxLength:11},
    tipo:{type:String,required: true},
    valor:{type:Number,required: true},
     data:{type:String}

})

const financeiro =  mongoose.model('financeiro',FinanceiroShema)
module.exports = financeiro 