import React from "react";
import Card from "./Card";
import './App.css';

function App() {
    return (
        <div className = "app" >
            <h1>Cards</h1>
            <div className="card-container">
            <Card nome="Card 1" descricao="Primeiro filme." />
            <Card nome="Card 2" descricao="Segundo filme." />
            <Card nome="Card 3" descricao="Terceiro filme." />
            </div>
        </div>
    )
        
}

export default App;