import React, { useState,useEffect } from "react";
import { motion } from "framer-motion";
import "./sobreMim.css";
import logo from "/src/assets/imagens/Logo-Trianguo.svg";
import seta from "/src/assets/imagens/arrow_down.png";

const SobreMim = ({subtitulo, onAnimacaoCompleta }) => {
  const [mostrarSeta, setMostrarSeta] = useState(false);
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleAnimacaoCompleta = () => {
    setMostrarSeta(true);
    if (onAnimacaoCompleta) onAnimacaoCompleta();

    document.body.style.overflow = "auto";
  };

  return (
    <section className="sobre-mim">
      <div className="sobre-mim-conteudo">
        <motion.img
          className="imagem"
          src={logo}
          alt="Logo"
          initial={{ x: 190 }}
          animate={{ x: -35 }}
          transition={{ duration: 1.1, delay: 1.6 }}
        />

        <motion.h6
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.9 }}
          onAnimationComplete={handleAnimacaoCompleta}
        >
          {subtitulo}
        </motion.h6>
      </div>

      <motion.img
        src={seta}
        alt="Seta para baixo"
        className={`sobre-mim-seta ${mostrarSeta ? "visivel" : "oculta"}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: mostrarSeta ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
    </section>
  );
};

export default SobreMim;
