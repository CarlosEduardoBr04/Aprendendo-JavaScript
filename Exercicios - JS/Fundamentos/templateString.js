const nome = "Edu"
const concatenacao = "Olá"  + nome + "!"

const nome1 = "Eduardo";
const template = `
    Olá
    ${nome}!`;
console.log(template);


//expressoes
console.log(`1+1 = ${ 1+ 1}` )

const up = s => s.toUpperCase();

const palavra = "exemplo";
const palavraMaiuscula = up(palavra);

console.log(palavraMaiuscula);
