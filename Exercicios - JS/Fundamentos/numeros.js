const peso1 = 1.0; // Declaração da variável peso1 com um número literal
const peso2 = Number("2.0"); // Declaração da variável peso2 convertendo a string "2.0" para número

console.log(peso1, peso2); // Imprime os valores de peso1 e peso2 no console
console.log(Number.isInteger(peso1)); // Verifica se peso1 é um número inteiro e imprime o resultado
console.log(Number.isInteger(peso2)); // Verifica se peso2 é um número inteiro e imprime o resultado

const avaliacao1 = 9.845; // Declaração da variável avaliacao1 com um número decimal
const avaliacao2 = 6.845; // Declaração da variável avaliacao2 com um número decimal

const total = avaliacao1 * peso1 + avaliacao2 * peso2; // Calcula o total das avaliações ponderadas pelos pesos
const media = total / (peso1 + peso2); // Calcula a média

console.log(media); // Imprime o valor da média no console
console.log(media.toFixed(2)); // Imprime a média com exatamente 2 casas decimais
console.log(media.toString()); // Converte a média para uma string e imprime
console.log(media.toString(2)); // Converte a média para uma representação binária e imprime

console.log(typeof media); // Imprime o tipo de dados da variável media
console.log(typeof Number); // Imprime o tipo de dados da função Number
