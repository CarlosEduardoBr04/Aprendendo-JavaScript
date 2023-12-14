Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim;
}

const imprimirResultado = function (nota) {
    // Utiliza um loop while para continuar pedindo notas até que o usuário deseje parar
    while (true) {
        if (nota.entre(9, 10)) {
            console.log('Quadro de Honra'); // Imprime 'Quadro de Honra' se a nota estiver entre 9 e 10
        } else if (nota.entre(7, 8.99)) {
            console.log('Aprovado'); // Imprime 'Aprovado' se a nota estiver entre 7 e 8.99
        } else if (nota.entre(4, 6.99)) {
            console.log('Recuperação'); // Imprime 'Recuperação' se a nota estiver entre 4 e 6.99
        } else if (nota.entre(0, 3.99)) {
            console.log('Reprovado'); // Imprime 'Reprovado' se a nota estiver entre 0 e 3.99
        } else {
            console.log('Nota Inválida'); // Imprime 'Nota Inválida' para qualquer outra situação
        }

        // Pergunta ao usuário se deseja fornecer outra nota ou parar
        const continuar = prompt('Deseja fornecer outra nota? (Digite "S" para sim, ou qualquer outra coisa para parar)').toUpperCase();

        // Se o usuário não deseja continuar, encerra o loop
        if (continuar !== 'S') {
            break;
        }

        // Solicita a próxima nota ao usuário
        const novaNota = parseFloat(prompt('Digite a próxima nota:'));
        // Atualiza a variável 'nota' para a próxima nota fornecida pelo usuário
        nota = novaNota;
    }
}

// Inicia o loop com a primeira nota fornecida pelo usuário
const primeiraNota = parseFloat(prompt('Digite a primeira nota:'));
imprimirResultado(primeiraNota);
