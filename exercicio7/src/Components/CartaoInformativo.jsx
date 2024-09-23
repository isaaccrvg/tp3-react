import React from 'react'

import './cartaoInformativo.css'
const CartaoInformativo = ({titulo,subtitulo,conteudo}) => {
  return (
    <div className='container'>
      <div className="input-field">
        <h2>{titulo}</h2>
      </div>
      <div className="input-field">
        <h4>{subtitulo}</h4>
      </div>
      <div className="input-field">
        <p>{conteudo}</p>
      </div>
    </div>
  )
}

export default CartaoInformativo;
