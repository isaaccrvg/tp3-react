import { useState } from 'react'
import viteLogo from '/vite.svg'
import Produtos from "./Produtos.jsx";
import Logo from './img/foto.jpg'
import './Produtos.css'

function App() {

  const produto = {
    imagem: Logo,
    nome: 'Yezzy',
    preco: 2500,
    descricao: 'O Yeezy Boost 700 é um dos modelos mais icônicos da linha Yeezy, criada em parceria entre o designer Kanye West e a marca Adidas. Lançado pela primeira vez em 2017, o Yeezy Boost 700 chamou atenção por seu design robusto e visual retrô, influenciado pelos tênis de corrida dos anos 90.',
  }

  return (
    <>
      <Produtos produto={produto} />
    </>
  )
}

export default App;
