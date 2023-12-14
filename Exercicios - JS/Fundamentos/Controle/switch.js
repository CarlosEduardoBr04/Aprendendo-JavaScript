// Adiciona um método 'entre' ao protótipo de Number
Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim;
}

// Define uma função 'imprimirResultado' que classifica as notas em categorias usando switch
const imprimirResultado = function (nota) {
    // Utiliza um switch para comparar a nota em diferentes faixas e imprimir mensagens correspondentes
    switch (true) {
        case nota.entre(9, 10):
            console.log('Quadro de Honra'); // Imprime 'Quadro de Honra' se a nota estiver entre 9 e 10
            break;
        case nota.entre(7, 8.99):
            console.log('Aprovado'); // Imprime 'Aprovado' se a nota estiver entre 7 e 8.99
            break;
        case nota.entre(4, 6.99):
            console.log('Recuperação'); // Imprime 'Recuperação' se a nota estiver entre 4 e 6.99
            break;
        case nota.entre(0, 3.99):
            console.log('Reprovado'); // Imprime 'Reprovado' se a nota estiver entre 0 e 3.99
            break;
        default:
            console.log('Nota Inválida'); // Imprime 'Nota Inválida' para qualquer outra situação
    }
}

// Chama a função 'imprimirResultado' com diferentes notas
imprimirResultado(9);    // Imprime 'Quadro de Honra'
imprimirResultado(7);    // Imprime 'Aprovado'
imprimirResultado(6);    // Imprime 'Recuperação'
imprimirResultado(0);    // Imprime 'Reprovado'
imprimirResultado(-1);   // Imprime 'Nota Inválida'
imprimirResultado(11);   // Imprime 'Nota Inválida'
