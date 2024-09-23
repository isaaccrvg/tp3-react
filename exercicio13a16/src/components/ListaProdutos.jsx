import { useState } from 'react';
import Produto from './Produto';
import './ListaProdutos.css';


const ListaProdutos = ({ produtos }) => {
  const [mostrarDisponiveis, setMostrarDisponiveis] = useState(true);

  const produtosFiltrados = mostrarDisponiveis
    ? produtos.filter(produto => produto.disponivel)
    : produtos;

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={mostrarDisponiveis}
          onChange={() => setMostrarDisponiveis(!mostrarDisponiveis)}
        />
        Mostrar apenas produtos disponíveis
      </label>
      <div>
        {produtosFiltrados.map(produto => (
          <Produto key={produto.id} produto={produto} />
        ))}
      </div>
    </div>
  );
};

export default ListaProdutos;
