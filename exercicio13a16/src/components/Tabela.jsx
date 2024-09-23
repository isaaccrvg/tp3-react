import React from 'react';
import './Tabela.css';
const Tabela = ({ dados }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>
        {dados.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.nome}</td>
            <td>R${item.preco}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tabela;
