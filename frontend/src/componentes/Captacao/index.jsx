import "./captacao.css"
import React, { useState } from "react";


const Captacao = ({ campos }) => {
  const [formData, setFormData] = useState({});
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados enviados:", formData); 
  };

  if (!Array.isArray(campos)) {
    console.error("Erro: `campos` não é um array válido.");
    return <p>Erro ao carregar o formulário.</p>;
  }

  return (
    
    <form onSubmit={handleSubmit}>
      {campos.map((campo, index) => (
        <div key={index}>
          <label htmlFor={campo.name}>{campo.label}:</label>
          <input
            type={campo.type || "text"} 
            id={campo.name}
            name={campo.name}
            placeholder={campo.placeholder}
            onChange={handleChange}
          />
        </div>
      ))}
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Captacao;