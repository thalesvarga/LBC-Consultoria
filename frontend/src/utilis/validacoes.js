
export const validarNomeCompleto = (nome) => {
  const regex = /^[a-zA-ZÀ-ú\s]+$/; // Aceita letras e espaços
  if (!nome || !regex.test(nome)) {
    return "Por favor, insira um nome completo válido.";
  }
  return true;
};

export const validarEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Formato básico de email
  if (!email || !regex.test(email)) {
    return "Por favor, insira um email válido.";
  }
  return true;
};

export const validarCNPJ = (cnpj) => {
  const regex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/; // Formato XX.XXX.XXX/XXXX-XX
  if (!cnpj || !regex.test(cnpj)) {
    return "Por favor, insira um CNPJ válido no formato XX.XXX.XXX/XXXX-XX.";
  }
  return true;
};

export const validarTelefone = (telefone) => {
  const regex = /^\(?\d{2}\)?[\s-]?\d{4,5}[\s-]?\d{4}$/; // Formatos válidos: (XX) XXXX-XXXX ou (XX) XXXXX-XXXX
  if (!telefone || !regex.test(telefone)) {
    return "Por favor, insira um número de telefone válido.";
  }
  return true;
};