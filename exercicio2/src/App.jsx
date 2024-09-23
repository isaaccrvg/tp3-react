import React, { useState } from "react";
import Card from "./Card";
import './App.css';

function App() {
    
    // cor inicial
    const [buttonColor,setButtonColor] = useState('red');
    
    // alternador de cor
    const toggleColor = () => {
        setButtonColor(buttonColor === 'green' ? 'blue' : 'green')
    }
    return (
        <div className = "app" >
            <h1>Cards</h1>
            <div className="card-container">
            <Card nome="Card 1" descricao="Primeiro filme." />
            <Card nome="Card 2" descricao="Segundo filme." />
            <Card nome="Card 3" descricao="Terceiro filme." />
            </div> 

            <div style={{textAlign: 'center', marginTop: '35px'}}>
                <h1>Botão</h1>
                <button onClick={toggleColor}
                style={{backgroundColor: buttonColor, 
                    color:'white',
                    border:'none',
                    padding:'10px 20px',
                    fontSize:'15px',
                    fontWeight:'400',
                    fontFamily:'verdana',
                    cursor:'pointer',
                    borderRadius:'6px',
                }}>
                    Clique Aqui
                </button>
            </div>
        </div>

    )
        
}

export default App;