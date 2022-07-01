import React from "react";
import Axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
const Historico = () =>{
    const [dados,setDados] = useState([])
    useEffect(()=>{
        
            Axios.get('http://localhost:3001/buscarDados').then((response)=>{
                setDados(response.data)
            })
        
        
    },[])
    
    
    
    return(
        <>
        <section className="s-historico">
            <div className="grid-layout">
                <div className="home">
                <div className="historico">
                <h3>historico</h3>
        {dados.map((val, key)=>{
            return(
             <div key={key} id={val.id}>
                <p>{val.cpf}</p>
                <p>{val.tipo}</p>
                <p>{val.valor.toFixed(2)}</p>
                <p>{val.data}</p>
             </div>   
            )
        })}
                </div>
                
                </div>
            </div>
        </section>
        
        </>
    )
}

export default Historico