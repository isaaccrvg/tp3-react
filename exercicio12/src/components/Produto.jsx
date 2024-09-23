import React from 'react';

const Produto = ({ nome, preco, disponivel }) => {
  const produtoStyle = {
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: disponivel ? '#e0ffe0' : '#ffe0e0', 
  };

  const nomeStyle = {
    fontWeight: 'bold',
  };

  const precoStyle = {
    color: '#333',
  };

  const statusStyle = {
    color: disponivel ? 'green' : 'red',
    fontStyle: 'italic',
  };

  return (
    <div style={produtoStyle}>
      <span style={nomeStyle}>{nome}</span>
      <span style={precoStyle}>R$ {preco.toFixed(2)}</span>
      <span style={statusStyle}>{disponivel ? 'Disponível' : 'Indisponível'}</span>
    </div>
  );
};

export default Produto;
