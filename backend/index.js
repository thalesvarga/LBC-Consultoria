const express = require("express");
const { google } = require("googleapis");
const cors = require("cors");
require('dotenv').config();

const app = express();
app.use(express.json());


const allowedOrigins = [
  'http://localhost:5173', 
  'https://lbc-consultoria.onrender.com' 
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['POST']
}));


console.log("GOOGLE_APPLICATION_CREDENTIALS:", process.env.GOOGLE_APPLICATION_CREDENTIALS);
console.log("SPREADSHEET_ID:", process.env.SPREADSHEET_ID);

if (!process.env.GOOGLE_APPLICATION_CREDENTIALS || !process.env.SPREADSHEET_ID) {
  console.error("Erro: GOOGLE_APPLICATION_CREDENTIALS ou SPREADSHEET_ID não configurados no .env");
  process.exit(1); 
}


const auth = new google.auth.GoogleAuth({
  credentials: JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS),
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });


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


(async () => {
  try {
    const response = await sheets.spreadsheets.get({
      spreadsheetId: process.env.SPREADSHEET_ID,
    });
    console.log("Planilha acessada com sucesso:", response.data.properties.title);
  } catch (error) {
    console.error("Erro ao acessar a planilha:", error.message);
    process.exit(1); 
  }
})();


app.post("/enviar-dados", async (req, res) => {
  console.log("Requisição recebida:", req.body);

  const { formData, servico } = req.body;

  if (!formData || !servico || !mapeamentoServicos[servico]) {
    console.error("Dados inválidos ou serviço não reconhecido.");
    return res.status(400).json({ error: "Dados inválidos ou serviço não reconhecido." });
  }

  try {
    const spreadsheetId = process.env.SPREADSHEET_ID;
    const colunasServico = mapeamentoServicos[servico];

 
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: "Folha1!A:A",
    });
    const linhas = response.data.values || [];
    const proximaLinha = linhas.length + 1;

 
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

    console.log("Valores mapeados:", valores);


    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `Folha1!A${proximaLinha}:Z${proximaLinha}`,
      valueInputOption: "RAW",
      resource: { values: [valores] },
    });

    console.log("Dados enviados com sucesso para a planilha.");
    res.status(200).json({ message: "Dados enviados com sucesso!" });
  } catch (error) {
    console.error("Erro detalhado:", error.response ? error.response.data : error.message);
    res.status(500).json({ error: `Erro interno: ${error.message}` });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});