import React, { useEffect, useState } from "react";
import "./sobreMim.css";
import { Link } from "react-router-dom"; 

const SobreMim = ({ titulo, subtitulo, texto, mostrarBotao = true }) => {
  const [carregado, setCarregado] = useState(false);
  const [mostrarTitulo, setMostrarTitulo] = useState(false);
  const [mostrarSubtitulo, setMostrarSubtitulo] = useState(false);
  const [mostrarTexto, setMostrarTexto] = useState(false)
  const [mostrarBotaoAnimado, setMostrarBotaoAnimado] = useState(false);

  useEffect(() => {
    window.onload = () => {
      setCarregado(true);
    };

    if (document.readyState === "complete") {
      setCarregado(true);
    }

    return () => {
      window.onload = null;
    };
  }, []);

  useEffect(() => {
    if (carregado) {
      
      const timerTitulo = setTimeout(() => {
        setMostrarTitulo(true);
      }, 600); 

      const timerSubtitulo = setTimeout(() => {
        setMostrarSubtitulo(true);
      }, 1300); 


      const timerTexto = setTimeout(() => {
        setMostrarTexto(true);
      }, 1800); 
      
      const timerBotao = setTimeout(() => {
        setMostrarBotaoAnimado(true);
      }, 2200); 

      return () => {
        clearTimeout(timerTitulo);
        clearTimeout(timerSubtitulo);
        clearTimeout(timerTexto);
        clearTimeout(timerBotao);
      }; 
    }
  }, [carregado]);

  return (
    <section className="sobre-mim">
      <div className="sobre-mim-conteudo">
        <div>{mostrarTitulo && <h2 className="fade-in">{titulo}</h2>}</div>
        <div>
          {mostrarSubtitulo && <h6 className="slide-in-left">{subtitulo}</h6>}
        </div>
        <div>
          {mostrarTexto && <p className="slide-in-left">{texto}</p>}
        </div>
        {mostrarBotao && mostrarBotaoAnimado && (
          <Link to="/captacao" className="botao-cta fade-in-up">Peça um orçamento</Link>
        )}
    
      </div>
      <img
        src="./src/assets/imagens/Ativo 9.svg"
        alt="formas geometricas decorativas"
      />
    </section>
  );
};

export default SobreMim;
