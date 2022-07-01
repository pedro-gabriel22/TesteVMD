const FinanceiroModal = require("../Model/Financeiro")
const usuarioModal = require("../Model/Cliente")
const financeiro = async (req,res) =>{
   
   
        

        const cpf = req.body.cpf
        const tipo = req.body.tipo
        const valor = req.body.valor



        const now = new Date()
        const dataFormatada = now.getDay()+'/'+now.getMonth()+'/'+now.getFullYear()
        const FinanceiroDB = new FinanceiroModal({
            cpf:cpf,
            tipo:tipo,
            valor:valor,
            data:dataFormatada
        })

        try { 
            await FinanceiroDB.save()
            console.log('transferencia feita com sucesso');
        } catch (error) {
            console.log("falha ao transferir",error);
        }
   
}


const allTranferencias = async (req,res)=>{
    FinanceiroModal.find({}, (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result)
        }
    })
}

module.exports = {financeiro, allTranferencias}