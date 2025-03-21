import "./missao.css";
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

const Missao = () => {
  const sectionRef = useRef(null); // Referência para a seção
  const tituloRef = useRef(null);
  const paragrafoRef = useRef(null);
  const numerosRef = useRef(null);
  const botaoRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false); // Estado para verificar se a seção está visível

  useEffect(() => {
    // Configura o Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Ativa o estado quando a seção é visível
            observer.unobserve(entry.target); // Para de observar após detectar
          }
        });
      },
      {
        threshold: 0.5, // A animação começa quando 50% da seção estiver visível
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current); // Começa a observar a seção
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current); // Limpa o observador ao desmontar
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {

      setTimeout(() => {
        tituloRef.current.classList.add("visible");
      }, 0);

      // Animação dos números
      setTimeout(() => {
        numerosRef.current.classList.add("visible");
        // Contagem dos números
        const counters = numerosRef.current.querySelectorAll("h3");
        counters.forEach((counter) => {
          const target = +counter.textContent.replace("+", ""); // Remove o "+" e converte para número
          const duration = 2; // Duração da contagem em segundos
          const increment = target / (duration * 60); // 60 FPS

          let current = 0;
          const updateCounter = () => {
            if (current < target) {
              current += increment;
              counter.textContent = `+${Math.floor(current)}`;
              requestAnimationFrame(updateCounter);
            } else {
              counter.textContent = `+${target}`;
            }
          };

          updateCounter();
        });
      }, 2000);

      // Animação do parágrafo
      setTimeout(() => {
        paragrafoRef.current.classList.add("visible");
      }, 1000);

      setTimeout(() => {
        numerosRef.current.classList.add("visible");
      }, 2500);

      setTimeout(() => {
        botaoRef.current.classList.add("visible");
      }, 4000);
    }
  }, [isVisible]);

  return (
<section className="missao" id="Sobre" ref={sectionRef}>
      <div className="missao-titulo">
  <div className="missao-titulo-fundo"></div>
  <h2 ref={tituloRef}>Nossa Missão</h2>
        <p ref={paragrafoRef}>
          <strong>Na LBC, não vendemos planos de saúde: cuidamos da sua jornada.</strong>
          <br />
          Há 15 anos, ajudamos famílias e empresas a escolher a proteção ideal,
          com: <br />
          <br />
          ✅ Soluções personalizadas para cada necessidade; <br />
          ✅ Suporte contínuo em todas as etapas; <br />
          ✅ Transparência para que você decida com segurança.
          <br />
          <br />
          Sua saúde merece um parceiro que entende você. Com atendimento
          diferenciado, cuidamos dos detalhes para que você possa focar no que
          realmente importa.
        </p>
      </div>
      <div className="missao-numeros" ref={numerosRef}>
        <div className="missao-vidas-protegidas">
          <h3>+3000</h3>
          <h4>Vidas Protegidas</h4>
        </div>
        <div className="missao-empresas-ativas">
          <h3>100</h3>
          <h4>Empresas Ativas</h4>
        </div>
        <Link to="/captacao" className="botao-cotacao" ref={botaoRef}>
        Faça uma cotação
      </Link>
      </div>

</section>
  );
};

export default Missao;