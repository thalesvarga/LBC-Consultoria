import React from "react";
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

function App() {
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  return (
    <div className="App">
      {isHomePage ? <Header /> : <HeaderSecundario />}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SobreMim
                titulo="Especialistas em planos de saúde."
                subtitulo="Cuidamos de tudo para você."
                texto="Na LBC, oferecemos soluções personalizadas para proteger sua família e sua empresa, com a expertise de mais de 15 anos de mercado."
              />
              <Produtos />
              <Missao />
              <Parceiros />
              <Contato />
              <Footer />
            </>
          }
        />

        {/* Rota para captacao com serviço específico */}
        <Route path="/captacao/:servico" element={<CaptacaoServicos />} />

        {/* Rota para captacao geral */}
        <Route path="/captacao" element={<CaptacaoServicos />} />
      </Routes>
    </div>
  );
}

export default App;
