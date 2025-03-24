import React, { useState, useEffect, useRef } from "react";
import "./produtos.css";
import logo from "/src/assets/imagens/lbc-logo-azul.webp";
import { Link } from "react-router-dom";
import bordaInterna from "/src/assets/imagens/bordainterna-card.png"

import empresarial from "/src/assets/imagens/empresarial.png";
import adesao from "/src/assets/imagens/plano_por_adesao.jpg";
import melhorIdade from "/src/assets/imagens/melhor idade.png";
import odontologico from "/src/assets/imagens/odontologico.png";
import pet from "/src/assets/imagens/plano-pet.jpg";
import seguroVida from "/src/assets/imagens/seguro-de-vida4.jpg";

const cardsData = [
  {
    id: 1,
    titulo: "Plano Empresarial",
    descricao: "A saúde da sua empresa é a nossa prioridade.",
    beneficios: ["A partir de 3 a 5 vidas*"],
    imagem: empresarial,
    servico: "empresarial",
  },
  {
    id: 2,
    titulo: "Coletivo por Adesão",
    descricao: "Para você que faz parte de uma entidade de classe profissional ou sindicato.",
    beneficios: [],
    imagem: adesao,
    servico: "por-adesao",
  },
  {
    id: 3,
    titulo: "Plano Melhor Idade",
    descricao: "Ideal para viver a melhor fase da vida.",
    beneficios: [],
    imagem: melhorIdade,
    servico: "melhor-idade",
  },
  {
    id: 4,
    titulo: "Plano Odontológico",
    descricao: "A saúde do seu corpo começa com a saúde Bucal.",
    beneficios: [],
    imagem: odontologico,
    servico: "odontologico",
  },
  {
    id: 5,
    titulo: "Plano Pet",
    descricao: "O cuidado que seu melhor amigo preisa e merece.",
    beneficios: [],
    imagem: pet,
    servico: "plano-pet",
  },
  {
    id: 6,
    titulo: "Seguro de Vida",
    descricao: "Mais tranquilidade para você e a sua familia.",
    beneficios: [],
    imagem: seguroVida,
    servico: "seguro-de-vida",
  },
];

const Produtos = () => {
  const [cardAtivo, setCardAtivo] = useState(cardsData[0]);
  const [animar, setAnimar] = useState(false);
  const [visivel, setVisivel] = useState(false);
  const sectionRef = useRef(null); 

  const trocarCard = (card) => {
    setAnimar(true);
    setTimeout(() => {
      setCardAtivo(card); 
      setAnimar(false); 
    }, 500);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisivel(true);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      className={`produtos ${visivel ? "visivel" : ""}`}
      id="Servicos"
      ref={sectionRef}
    >
     
      <div className="produtos-titulo">
        <h2>Conheça os nossos serviços</h2>
      </div>

      <div className="produtos-container">
 
        <div className={`card-ativo ${animar ? "animar-scale" : ""}`}>
          <div className="card-ativo-imagem">
            <img src={cardAtivo.imagem} alt={cardAtivo.titulo} />
          </div>
          <div className="card-ativo-conteudo">
            <h3>{cardAtivo.titulo}</h3>
            <p>{cardAtivo.descricao}</p>
            <ul>
              {cardAtivo.beneficios.map((beneficio, index) => (
                <li key={index}>{beneficio}</li>
              ))}
            </ul>
            <Link to={`/captacao/${cardAtivo.servico}`} className="link">
              Saiba mais
            </Link>
          </div>
        </div>

        {/* Abas */}
        <div className="abas-container">
          {cardsData.map((card) => (
            <div
              key={card.id}
              className={`aba ${card.id === cardAtivo.id ? "ativa" : ""}`}
              onClick={() => trocarCard(card)}
            >
              <h4>{card.titulo}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Produtos;