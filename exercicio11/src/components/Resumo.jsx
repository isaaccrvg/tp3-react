import React from 'react';

const Resumo = ({ data }) => {
  const { nome, email, mensagem } = data;

  return (
    <div style={resumoContainerStyle}>
      <h3>Resumo dos Dados Submetidos:</h3>
      <p><strong>Nome:</strong> {nome}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Mensagem:</strong> {mensagem}</p>
    </div>
  );
};

const resumoContainerStyle = {
  marginTop: '20px',
  padding: '15px',
  border: '1px solid #ddd',
  borderRadius: '10px',
  backgroundColor: '#e9e9e9',
};

export default Resumo;
