// Define uma função que gera um número inteiro aleatório entre os valores 'min' e 'max'
function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

// Inicializa a variável 'opcao' com 0
let opcao;

// Executa um loop for, onde a condição é sempre verdadeira (true)
for (;;) {
    // Atribui um número inteiro aleatório entre -1 e 10 à variável 'opcao'
    opcao = getInteiroAleatorioEntre(-1, 10);
    // Imprime a opção escolhida no console
    console.log(`Opção Escolhida foi ${opcao}.`);

    // Se 'opcao' for -1, encerra o loop
    if (opcao === -1) {
        break;
    }
}

// Imprime 'Até a Próxima!' após o loop for ser encerrado
console.log('Até a Próxima!');
