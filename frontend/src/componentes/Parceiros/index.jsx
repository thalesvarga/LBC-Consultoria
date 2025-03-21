import "./parceiros.css";
import React from 'react';

const parceirosData = [
  { image: "./assets/imagens/amil.png"},
  { image: "./assets/imagens/ampla-saude-seeklogo.png"},
  { image: "./assets/imagens/hapvida.webp"},
  { image: "./assets/imagens/notremade.png" },
  { image: "./assets/imagens/prevent-senior.png" },
  { image: "./assets/imagens/sulamerica-saude-logo.png"},
  { image: "./assets/imagens/bradesco.png"},
  { image: "./assets/imagens/omint-logo.png"},
  { image: "./assets/imagens/porto-seguro.png"},
  { image: "./assets/imagens/unimed.png"},
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
                <li key={index}><img src={parceiro.image} alt= {index + 1} /></li>
                ))}
            </ul>
            </div>
            <div className="parceiros-linha-direita">
            <ul>
                {linhaDireita.map((parceiro, index) =>(
                <li><img src={parceiro.image} alt= {index + 1} /></li>
                ))}
            </ul>
            </div>

        </div>
        </section>
  )
}

export default Parceiros

