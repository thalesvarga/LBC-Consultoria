import { google } from "googleapis";

export const enviarParaGoogleSheets = async (formData) => {
  try {
    const auth = new google.auth.GoogleAuth({
      keyFile: "/Users/thalesvarga/Desktop/dev/LBC Consultoria/lbc-consultoria-46df56e1ecb1.json", // Caminho do arquivo JSON
      scopes: "https://www.googleapis.com/auth/spreadsheets",
    });

    const sheets = google.sheets({ version: "v4", auth });

    const spreadsheetId = "1viVkid58ZHbDLmIhyhy2tj57IS9QD6bzbBIde63PUiE"; // ID da planilha

    // Verifica a próxima linha vazia
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: "Folha1!A:A", // Verifica a coluna A
    });

    const proximaLinha = response.data.values ? response.data.values.length + 1 : 1;
    const range = `Folha1!A${proximaLinha}:Z${proximaLinha}`;

    // Converte os dados do formulário em um array na ordem correta
    const valores = [
      formData.id || 'Não Aplicavel',            // ID do Lead
      formData.nome || 'Não Aplicavel',          // Nome do Lead
      formData.empresa || 'Não Aplicavel',       // Nome da Empresa
      formData.plano || 'Não Aplicavel',         // Plano Escolhido
      formData.telefone || 'Não Aplicavel',      // Telefone
      formData.email || 'Não Aplicavel',         // E-mail
      formData.estado || 'Não Aplicavel',        // Estado
      formData.cnpj || 'Não Aplicavel',          // CNPJ
      formData.profissao || 'Não Aplicavel',     // Profissão
      formData.dataNascimento || 'Não Aplicavel', // Data de Nascimento
      formData.nomePet || 'Não Aplicavel',       // Nome do Pet
      formData.especie || 'Não Aplicavel',       // Espécie do Pet
      formData.dataCaptacao || 'Não Aplicavel',  // Data de Captação
      formData.statusLead || 'Não Aplicavel',    // Status do Lead
      formData.observacao || 'Não Aplicavel'     // Observação
    ];
    

    // Envia os dados para a planilha
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "RAW",
      resource: {
        values: [valores], // Adiciona os valores como uma nova linha
      },
    });

    console.log("Dados enviados com sucesso!");
  } catch (err) {
    console.error("Erro ao enviar dados:", err);
    throw new Error("Erro ao enviar dados para o Google Sheets.");
  }
};

