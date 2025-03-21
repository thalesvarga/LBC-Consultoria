import React, { useState, useEffect, useRef } from "react";
import "./carrossel.css";
import imagemLogo from "/src/assets/imagens/banner-teste.png"
import videoCarrossel from "/src/assets/imagens/banner-video.mp4"
import imagemSeguroDeVida from "/src/assets/imagens/seguro-de-vida1.jpg"


const Carrossel = () => {
  const [slideAtual, setSlideAtual] = useState(1); 
  const [autoPlayAtivo, setAutoPlayAtivo] = useState(true);
  const slidesRef = useRef(null);

  const slidesOriginais = [
    {
      tipo: "imagem",
      conteudo:{imagemLogo} ,
      titulo: "Especialista em Gestão de Planos de Saúde",
      descricao: "Cuidamos de tudo para você.",
      botaoTexto: "Faça uma cotação",
      botaoLink: "#slide1",
      classe: "slide-estilo-1",
    },
    {
      tipo: "video",
      conteudo: {videoCarrossel},
      titulo: "Planos Empresariais *",
      descricao: "Com preços atrativos e que cabem no bolso.",
      botaoTexto: "Contrate",
      botaoLink: "#slide2",
      classe: "slide-estilo-2",
    },
    {
      tipo: "imagem",
      conteudo:{imagemSeguroDeVida} ,
      titulo: "Seguro de Vida",
      descricao:"Garanta tranquilidade para você e seu futuro.",
      botaoTexto: "Contrate agora",
      botaoLink: "#slide1",
      classe: "slide-estilo-3",
    },
  ];

  // Clona o último slide e o primeiro para criar loop
  const slides = [
    slidesOriginais[slidesOriginais.length - 1], // Último slide original no início
    ...slidesOriginais,
    slidesOriginais[0], // Primeiro slide original no final
  ];

  useEffect(() => {
    let intervalo;
    if (autoPlayAtivo) {
      intervalo = setInterval(() => {
        proximoSlide();
      }, 8000);
    }

    return () => clearInterval(intervalo);
  }, [autoPlayAtivo, slideAtual]);

  const proximoSlide = () => {
    slidesRef.current.style.transition = "transform 0.5s ease-in-out";
    setSlideAtual((prev) => {
      const novoIndex = prev + 1;
      if (novoIndex >= slides.length) {
        return prev; 
      }
      return novoIndex;
    });
  };

  const slideAnterior = () => {
    slidesRef.current.style.transition = "transform 0.5s ease-in-out";
    setSlideAtual((prev) => {
      const novoIndex = prev - 1;
      if (novoIndex < 0) {
        return prev; 
      }
      return novoIndex;
    });
  };

  // Monitora mudanças no slideAtual para reiniciar o loop
  useEffect(() => {
    if (slideAtual === 0) {
      // Quando chegar no clone do último slide, volta para o original
      setTimeout(() => {
        slidesRef.current.style.transition = "none";
        setSlideAtual(slidesOriginais.length);
      }, 800); // Tempo igual à duração da transição
    }

    if (slideAtual === slides.length - 1) {
      // Quando chegar no clone do primeiro slide, volta para o original
      setTimeout(() => {
        slidesRef.current.style.transition = "none";
        setSlideAtual(1);
      }, 800);
    }
  }, [slideAtual]);

  return (
    <div className="carrossel">
      <div
        ref={slidesRef}
        className="slides"
        style={{
          transform: `translateX(-${slideAtual * 100}%)`,
          display: "flex",
        }}
      >
        {slides.map((slide, indice) => (
          <div key={indice} className={`slide ${slide.classe}`}>
            <div className="conteudo-slide">
              <h2 className="titulo">{slide.titulo}</h2>
              <p className="descricao">{slide.descricao}</p>
              <a
                href={slide.botaoLink}
                className={`botao ${
                  slide.classe === "slide-estilo-1" ? "botao-centralizado" : ""
                }`}
              >
          <span className="botao-texto">{slide.botaoTexto}</span>
              </a>
            </div>
            {slide.tipo === "imagem" ? (
              <div
                className="imagem-slide"
                style={{ backgroundImage: `url(${slide.conteudo})` }}
              />
            ) : (
              <div className="video-slide">
                <video autoPlay muted loop playsInline>
                  <source src={slide.conteudo} type="video/mp4" />
                </video>
              </div>
            )}
          </div>
        ))}
      </div>

      <button className="botao-navegacao anterior" onClick={slideAnterior}>
        ❮
      </button>
      <button className="botao-navegacao proximo" onClick={proximoSlide}>
        ❯
      </button>

      <div className="indicadores-container">
        <div className="indicadores">
          {slidesOriginais.map((_, indice) => (
            <span
              key={indice}
              className={`indicador ${
                indice === slideAtual - 1 ? "ativo" : ""
              }`}
              onClick={() => setSlideAtual(indice + 1)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carrossel;