import React from 'react';

import './Perfil.css'
const Perfil = ({ usuario }) => {
    return (
        <div className='container'>
            <h1>Área de acesso:</h1>
            <div className='input-field'>
                <h3><strong>Nome:</strong> {usuario.nome}</h3>
            </div>
            <div className='input-field'>
                <p><strong>E-mail:</strong> {usuario.email}</p>
            </div>
            <div className='input-field'>
                <p><strong>Endereço:</strong> {usuario.endereco}</p>
            </div>
            <button>Entrar</button>
        </div>
    )
}

export default Perfil;
