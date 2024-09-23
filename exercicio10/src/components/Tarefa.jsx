
import React from 'react';

const Tarefa = ({ nome, status }) => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    margin: '5px 0',
    border: '1px solid #ddd',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
  };

  const nomeStyle = {
    fontWeight: 'bold',
    color: '#333',
  };

  const statusStyle = {
    padding: '2px 8px',
    borderRadius: '2px',
    color: 'white',
    backgroundColor: status === 'Feito' ? 'green' : status === 'Em andamento' ? 'orange' : 'red',
  };

  return (
    <div style={containerStyle}>
      <span style={nomeStyle}>{nome}</span>
      <span style={statusStyle}>{status}</span>
    </div>
  );
};

export default Tarefa;
