const mongoose = require('mongoose')

const FinanceiroShema = new mongoose.Schema({
    cpf:{type:Number},
    tipo:{type:String},
    valor:{type:Number},
    data:{type:String}

})

const financeiro =  mongoose.model('financeiro',FinanceiroShema)
module.exports = financeiro 