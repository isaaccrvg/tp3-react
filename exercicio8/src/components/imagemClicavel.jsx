import React from 'react'
import './ImagemClicavel.css';


const ImagemClicavel = ({ imagem,descricao,link }) => {
  return (
    <div className='container'>
        <a href="{link}" target='_blank' rel='noopener noreferrer'>
          <img src={imagem} alt="{descricao}" style={{width: '600px', height: '300px'}}/>
        </a>
    </div>
  )
}

export default ImagemClicavel;
