import "./headerSecundario.css"
import { Link } from "react-router-dom";
import logo from "/src/assets/imagens/lbc-logo-azul.webp";

const HeaderSecundario = () => {
  return (
    <header className="header-secundario">
      <div className="header-menu-secundario">
        <Link to="/">
        <img src={logo} alt="Logo da LBC Consultoria" />
        </Link>
      </div>
    </header>
  );
};

export default HeaderSecundario;