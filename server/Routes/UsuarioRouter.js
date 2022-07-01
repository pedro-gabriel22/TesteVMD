const express = require("express")
const router = express.Router()

const Usuario = require("../Controllers/Usuario")
const transferencia = require("../Controllers/Financeiro")

router.post("/registro",Usuario.registro)
router.post("/financeiro", transferencia.financeiro)

router.get('/buscarDados', transferencia.allTranferencias)
router.get("/clientes",Usuario.allClientes)

router.put("/alterarUser", Usuario.alterarUser)

router.delete("/deletarUser/:id",Usuario.deletarUser)
module.exports = router