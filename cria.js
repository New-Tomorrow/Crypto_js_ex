const crypto = require('crypto');

// Gere uma chave secreta aleatória de 32 bytes (256 bits)
const chaveSecreta = crypto.randomBytes(32).toString('hex');

console.log('Chave secreta:', chaveSecreta);