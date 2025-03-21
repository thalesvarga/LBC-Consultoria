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
import Carrossel from "./componentes/Carrossel";
import PopUp from "./componentes/PopUp";


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
            <Carrossel />
              <SobreMim
                titulo="Especialistas em planos de saúde."
                subtitulo="Na LBC, oferecemos soluções personalizadas"
                // texto="para proteger você, sua família ou sua empresa, contamos com a expertise de mais de 15 anos no mercado."
              />
          
              <Produtos />
              <Missao />  
              {/* <PopUp /> */}
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
