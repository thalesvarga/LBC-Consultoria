import React from "react";
import "./header.css";

import logo from "/src/assets/imagens/lbc-logo-branco.webp";
import iconeEmail from "/src/assets/imagens/email.png";
import iconeTelefone from "/src/assets/imagens/telefone.svg";
import imagemHeader from "/src/assets/imagens/Ativo 8.png";

const HeaderPrincipal = () => {
  return (
    <header className="header">
      <div className="header-email">
        <div>
          <a
            href="mailto:comercial@lbccorretora.com.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            comercial@lbccorretora.com.br
            <img src={iconeEmail} alt="Email" />
          </a>
          <a
            href="tel:+5511999999999"
            target="_blank"
            rel="noopener noreferrer"
          >
            +55 11 999999999
            <img
              src={iconeTelefone}
              alt="Telefone"
              className="header-telefone"
            />
          </a>
        </div>
      </div>

      <div className="header-menu">
        <img src={logo} alt="Logo da LBC Consultoria"/>
        <div className="header-menu-links">
          <ul>
            <li>
              <a href="#Sobre">Sobre</a>
            </li>
            <li>
              <a href="#Servicos">Serviços</a>
            </li>
            <li>
              <a href="#Parceiros">Parceiros</a>
            </li>
            <li>
              <a href="#Contato">Contato</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="header-forma-imagem">
        <img src={imagemHeader}  className="fade-in" alt="Forma e imagem do header" />
      </div>
    </header>
  );
};

export default HeaderPrincipal;
