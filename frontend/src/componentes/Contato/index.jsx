import React from "react";
import Formulario from "../Formulario";
import "./contato.css"; 
import { Link } from "react-router-dom";


function Contato() {
  const camposContato = [
    { name: "nome", label: "Nome", placeholder: "Digite seu nome" },
    { name: "email", label: "Email", placeholder: "Digite seu e-mail", type: "email" },
    { name: "mensagem", label: "Mensagem", placeholder: "Digite sua mensagem", type: "textarea", rows: 5 },
  ];

  const handleSubmitContato = (formData) => {
    if (!formData.nome || !formData.email || !formData.mensagem) {
      return "Por favor, preencha todos os campos.";
    }
    if (!formData.email.includes("@")) {
      return "Por favor, insira um e-mail válido.";
    }
    return null; 
  };

  return (
    <section className="contato" id="Contato">
      <div className="contato-conteudo">
        <h4>
          Vamos cuidar de você <br />e da sua família!
        </h4>
        <p>
        Fale conosco e encontre o plano ideal.
        </p>
    
        <Link className="contato-link" to="/captacao">Solicite o orçamento</Link>
        
      </div>
    
      <Formulario 
          campos={camposContato}
          onSubmit={handleSubmitContato}
          
        />
    </section>
  );
}

export default Contato;
