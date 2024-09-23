import React from 'react'
import Imagem from './Imagem';


const Galeria = () => {
    const imagens = [
        {src: './src/assets/Dinamite.jpg', alt: 'Img 1'},
        {src: './src/assets/junin.jpg', alt: 'Img 2'},
        {src: './src/assets/Craque.jpg', alt: 'Img 3'},

    ];
    return (
      <div style={{display:'flex',flexWrap:'wrap'}}>
      {imagens.map((imagem,index) => (
        <Imagem key={index} src={imagem.src} alt={imagem.alt}/>
      ))}
    </div>
  )
};

export default Galeria;


