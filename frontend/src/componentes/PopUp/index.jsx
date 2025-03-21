import React, { useState, useEffect } from "react";
import "./popup.css";
import imagemPet from "/src/assets/imagens/popup-imagem.jpg";

const PopUp = () => {
  const [visivel, setVisivel] = useState(false); 


  const fecharPopUp = () => {
    setVisivel(false);
  };

  // Efeito para abrir o pop-up automaticamente ao carregar a página
  useEffect(() => {
    setVisivel(true);
  }, []);

  return (
    <>
      {visivel && (
        <div className="pop-up-flutuante">
          <div className="conteudo-pop-up">
            <img src={imagemPet} alt="imagem de pets" />
            <h3>Condição Especial!</h3>
            <p>Você tem acesso a uma oferta exclusiva.</p>
            <button
              className="botao-cta"
              onClick={() => {
                alert("Você clicou no botão CTA!"); // Substitua por sua lógica (ex.: redirecionamento)
                fecharPopUp();
              }}
            >
              Aproveitar Agora
            </button>
            <button className="botao-fechar" onClick={fecharPopUp}>
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PopUp;