import "../CaptacaoServicos/captacaoServicos.css"
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ListaSuspensa from "../ListaSuspensa";
import { validarNomeCompleto, validarEmail, validarCNPJ, validarTelefone } from "../../utilis/validacoes.js";

import etapa1 from "../../assets/imagens/familia.jpg"
import pet from "../../assets/imagens/familia.jpg";
import melhorIdade from "../../assets/imagens/melhor-idade-servico.jpg";
import empresarial from "../../assets/imagens/empresarial.jpg";
import seguroDeVida from "../../assets/imagens/familia.jpg";

const CaptacaoServicos = () => {
  const { servico } = useParams();
  const [etapa, setEtapa] = useState(servico ? 2 : 1);
  const [servicoSelecionado, setServicoSelecionado] = useState(servico || "");
  const [formData, setFormData] = useState({});
  const [formularioEnviado, setFormularioEnviado] = useState(false);
  const [erros, setErros] = useState({});

  const proximaEtapa = () => {
    if (!servicoSelecionado) {
      alert("Por favor, selecione um serviço antes de continuar.");
      return;
    }
    setEtapa(2);
  };

  const handleSelecao = (servico) => {
    setServicoSelecionado(servico);
  };

  const getConteudoPorServico = (servico) => {
    switch (servico) {
      case "empresarial":
        return {
          titulo: "Plano Empresarial",
          descricao: "Proteção completa para sua empresa e colaboradores.",
          imagem: empresarial,
          estilo: "estilo-empresarial",
          campos: [
            {
              name: "nome",
              label: "Nome",
              type: "text",
              placeholder: "Digite seu nome",
              validador: validarNomeCompleto,
              obrigatorio: true,
            },
            {
              name: "empresa",
              label: "Empresa",
              type: "text",
              placeholder: "Digite o nome da empresa",
              obrigatorio: true,
            },
            {
              name: "cnpj",
              label: "CNPJ",
              type: "text",
              placeholder: "Digite o CNPJ",
              validador: validarCNPJ,
              obrigatorio: true,
            },
            {
              name: "email",
              label: "E-mail",
              type: "email",
              placeholder: "Digite seu email",
              validador: validarEmail,
              obrigatorio: true,
            },
            {
              name: "telefone",
              label: "Telefone",
              type: "tel",
              placeholder: "Digite seu telefone",
              validador: validarTelefone,
              obrigatorio: true,
            },
            {
              name: "estado",
              label: "Estado",
              type: "text",
              placeholder: "Digite o seu Estado",
              obrigatorio: true,
            },
          ],
        };
      case "melhor-idade":
        return {
          titulo: "Plano Melhor Idade",
          descricao: "Cuidados especiais para a terceira idade.",
          imagem: melhorIdade,
          estilo: "estilo-melhor-idade",
          campos: [
            {
              name: "nome",
              label: "Nome",
              type: "text",
              placeholder: "Digite seu nome",
              validador: validarNomeCompleto,
              obrigatorio: true,
            },
            {
              name: "dataNascimento",
              label: "Data de Nascimento",
              type: "date",
              obrigatorio: true,
            },
            {
              name: "email",
              label: "E-mail",
              type: "email",
              placeholder: "Digite seu email",
              validador: validarEmail,
              obrigatorio: true,
            },
            {
              name: "telefone",
              label: "Telefone",
              type: "tel",
              placeholder: "Digite seu telefone",
              validador: validarTelefone,
              obrigatorio: true,
            },
            {
              name: "estado",
              label: "Estado",
              type: "text",
              placeholder: "Digite o seu Estado",
              obrigatorio: true,
            },
          ],
        };
      case "plano-pet":
        return {
          titulo: "Plano Pet",
          descricao:
            "Cuidados veterinários completos para seu animal de estimação.",
          imagem: pet,
          estilo: "estilo-plano-pet",
          campos: [
            {
              name: "nome",
              label: "Nome",
              type: "text",
              placeholder: "Digite seu nome",
              validador: validarNomeCompleto,
              obrigatorio: true,
            },
            {
              name: "nomePet",
              label: "Nome do Pet",
              type: "text",
              placeholder: "Digite o nome do pet",
              obrigatorio: true,
            },
            {
              name: "especie",
              label: "Espécie",
              type: "text",
              placeholder: "Ex.: Cachorro, Gato",
              obrigatorio: true,
            },
            {
              name: "email",
              label: "E-mail",
              type: "email",
              placeholder: "Digite seu email",
              validador: validarEmail,
              obrigatorio: true,
            },
            {
              name: "telefone",
              label: "Telefone",
              type: "tel",
              placeholder: "Digite seu telefone",
              validador: validarTelefone,
              obrigatorio: true,
            },
            {
              name: "estado",
              label: "Estado",
              type: "text",
              placeholder: "Digite o seu Estado",
              obrigatorio: true,
            },
          ],
        };
      case "odontologico":
        return {
          titulo: "Plano Odontológico",
          descricao: "Cuide do seu sorriso com nossos serviços especializados.",
          estilo: "estilo-odontologico",
          campos: [
            {
              name: "nome",
              label: "Nome",
              type: "text",
              placeholder: "Digite seu nome",
              validador: validarNomeCompleto,
              obrigatorio: true,
            },
            {
              name: "dataNascimento",
              label: "Data de Nascimento",
              type: "date",
              obrigatorio: true,
            },
            {
              name: "email",
              label: "E-mail",
              type: "email",
              placeholder: "Digite seu email",
              validador: validarEmail,
              obrigatorio: true,
            },
            {
              name: "telefone",
              label: "Telefone",
              type: "tel",
              placeholder: "Digite seu telefone",
              validador: validarTelefone,
              obrigatorio: true,
            },
            {
              name: "estado",
              label: "Estado",
              type: "text",
              placeholder: "Digite o seu Estado",
              obrigatorio: true,
            },
          ],
        };
      case "por-adesao":
        return {
          titulo: "Plano Por Adesão",
          descricao: "Planos personalizados para você e sua família.",
          estilo: "estilo-por-adesao",
          campos: [
            {
              name: "nome",
              label: "Nome",
              type: "text",
              placeholder: "Digite seu nome",
              validador: validarNomeCompleto,
              obrigatorio: true,
            },
            {
              name: "dataNascimento",
              label: "Data de Nascimento",
              type: "date",
              obrigatorio: true,
            },
            {
              name: "email",
              label: "E-mail",
              type: "email",
              placeholder: "Digite seu email",
              validador: validarEmail,
              obrigatorio: true,
            },
            {
              name: "telefone",
              label: "Telefone",
              type: "tel",
              placeholder: "Digite seu telefone",
              validador: validarTelefone,
              obrigatorio: true,
            },
            {
              name: "profissao",
              label: "Profissão",
              type: "text",
              placeholder: "Digite sua profissão",
              obrigatorio: true,
            },
            {
              name: "estado",
              label: "Estado",
              type: "text",
              placeholder: "Digite o seu Estado",
              obrigatorio: true,
            },
          ],
        };
      case "seguro-de-vida":
        return {
          titulo: "Seguro de Vida",
          descricao: "Proteja sua família com nossos planos personalizados.",
          imagem: seguroDeVida,
          estilo: "estilo-seguro-vida",
          campos: [
            {
              name: "nome",
              label: "Nome",
              type: "text",
              placeholder: "Digite seu nome",
              validador: validarNomeCompleto,
              obrigatorio: true,
            },
            {
              name: "dataNascimento",
              label: "Data de Nascimento",
              type: "date",
              obrigatorio: true,
            },
            {
              name: "email",
              label: "E-mail",
              type: "email",
              placeholder: "Digite seu email",
              validador: validarEmail,
              obrigatorio: true,
            },
            {
              name: "telefone",
              label: "Telefone",
              type: "tel",
              placeholder: "Digite seu telefone",
              validador: validarTelefone,
              obrigatorio: true,
            },
            {
              name: "estado",
              label: "Estado",
              type: "text",
              placeholder: "Digite o seu Estado",
              obrigatorio: true,
            },
          ],
        };
      default:
        return {
          titulo: "Serviço não encontrado",
          descricao: "O serviço selecionado não está disponível.",
          estilo: "estilo-padrao",
          campos: [],
      
        };
    }
  };

  const conteudo = getConteudoPorServico(servicoSelecionado);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErros((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async () => {
    const novosErros = {};

    // Valida campos obrigatórios
    conteudo.campos.forEach((campo) => {
      if (campo.obrigatorio && !formData[campo.name]) {
        novosErros[campo.name] = "Este campo é obrigatório.";
      }
    });

    // Valida formatos (email, CNPJ, etc.)
    if (formData.email && !validarEmail(formData.email)) {
      novosErros.email = "E-mail inválido.";
    }
    if (formData.cnpj && !validarCNPJ(formData.cnpj)) {
      novosErros.cnpj = "CNPJ inválido.";
    }
    if (formData.telefone && !validarTelefone(formData.telefone)) {
      novosErros.telefone = "Telefone inválido.";
    }

    if (Object.keys(novosErros).length > 0) {
      setErros(novosErros);
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/enviar-dados", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formData, servico: servicoSelecionado }),
      });

      const data = await response.json();
      if (!response.ok) {
        alert(`Erro: ${data.error}`);
        return;
      }

      setFormularioEnviado(true);
    } catch (error) {
      console.error("Erro na requisição:", error);
      alert("Falha na conexão com o servidor.");
    }
  };

  const handleVoltar = () => {
    setEtapa(1);
    setServicoSelecionado("");
    setFormData({});
    setErros({});
  };

  return (
    <section className="captacaoServico">
    {etapa === 1 && (
      <div className="captacao-etapa1">
        <div className="layout-container">
          <div className="lado-esquerdo">
            <img
              src={etapa1}
              alt="Imagem ilustrativa"
              className="imagem-lateral"
            />
          </div>
          <div className="lado-direito">
            <div className="formulario-container">
              <h2>Qual serviço você procura?</h2>
              <ListaSuspensa onChange={handleSelecao} />
            </div>
            <button
              className={`botao-continuar ${
                servicoSelecionado ? "ativo" : ""
              }`}
              onClick={proximaEtapa}
            >
              Continuar
            </button>
          </div>
        </div>
      </div>
    )}
    {etapa === 2 && servicoSelecionado && (
      <div className={`captacao-etapa2 ${conteudo.estilo}`}>
        {!formularioEnviado ? (
          <div className="layout-container">
            <div className="lado-esquerdo">
              {conteudo.imagem && (
                <img
                  src={conteudo.imagem}
                  alt="Imagem ilustrativa"
                  className="imagem-lateral"
                />
              )}
            </div>
            <div className="lado-direito">
              <div className="formulario-container">
                <h2>{conteudo.titulo}</h2>
                {conteudo.campos.map((campo) => (
                  <div key={campo.name} className="campo-formulario">
                    <label htmlFor={campo.name}></label>
                    <input
                      type={campo.type || "text"}
                      id={campo.name}
                      name={campo.name}
                      placeholder={campo.placeholder}
                      value={formData[campo.name] || ""}
                      onChange={handleChange}
                    />
                    {erros[campo.name] && (
                      <p style={{ color: "red", fontSize: "12px" }}>
                        {erros[campo.name]}
                      </p>
                    )}
                  </div>
                ))}
                <p>
                  Ao prosseguir, você concorda que a LBC pode compartilhar
                  seus dados com um dos nossos corretores para apresentar o
                  melhor plano para você.
                </p>
              </div>
              <div className="botoes">
                <button
                  className="botao-voltar"
                  onClick={handleVoltar}
                ></button>
                <button className="botao-continuar" onClick={handleSubmit}>
                  Continuar
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="mensagem-sucesso">
            <h2>Formulário enviado com sucesso!</h2>
          </div>
        )}
      </div>
    )}
    </section>
  );
};

export default CaptacaoServicos;