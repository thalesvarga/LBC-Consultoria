import "./parceiros.css";
import React from 'react';
import amil from "/src/assets/imagens/amil.png";
import amplaSaude from "/src/assets/imagens/ampla-saude-seeklogo.png";
import hapvida from "/src/assets/imagens/hapvida.webp";
import notremade from "/src/assets/imagens/notremade.png";
import preventSenior from "/src/assets/imagens/prevent-senior.png";
import sulamerica from "/src/assets/imagens/sulamerica-saude-logo.png";
import bradesco from "/src/assets/imagens/bradesco.png";
import omint from "/src/assets/imagens/omint-logo.png";
import portoSeguro from "/src/assets/imagens/porto-seguro.png";
import unimed from "/src/assets/imagens/unimed.png";

const parceirosData = [
  { imagem: amil},
  { imagem: amplaSaude},
  { imagem: hapvida},
  { imagem: notremade },
  { imagem: preventSenior},
  { imagem: sulamerica},
  { imagem: bradesco},
  { imagem: omint},
  { imagem: portoSeguro},
  { imagem: unimed},
]

const Parceiros = () => {

  const duplicarDados = (arr) => [...arr, ...arr, ...arr]; 
  const linhaEsquerda = duplicarDados(parceirosData.slice(0, Math.ceil(parceirosData.length / 2)));
  const linhaDireita = duplicarDados(parceirosData.slice(Math.ceil(parceirosData.length / 2)));

  return (
    <section className="parceiros" id="Parceiros">
            <h3>Trabalhamos com os melhores parceiros do mercado</h3>
        <div className="parceiros-container">
            <div className="parceiros-linha-esquerda">
            <ul>
                {linhaEsquerda.map((parceiro, index) =>(
                <li><img src={parceiro.imagem} alt= {index + 1} /></li>
                ))}
            </ul>
            </div>
            <div className="parceiros-linha-direita">
            <ul>
                {linhaDireita.map((parceiro, index) =>(
                <li><img src={parceiro.imagem} alt= {index + 1} /></li>
                ))}
            </ul>
            </div>

        </div>
        </section>
  )
}

export default Parceiros

