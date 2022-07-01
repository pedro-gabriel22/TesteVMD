import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import axios from "axios";
import "../style.css";
const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [cpf, setCPF] = useState();
  const [cep, setCep] = useState();
  const [logradouro, setLogradouro] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");
  const [ddd, setDDD] = useState();
  const [numero, setNumero] = useState();

  const [novocpf, setNovocpf] = useState();

  const [clientes, setClientes] = useState([]);

  const registrarUsuario = () => {
    Axios.post("http://localhost:3001/registro", {
      nome: nome,
      cpf: cpf,
      cep: cep,
      logradouro: logradouro,
      cidade: cidade,
      uf: uf,
      ddd: ddd,
      numero: numero,
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/clientes").then((response) => {
      setClientes(response.data);
    });
  }, []);

  const alterarcpf = (id) => {
    Axios.put("http://localhost:3001/alterarUser", {
      id: id,
      novocpf: novocpf,
    });
  };
  const deletarUser = (id) => {
    axios.delete(`http://localhost:3001/deletarUser/${id}`);
  };

  return (
    <>
      <section>
        <div className="grid-layout">
          <div className="home">
            <div className="formulario">
              <div>
                <input
                  type="text"
                  placeholder="nome"
                  onChange={(event) => setNome(event.target.value)}
                />
                <input
                  type="number"
                  placeholder="cpf"
                  onChange={(event) => setCPF(event.target.value)}
                />
                <input
                  type="number"
                  placeholder="Cep"
                  onChange={(event) => setCep(event.target.value)}
                />
                <input
                  type="text"
                  placeholder="Logradouro"
                  onChange={(event) => setLogradouro(event.target.value)}
                />
                <input
                  type="text"
                  placeholder="Cidade"
                  onChange={(event) => setCidade(event.target.value)}
                />
                <input
                  type="text"
                  placeholder="UF"
                  onChange={(event) => setUf(event.target.value.toUpperCase())}
                />
                <input
                  type="number"
                  placeholder="ddd"
                  onChange={(event) => setDDD(event.target.value)}
                />
                <input
                  type="number"
                  placeholder="Numero"
                  onChange={(event) => setNumero(event.target.value)}
                />
              </div>
              <div className="btn">
                <button
                  onClick={() => {
                    registrarUsuario();
                    window.location.reload();
                  }}
                >
                  salvar
                </button>
              </div>
            </div>

            <div className="usuarios">
              {clientes.map((val, key) => {
                return (
                  <div className="lista-clientes" key={key}>
                  
                    <div className="lista">
                    <p>nome: {val.nome}</p>
                    <p>CPF: {val.cpf}</p>
                    <p>CEP: {val.endereco.cep}</p>
                    <p>Logradouro: {val.endereco.logradouro}</p>
                    <p>Cidade: {val.endereco.cidade}</p>
                    <p>UF: {val.endereco.uf}</p>
                     <p>DDD: {val.telefone.ddd}</p>
                    <p>Número: {val.telefone.numero}</p> 
                    </div>
                    
                    <div className="atualizacao">
                      <input
                      className="atualizacao-input"
                        placeholder="atualizar cpf"
                        type="Number"
                        onChange={(event) => {
                          setNovocpf(event.target.value);
                        }}
                      />
                      <button
                        onClick={() => {
                          alterarcpf(val._id)
                           window.location.reload();
                        }}
                      >
                        alterar
                      </button>
                      <button
                      onClick={() => {
                        deletarUser(val._id);
                        window.location.reload();
                      }}
                    >
                      excluir
                    </button>
                    </div>
                    
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Cadastro;
