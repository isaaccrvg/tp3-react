import React, { useState } from 'react';
import Resumo from './Resumo';

const Formulario = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: '',
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div style={formContainerStyle}>
      <h2  style={{color:'black',}}>Preencha o Formulário</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <div style={inputGroupStyle}>
          <label>Nome:</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>
        <div style={inputGroupStyle}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>
        <div style={inputGroupStyle}>
          <label>Mensagem:</label>
          <textarea
            name="mensagem"
            value={formData.mensagem}
            onChange={handleChange}
            required
            style={textareaStyle}
          />
        </div>
        <button type="submit" style={buttonStyle}>Enviar</button>
      </form>

      {submittedData && <Resumo data={submittedData} />}
    </div>
  );
};

const formContainerStyle = {
  margin: '20px auto',
  padding: '20px',
  border: '1px solid #ddd',
  borderRadius: '10px',
  width: '400px',
  backgroundColor: 'rgba(0,0,0,0.15)',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const inputGroupStyle = {
  marginBottom: '10px',
};

const inputStyle = {
  padding: '8px',
  width: '100%',
  borderRadius: '5px',
  border: '1px solid #ccc',
};

const textareaStyle = {
  ...inputStyle,
  height: '80px',
};

const buttonStyle = {
  padding: '10px',
  backgroundColor: 'red',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default Formulario;
