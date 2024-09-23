import React from 'react';
import Produto from './Produto';

const ListaDeProdutos = () => {
  const produtos = [
    { nome: 'Camiseta', preco: 49.99, disponivel: true },
    { nome: 'Calça Jeans', preco: 99.99, disponivel: false },
    { nome: 'Tênis', preco: 149.99, disponivel: true },
    { nome: 'Boné', preco: 29.99, disponivel: false },
  ];

  return (
    <div style={listaStyle}>
      <h2 style={tituloStyle}>Lista de Produtos</h2>
      {produtos.map((produto, index) => (
        <Produto
          key={index}
          nome={produto.nome}
          preco={produto.preco}
          disponivel={produto.disponivel}
        />
      ))}
    </div>
  );
};

const listaStyle = {
  width: '350px',
  margin: '20px auto',
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
  backgroundColor: '#f7f7f7',
};

const tituloStyle = {
  textAlign: 'center',
  marginBottom: '15px',
};

export default ListaDeProdutos;
