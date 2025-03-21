import React, { useEffect, useState } from "react";
import "./sobreMim.css";
import { Link } from "react-router-dom"; 
import logo from "/src/assets/imagens/Logo-Trianguo.svg"
import setaParaBaixo from "/src/assets/imagens/arrow-down.png"
// import fundoBanner from '/src/assets/imagens/FUNDO-banner.png';

const SobreMim = ({ subtitulo, texto, mostrarBotao = true }) => {
  const [carregado, setCarregado] = useState(false);
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
        clearTimeout(timerSubtitulo);
        clearTimeout(timerTexto);
        clearTimeout(timerBotao);
      }; 
    }
  }, [carregado]);

  return (
    <section className="sobre-mim" >
      <div className="sobre-mim-conteudo" >
        <img src={logo} alt="Logo LBC Consultoria" className="imagem"/>
        <div>
          {mostrarSubtitulo && <h6 className="slide-in-left">{subtitulo}</h6>}
        </div>
        <div>
          {mostrarTexto && <p className="slide-in-left">{texto}</p>}
        </div>
        {mostrarBotao && mostrarBotaoAnimado && (
          <Link to="/captacao" className="botao-cta fade-in-up">Fale com um dos nossos consultores</Link>
        )}
      </div>
      
        <img className="sobre-mim-seta" src={setaParaBaixo} alt="seta para baixo"/>
    </section>
  );
};

export default SobreMim;
