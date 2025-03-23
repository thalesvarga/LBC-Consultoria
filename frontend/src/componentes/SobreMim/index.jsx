import React from "react";
import { motion } from "framer-motion";
import "./sobreMim.css";
import logo from "/src/assets/imagens/Logo-Trianguo.svg";

const SobreMim = ({ titulo, subtitulo, onAnimacaoCompleta }) => {
  return (
    <section className="sobre-mim">
      <div className="sobre-mim-conteudo">
        {/* Logo */}
        <motion.img
          className="imagem"
          src={logo}
          alt="Logo"
          initial={{ x: 230 }}
          animate={{ x: -35 }}
          transition={{ duration: 1.1, delay: 1.6 }}
        />

        {/* Título */}
        <motion.h5
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          {titulo}
        </motion.h5>

        {/* Subtítulo */}
        <motion.h6
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.9 }}
          onAnimationComplete={onAnimacaoCompleta} 
        >
          {subtitulo}
        </motion.h6>
      </div>
    </section>
  );
};

export default SobreMim;