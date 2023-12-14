// Adiciona um método 'entre' ao protótipo de Number
Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim;
}

// Define uma função 'imprimirResultado' que classifica as notas em categorias
const imprimirResultado = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('Quadro de Honra');
    } else if (nota.entre(7, 8.99)) {
        console.log('Aprovado');
    } else if (nota.entre(4, 6.99)) {
        console.log('Recuperação');
    } else if (nota.entre(0, 3.99)) {
        console.log('Reprovado');
    } else {
        console.log('Nota Inválida');
    }
}

// Chama a função 'imprimirResultado' com diferentes notas
imprimirResultado(9);    // Imprime 'Quadro de Honra'
imprimirResultado(7);    // Imprime 'Aprovado'
imprimirResultado(6);    // Imprime 'Recuperação'
imprimirResultado(0);    // Imprime 'Reprovado'
imprimirResultado(-1);   // Imprime 'Nota Inválida'
imprimirResultado(11);   // Imprime 'Nota Inválida'
