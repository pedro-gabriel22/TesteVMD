const usuarioModal = require("../Model/Cliente")


const registro = async (req,res)=>{
    const validarusuario = await usuarioModal.findOne({cpf:req.body.cpf})
    if(validarusuario){
        res.status(400).send('usuario já possui um cadastro'),
        console.log('usuario já possui um cadastro');
    }else{
        
        const nome = req.body.nome
        const cpf = req.body.cpf 
        const cep = req.body.cep
        const logradouro = req.body.logradouro
        const cidade = req.body.cidade
        const uf = req.body.uf
        const ddd = req.body.ddd
        const numero = req.body.numero
        

        const usuarioDB = new usuarioModal(
            {
                nome:nome,
                cpf:cpf,
                endereco:{
                    cep:cep,
                    logradouro:logradouro,
                    cidade:cidade,
                    uf:uf
                },
                telefone:{
                    ddd:ddd,
                    numero:numero
                },
                saldo:0
            }
        )
        try{
            await usuarioDB.save()
            console.log('inserido com sucesso');
        }catch(error){
            console.log("falha ao cadastrar",error);
        }

    }
}

const allClientes = async (req,res)=>{
    usuarioModal.find({}, (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result)
        }
    })
}

const alterarUser = async (req,res)=>{
    const id = req.body.id
    const novocpf = req.body.novocpf

    try {
     await usuarioModal.findById(id,(err,updateCpf)=>{
        updateCpf.cpf = novocpf
        updateCpf.save()
     })   
    } catch (error) {
        res.send(error)
        
    }
}

const deletarUser = async (req,res)=>{
    const id = req.params.id
    await usuarioModal.findByIdAndDelete(id).exec()
}

module.exports = {registro, allClientes, alterarUser, deletarUser}