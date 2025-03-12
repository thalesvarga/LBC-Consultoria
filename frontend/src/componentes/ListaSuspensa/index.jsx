import React from 'react';
import "./listaSuspensa.css";

const ListaSuspensa = ({ onChange }) => {
  const opcoes = [
    { value: "empresarial", label: "Plano Empresarial" },
    { value: "melhor-idade", label: "Plano Melhor Idade" }, 
    { value: "plano-pet", label: "Plano Pet" }, 
    { value: "odontologico", label: "Plano Odontológico" },
    { value: "por-adesao", label: "Plano Por Adesão" }, 
    { value: "seguro-de-vida", label: "Seguro de Vida" }, 
  ];

  return (
    <select onChange={(e) => onChange(e.target.value)}>
      <option value="">Selecione um serviço</option>
      {opcoes.map((opcao, index) => (
        <option key={index} value={opcao.value}>
          {opcao.label}
        </option>
      ))}
    </select>
  );
};

export default ListaSuspensa;