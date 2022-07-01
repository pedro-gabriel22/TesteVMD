import Axios from 'axios'
import React from "react";
import { useState } from "react";

const Transacao = () =>{

    const [cpf,setCPF] = useState()
    const [tipo,setTipo] = useState('')
    const [valor, setValor] = useState()
    
    const RequisicaoFinanceira = () =>{
        Axios.post("http://localhost:3001/financeiro",{
            cpf:cpf,
            tipo:tipo,
            valor:valor
        })
    }

    return(
        <>
        <section>
            <div className='grid-layout'>
                <div className='home'>
                    <div>
                      
                        <div className='transferencia'>
                        <h3>Tranferencia</h3>
                        <input type="text" placeholder="CPF" onChange={(event)=>{setCPF(event.target.value)}} />
        <input type="text" placeholder="Tipo" onChange={(event)=>{setTipo(event.target.value)}} />
        <input type="text" placeholder="valor" onChange={(event)=>{setValor(event.target.value)}} />
        <br></br>

        <button
        onClick={()=>{RequisicaoFinanceira()
             window.location.reload()}}
        >Finalizar</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        </>
    )
}

export default Transacao