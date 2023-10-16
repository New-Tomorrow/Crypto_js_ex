const CryptoJS = require('crypto-js');

// Chave secreta para criptografia e descriptografia
const chaveSecreta = 'f3afa418deddb7e9c518f82ae68b85a1eff4472efe2c6df7bfc3c004674c1621';
const textoCifrado1 = "U2FsdGVkX1/lo5OPUvnyzN9FTazpe+FqnWXGn2YyoZ0=";

//textoCifrado2 = decodeURIComponent(textoCifrado1);// Se for usar em url passa isso para não ocorrer erro na rota

// Função para descriptografar o texto
function descriptografarNumero(textoCifrado, chave) {
  const bytesDescriptografados = CryptoJS.AES.decrypt(textoCifrado, chave);
  const textoDescriptografado = bytesDescriptografados.toString(CryptoJS.enc.Utf8);
  return parseInt(textoDescriptografado);
}

const numeroDescriptografado = descriptografarNumero(textoCifrado1, chaveSecreta);
//const numeroDescriptografado = descriptografarNumero(textoCifrado2, chaveSecreta);// Se for usar em url passa isso para não ocorrer erro na rota

console.log('Número descriptografado:', numeroDescriptografado);