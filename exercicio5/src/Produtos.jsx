import React from 'react';
// Exercício 5: 

// Crie uma aplicação React onde você receba um objeto produto com propriedades nome, preço e descrição, e renderize essas informações dentro de um componente Produto.
const Produtos = ({ produto }) => {
    return (
        <div className={'card'}>
            <img src="{Logo}" alt="yezzy-imagem" />
            <h2>{produto.nome}</h2>
            <p className={'preco'}>R$ {produto.preco}</p>
            <p className={'descricao'}>{produto.descricao}</p>
        </div>
    )
}

export default Produtos;