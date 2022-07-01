import  React from 'react'

import Transacao from './pages/Transacao'
import Historico from './pages/Historico'
import Cadastro from './pages/Cadastro'
import './App.css'


function App() {
  
 
  return (
   <>
   <main>
      <Cadastro></Cadastro>
      <Transacao></Transacao>
      <Historico></Historico>
   </main>
    </>
  )
}

export default App
