import React, { useState, useEffect, useRef } from "react";
import "./missao.css";

const Missao = () => {
  const sectionRef = useRef(null);
  const tituloRef = useRef(null);
  const paragrafoRef = useRef(null);
  const numerosContainerRef = useRef(null);
  const botaoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 } // Ajuste para garantir que a seção esteja visível
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // 1. Animação do título (0s)
    tituloRef.current.style.animation = "moveTitulo 1s ease-out forwards";

    // 2. Animação do parágrafo (1s após o título)
    setTimeout(() => {
      paragrafoRef.current.style.animation = "moveParagrafo 1s ease-out forwards";
    }, 1000);

    // 3. Animação dos números e subtítulos (2s após o título)
    setTimeout(() => {
      numerosContainerRef.current.style.animation = "moveNumeros 1s ease-out forwards";

      // Inicia a contagem dos números
      const counters = numerosContainerRef.current.querySelectorAll("h3");
      counters.forEach((counter) => {
        const target = +counter.dataset.value;
        let current = 0;
        const duration = 2000; // 2 segundos
        const increment = target / (duration / 10); // Incremento a cada 10ms

        const timer = setInterval(() => {
          current += increment;
          counter.textContent = `+${Math.floor(current)}`;
          if (current >= target) {
            clearInterval(timer);
            counter.textContent = `+${target}`;
          }
        }, 10);
      });

      // Anima subtítulos dos números
      const subtitulos = numerosContainerRef.current.querySelectorAll("h4");
      subtitulos.forEach((subtitulo) => {
        subtitulo.style.animation = "fadeIn 1s ease-out forwards";
      });
    }, 2000);

    // 4. Animação do botão (3s após o título)
    setTimeout(() => {
      botaoRef.current.style.animation = "moveBotao 1s ease-out forwards";
    }, 3000);
  }, [isVisible]);

  return (
    <section className="missao" id="Sobre" ref={sectionRef}>
      <div className="missao-titulo">
        <h2 ref={tituloRef}>Nossa Missão</h2>
        <p ref={paragrafoRef}>
          <strong>
            Na LBC, não vendemos planos de saúde: cuidamos da sua jornada.
          </strong>
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
      <div className="missao-numeros" ref={numerosContainerRef}>
        <div className="missao-vidas-protegidas">
          <h3 data-value="3000">+0</h3>
          <h4>Vidas Protegidas</h4>
        </div>
        <div className="missao-empresas-ativas">
          <h3 data-value="100">+0</h3>
          <h4>Empresas Ativas</h4>
        </div>
        <a href="/captacao" className="botao-cotacao" ref={botaoRef}>
          Faça uma cotação
        </a>
      </div>
    </section>
  );
};

export default Missao;