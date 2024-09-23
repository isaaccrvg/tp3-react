import React from 'react';
import Cabecalho from './Cabecalho';
import Conteudo from './Conteudo';
import Menu from './Menu';
import Rodape from './Rodape';

const Pagina = () => {
  return (
    <div>
      <Cabecalho />
      <Menu />
      <Conteudo />
      <Rodape />
    </div>
  );
};

export default Pagina;
