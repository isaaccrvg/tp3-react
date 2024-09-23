import React from 'react';
import ListaProdutos from './components/ListaProdutos';
import Tabela from './components/Tabela';
import Pagina from './components/Pagina';

const App = () => {
  const produtos = [
    { id: 1, nome: 'Produto A', preco: 100, disponivel: true },
    { id: 2, nome: 'Produto B', preco: 150, disponivel: false },
    { id: 3, nome: 'Produto C', preco: 200, disponivel: true },
  ];

  const dadosTabela = [
    { id: 1, nome: 'Item 1', preco: 50 },
    { id: 2, nome: 'Item 2', preco: 75 },
    { id: 3, nome: 'Item 3', preco: 100 },
  ];

  return (
    <div>
      <Pagina />
      <h2>Lista de Produtos</h2>
      <ListaProdutos produtos={produtos} />
      <h2>Tabela de Dados</h2>
      <Tabela dados={dadosTabela} />
    </div>
  );
};

export default App;
