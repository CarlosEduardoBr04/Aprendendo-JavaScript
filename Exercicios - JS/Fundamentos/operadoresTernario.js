// Define uma função arrow chamada 'resultado' que recebe um parâmetro 'nota'
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado';

// Chama a função 'resultado' com diferentes notas e imprime os resultados no console
console.log(resultado(7.1)); // Saída: 'Aprovado' (7.1 é maior que 7)
console.log(resultado(6));   // Saída: 'Reprovado' (6 não é maior ou igual a 7)
