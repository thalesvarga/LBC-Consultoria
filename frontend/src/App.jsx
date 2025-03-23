import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "/src/componentes/header";
import HeaderSecundario from "/src/componentes/HeaderSecundario";
import SobreMim from "/src/componentes/SobreMim";
import Produtos from "/src/componentes/Produtos";
import Missao from "/src/componentes/Missao";
import Parceiros from "/src/componentes/Parceiros";
import Contato from "/src/componentes/Contato";
import CaptacaoServicos from "/src/componentes/CaptacaoServicos";
import Footer from "/src/componentes/footer";
import Carrossel from "./componentes/Carrossel";
import "./App.css";

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [animacaoConcluida, setAnimacaoConcluida] = useState(false);

  const handleAnimacaoCompleta = () => {
    setAnimacaoConcluida(true);
  };

  return (
    <div className={`app ${animacaoConcluida ? "visivel" : ""}`}>
      <Routes>
        {/* Rota Home */}
        <Route
          path="/"
          element={
            <>

              {/* Header e Carrossel (aparecem após a animação) */}
              <div className="header-carrossel-container">
                <Header />
                <Carrossel />
              </div>

              {/* Sobre Mim (visível inicialmente) */}
              <SobreMim
                titulo=""
                subtitulo="Na LBC, oferecemos soluções personalizadas para você"
                onAnimacaoCompleta={handleAnimacaoCompleta}
              />
              {/* Restante do site (aparece após a animação) */}
              <div className="conteudo-principal">
                <Produtos />
                <Missao />
                <Parceiros />
                <Contato />
                <Footer />
              </div>
            </>
          }
        />

        {/* Rotas internas */}
        <Route
          path="/captacao/:servico"
          element={
            <>
              <HeaderSecundario />
              <CaptacaoServicos />
            </>
          }
        />
        <Route
          path="/captacao"
          element={
            <>
              <HeaderSecundario />
              <CaptacaoServicos />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;