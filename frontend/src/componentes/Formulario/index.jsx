import React, { useState } from "react";
import "./formulario.css";
import Captacao from "../Captacao";

function Formulario({ campos, onSubmit, estilo }) {
  const [formData, setFormData] = useState({});
  const [erro, setErro] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (onSubmit) {
      const erroValidacao = onSubmit(formData);
      if (erroValidacao) {
        setErro(erroValidacao);
        return;
      }
    }

    setErro("");
    alert("Formulário enviado com sucesso!");
    console.log(formData);
  };

  return (
    <section className="formulario" style={estilo}>
      <div className="formulario-contato">
        {campos ? (
          <form onSubmit={handleSubmit}>
            {campos.map((campo, index) => (
              <div key={index}>
                <label htmlFor={campo.name}>{campo.label}:</label>
                {campo.type === "textarea" ? (
                  <textarea
                    id={campo.name}
                    name={campo.name}
                    value={formData[campo.name] || ""}
                    onChange={handleChange}
                    placeholder={campo.placeholder}
                    rows={campo.rows || 5}
                  />
                ) : (
                  <input
                    type={campo.type || "text"}
                    id={campo.name}
                    name={campo.name}
                    value={formData[campo.name] || ""}
                    onChange={handleChange}
                    placeholder={campo.placeholder}
                  />
                )}
              </div>
            ))}

            {erro && <p className="erro">{erro}</p>}

            <button type="submit">Enviar</button>
          </form>
        ) : (
          // Caso `campos` seja indefinido, renderiza o Captacao diretamente
          <Captacao campos={campos} />
        )}
      </div>
    </section>
  );
}

export default Formulario;