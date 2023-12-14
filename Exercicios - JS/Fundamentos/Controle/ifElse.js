// Define uma função anônima e a atribui à constante 'imprimirResultado'
const imprimirResultado = function(nota) {
    // Verifica se a nota é maior ou igual a 7
    if (nota >= 7) {
        console.log('Aprovado!');
    } else {
        console.log('Reprovado!');
    }
}

// Chama a função 'imprimirResultado' com diferentes notas
imprimirResultado(8);    // Imprime 'Aprovado!' (8 é maior ou igual a 7)
imprimirResultado(5);    // Imprime 'Reprovado!' (5 não é maior ou igual a 7)
imprimirResultado('Epa!');// Imprime 'Reprovado!' (a string 'Epa!' não é maior ou igual a 7)
