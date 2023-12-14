// Define uma função que gera um número inteiro aleatório entre os valores 'min' e 'max'
function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

// Inicializa um array para armazenar as opções escolhidas
const opcoesEscolhidas = [];

// Executa um loop for para gerar e armazenar as opções no array
for (let i = 0; ; i++) {
    // Atribui um número inteiro aleatório entre -1 e 10 à variável 'opcao'
    const opcao = getInteiroAleatorioEntre(-1, 10);
    // Imprime a opção escolhida no console
    console.log(`Opção Escolhida foi ${opcao}.`);
    // Adiciona a opção ao array
    opcoesEscolhidas.push(opcao);

    // Se 'opcao' for -1, encerra o loop
    if (opcao === -1) {
        break;
    }
}

// Utiliza um loop for...in para iterar sobre os índices do array de opções escolhidas
for (const indice in opcoesEscolhidas) {
    console.log(`Índice ${indice}: Opção ${opcoesEscolhidas[indice]}`);
}

console.log('Até a Próxima!');
