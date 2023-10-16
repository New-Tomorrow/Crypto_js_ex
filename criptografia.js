const CryptoJS = require('crypto-js');

// Chave secreta para criptografia e descriptografia (24 bytes)
const chaveSecreta = 'f3afa418deddb7e9c518f82ae68b85a1eff4472efe2c6df7bfc3c004674c1621';
const numeroParaCriptografar = 1;

// Função para criptografar um número
function criptografarNumero(numero, chave) {
  const numeroComoString = numero.toString();
  const textoCifrado = CryptoJS.AES.encrypt(numeroComoString, chave).toString();
  
  // Se for usar em url passa isso para não ocorrer erro na rota descomente as duas linhas de baixo 
  //const valorSeguroParaURL = encodeURIComponent(textoCifrado);
  // console.log('Número criptografado:', valorSeguroParaURL);
  console.log('Número criptografado:', textoCifrado);
  return textoCifrado;
}

criptografarNumero(numeroParaCriptografar, chaveSecreta);