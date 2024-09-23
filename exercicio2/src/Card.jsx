import React from "react";
import './Card.css';

const Card = ({ nome, descricao }) => {
    return (
        <div className="card">
            <h2 className="card-nome">{nome}</h2>
            <p className="card-descricao">{descricao}</p>

        </div>
    );
};

export default Card;