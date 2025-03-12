import "./footer.css";
import React from "react";
import logo from "/src/assets/imagens/lbc-logo-branco.webp";

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
          <img src="./src/assets/imagens/facebook.png" alt="Facebook" />
        </a>

        <a
          href="https://www.instagram.com/lbcconsultoria/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="./src/assets/imagens/instagram.svg" alt="Instagram" />
        </a>
      </div>

      <div className="footer-whats">
        <a
          href="https://wa.me/seu-numero-aqui"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="./src/assets/imagens/whats.svg" alt="WhatsApp" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
