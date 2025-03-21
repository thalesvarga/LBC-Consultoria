import React from "react";
import { motion } from "framer-motion";
import "./sobreMim.css";
import { Link } from "react-router-dom";
import logo from "/src/assets/imagens/Logo-Trianguo.svg";
import setaParaBaixo from "/src/assets/imagens/arrow-down.png";

const SobreMim = ({ subtitulo, texto, mostrarBotao = true }) => {
      return (
        <section className="sobre-mim">
          <div className="sobre-mim-conteudo">
            {/* Logo */}
            <motion.img className="imagem"
              src={logo}
              alt="Logo"
              initial={{ x: 170 }} // Inicialmente no centro
              animate={{ x: -35 }} // Move para a esquerda quando o subtítulo entra
              transition={{ duration: 1.1, delay: 1.6 }}
            />
    
            {/* Subtítulo */}
            <motion.h6 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, delay: 1.7 }}
            >
              {subtitulo}
            </motion.h6>
    
            {/* Texto */}
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 2.5 }}
            >
              {texto}
            </motion.p>
          </div>
        </section>
      );
    };

export default SobreMim;