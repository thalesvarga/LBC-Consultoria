import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./produtos.css";


import empresarial from "/src/assets/imagens/empresarial.png";
import adesao from "/src/assets/imagens/plano_por_adesao.png";
import melhorIdade from "/src/assets/imagens/melhor idade.png";
import odontologico from "/src/assets/imagens/odontologico.png";
import pet from "/src/assets/imagens/pet.jpg";
import seguroVida from "/src/assets/imagens/seguro_de_vida.png";

const cardsData = [
  { image: empresarial, titulo: "Plano Empresarial", servico: "empresarial" },
  { image: adesao, titulo: "Coletivo por Adesão", servico: "por-adesao" },
  { image: melhorIdade, titulo: "Plano Melhor Idade", servico: "melhor-idade" },
  { image: odontologico, titulo: "Plano Odontológico",servico: "odontologico"},
  { image: pet, titulo: "Plano Pet", servico: "plano-pet"},
  { image: seguroVida, titulo: "Seguro de Vida", servico:"seguro-de-vida"},
];

const Produtos = () => {
  const [tituloVisivel, setTituloVisivel] = useState(false);
  const [containerVisivel, setContainerVisivel] = useState(false);
  const tituloRef = useRef(null);
  const containerRef = useRef(null);

  const primeirosCards = cardsData.slice(0, 3); 
  const ultimosCards = cardsData.slice(3);

  useEffect(() => {
    const observerTitulo = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTituloVisivel(true);
            observerTitulo.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    const observerContainer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setContainerVisivel(true);
            observerContainer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );
    if (tituloRef.current) {
      observerTitulo.observe(tituloRef.current);
    }
    if (containerRef.current) {
      observerContainer.observe(containerRef.current);
    }
    return () => {
      if (tituloRef.current) {
        observerTitulo.unobserve(tituloRef.current);
      }
      if (containerRef.current) {
        observerContainer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section className="produtos" id="Servicos">
          <div className="produtos-titulo" ref={tituloRef}>
        <h2 className={`titulo-animado ${tituloVisivel ? "visible" : ""}`}>
          Conheça os nossos serviços
        </h2>
      </div>
    <div
      className={`produtos-container ${containerVisivel ? "visible" : ""}`}
      ref={containerRef}
    >
      {/* Título principal */}

  
      {/* Cards principais */}
      {primeirosCards.map((card, index) => (
        <Link
          key={index}
          to={`/captacao/${card.servico}`}
          className={`produtos-card-link ${
            containerVisivel ? "visible" : ""
          }`}
        >
          <div className="produtos-card">
            <div className="produtos-container-imagem">
              <img src={card.image} alt={card.titulo} className="card-imagem" />
              <h3 className="card-titulo">{card.titulo}</h3>
            </div>
          </div>
        </Link>
      ))}
  
      {/* Abas */}
      <div className="produtos-abas">
        {ultimosCards.map((card, index) => (
          <Link
            key={index}
            to={`/captacao/${card.servico}`}
            className={`produtos-aba-link ${
              containerVisivel ? "visible" : ""
            }`}
          >
            <div className="produtos-aba">
              <h3 className="aba-titulo">{card.titulo}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
  );
};

export default Produtos;
