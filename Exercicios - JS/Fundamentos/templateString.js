const nome = "Edu";
const concatenacao = "Olá" + nome + "!"; // Concatenação tradicional
console.log(concatenacao);

const nome1 = "Eduardo";
const template = `
    Olá
    ${nome1}!`; // Template de string multilinha com interpolação
console.log(template);

// Expressões em template de string
console.log(`1 + 1 = ${1 + 1}`);

const up = s => s.toUpperCase(); // Função para transformar em maiúsculas

const palavra = "exemplo";
const palavraMaiuscula = up(palavra); // Aplicação da função
console.log(palavraMaiuscula);
