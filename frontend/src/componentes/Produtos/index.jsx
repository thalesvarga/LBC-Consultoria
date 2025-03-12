import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./produtos.css";

// Importação de imagens
import logo from "/src/assets/imagens/lbc-logo-azul.webp";
import empresarial from "/src/assets/imagens/empresarial.png";
import adesao from "/src/assets/imagens/plano_por_adesao.png";
import melhorIdade from "/src/assets/imagens/melhor idade.png";
import odontologico from "/src/assets/imagens/odontologico.png";
import pet from "/src/assets/imagens/pet.jpg";
import seguroVida from "/src/assets/imagens/seguro_de_vida.png";

const cardsData = [
  { image: empresarial, title: "Plano Empresarial", servico: "empresarial" },
  { image: adesao, title: "Coletivo por Adesão", servico: "por-adesao" },
  { image: melhorIdade, title: "Plano Melhor Idade", servico: "melhor-idade" },
  { image: odontologico, title: "Plano Odontológico", servico: "odontologico" },
  { image: pet, title: "Plano Pet", servico: "plano-pet" },
  { image: seguroVida, title: "Seguro de Vida", servico: "seguro-de-vida" },
];

const Produtos = () => {
  const [tituloVisivel, setTituloVisivel] = useState(false); // Estado para o título
  const [containerVisivel, setContainerVisivel] = useState(false); // Estado para o container
  const tituloRef = useRef(null); // Referência para o título
  const containerRef = useRef(null); // Referência para o container

  useEffect(() => {
    // Observador para o título
    const observerTitulo = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTituloVisivel(true); // Ativa o estado quando o título é visível
            observerTitulo.unobserve(entry.target); // Para de observar após detectar
          }
        });
      },
      {
        threshold: 0.5, // Define o limiar de visibilidade (50% do elemento visível)
      }
    );

    // Observador para o container
    const observerContainer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setContainerVisivel(true); // Ativa o estado quando o container é visível
            observerContainer.unobserve(entry.target); // Para de observar após detectar
          }
        });
      },
      {
        threshold: 0.5, // Define o limiar de visibilidade (50% do elemento visível)
      }
    );

    // Observar os elementos
    if (tituloRef.current) {
      observerTitulo.observe(tituloRef.current);
    }
    if (containerRef.current) {
      observerContainer.observe(containerRef.current);
    }

    // Limpar observadores ao desmontar
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
      <div>
        {/* <h2>LBC Consultoria</h2> */}
      </div>
      <div className="produtos-titulo" ref={tituloRef}>
        <h2 className={`titulo-animado ${tituloVisivel ? "visible" : ""}`}>
          O QUE VOCÊ PROCURA?
        </h2>
      </div>
      <div
        className={`produtos-container ${containerVisivel ? "visible" : ""}`}
        ref={containerRef}
      >
        {cardsData.map((card, index) => (
          <Link
            key={index}
            to={`/captacao/${card.servico}`}
            className={`produtos-card-link ${
              containerVisivel ? "visible" : ""
            }`}
          >
            <div className="produtos-card">
              <div className="produtos-container-imagem">
                <img src={card.image} alt={card.title} className="card-imagem" />
                <h3 className="card-title">{card.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Produtos;  