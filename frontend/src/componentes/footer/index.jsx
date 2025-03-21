import "./footer.css";
import React from "react";
import logo from "/src/assets/imagens/lbc-logo-branco.webp";
import facebook from "/src/assets/imagens/facebook.png"
import instagram from "/src/assets/imagens/instagram.svg"
import whats from "/src/assets/imagens/whats.svg"

const Footer = () => {
  return (
    <div className="footer">
      <img src={logo} alt="Logo da LBC" />

      <div className="footer-copyright">
        <p>© Copyright LBC Consultoria - 2025 All Rights Reserved</p>
      </div>

      <div className="footer-imagens">
        <a
          href="https://www.facebook.com/LBCcorretora"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={facebook} alt="Facebook" />
        </a>

        <a
          href="https://www.instagram.com/lbcconsultoria/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagram} alt="Instagram" />
        </a>
      </div>

      <div className="footer-whats">
        <a
          href="https://wa.me/seu-numero-aqui"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={whats} alt="WhatsApp" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
