import React from 'react';
import './Produto.css'; 

const Produto = ({ produto }) => {
  return (
    <div className={`produto ${!produto.disponivel ? 'esgotado' : ''}`}>
      <h3>{produto.nome}</h3>
      <p>Preço: R${produto.preco}</p>
    </div>
  );
};

export default Produto;
