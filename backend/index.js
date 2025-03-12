

const express = require("express");
const { google } = require("googleapis");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['POST']
}));
app.use(express.json());

// Autenticação com Google Sheets (CAMINHO ABSOLUTO)
const auth = new google.auth.GoogleAuth({
  keyFile: "/Users/thalesvarga/Desktop/dev/LBC Consultoria/lbc-consultoria-46df56e1ecb1.json",
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });

// Mapeamento de serviços
const mapeamentoServicos = {
  'empresarial': [
    'ID do Lead', 'Nome do Lead', 'Nome da Empresa', 'Plano Escolhido',
    'Telefone', 'E-mail', 'Estado', 'CNPJ', 'Profissão', 
    'Data de Nascimento', 'Nome do Pet', 'Espécie do Pet', 'Data de Captação', 
    'Status do Lead', 'Observações'
  ],
  'melhor-idade': [
    'ID do Lead', 'Nome do Lead', 'Nome da Empresa', 'Plano Escolhido',
    'Telefone', 'E-mail', 'Estado', 'CNPJ', 'Profissão', 
    'Data de Nascimento', 'Nome do Pet', 'Espécie do Pet', 'Data de Captação', 
    'Status do Lead', 'Observações'
  ],
  'plano-pet': [
    'ID do Lead', 'Nome do Lead', 'Nome da Empresa', 'Plano Escolhido',
    'Telefone', 'E-mail', 'Estado', 'CNPJ', 'Profissão', 
    'Data de Nascimento', 'Nome do Pet', 'Espécie do Pet', 'Data de Captação', 
    'Status do Lead', 'Observações'
  ],
  'odontologico': [
    'ID do Lead', 'Nome do Lead', 'Nome da Empresa', 'Plano Escolhido',
    'Telefone', 'E-mail', 'Estado', 'CNPJ', 'Profissão', 
    'Data de Nascimento', 'Nome do Pet', 'Espécie do Pet', 'Data de Captação', 
    'Status do Lead', 'Observações'
  ],
  'por-adesao': [
    'ID do Lead', 'Nome do Lead', 'Nome da Empresa', 'Plano Escolhido',
    'Telefone', 'E-mail', 'Estado', 'CNPJ', 'Profissão', 
    'Data de Nascimento', 'Nome do Pet', 'Espécie do Pet', 'Data de Captação', 
    'Status do Lead', 'Observações'
  ],
  'seguro-de-vida': [
    'ID do Lead', 'Nome do Lead', 'Nome da Empresa', 'Plano Escolhido',
    'Telefone', 'E-mail', 'Estado', 'CNPJ', 'Profissão', 
    'Data de Nascimento', 'Nome do Pet', 'Espécie do Pet', 'Data de Captação', 
    'Status do Lead', 'Observações'
  ]
};

// Endpoint principal
app.post("/enviar-dados", async (req, res) => {
  const { formData, servico } = req.body;

  // Validação básica
  if (!formData || !servico || !mapeamentoServicos[servico]) {
    return res.status(400).json({ error: "Dados inválidos ou serviço não reconhecido." });
  }

  try {
    const spreadsheetId = "1viVkid58ZHbDLmIhyhy2tj57IS9QD6bzbBIde63PUiE"; 
    const colunasServico = mapeamentoServicos[servico];

   
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: "Folha1!A:A", 
    });

    const linhas = response.data.values || [];
    const proximaLinha = linhas.length + 1;

    // 2. Mapeia os valores na ordem correta
    const valores = colunasServico.map(coluna => {
      switch (coluna) {
        case 'ID do Lead': return `LBC-${Date.now()}`;
        case 'Nome do Lead': return formData.nome || 'Não Aplicavel';
        case 'Nome da Empresa': return formData.empresa || 'Não Aplicavel';
        case 'Plano Escolhido': return servico;
        case 'Telefone': return formData.telefone;
        case 'E-mail': return formData.email;
        case 'Estado': return formData.estado;
        case 'CNPJ': return formData.cnpj || 'Não Aplicavel';
        case 'Profissão': return formData.profissao || 'Não Aplicavel';
        case 'Data de Nascimento': return formData.dataNascimento || 'Não Aplicavel';
        case 'Nome do Pet': return formData.nomePet || 'Não Aplicavel';
        case 'Espécie do Pet': return formData.especie || 'Não Aplicavel';
        case 'Data de Captação': return new Date().toLocaleDateString('pt-BR');
        case 'Status do Lead': return 'Novo';
        default: return '';
      }
    });

   
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `Folha1!A${proximaLinha}:Z${proximaLinha}`, 
      valueInputOption: "RAW",
      resource: { values: [valores] },
    });

    res.status(200).json({ message: "Dados enviados com sucesso!" });
  } catch (error) {
    console.error("Erro detalhado:", error);
    res.status(500).json({ error: `Erro interno: ${error.message}` });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
