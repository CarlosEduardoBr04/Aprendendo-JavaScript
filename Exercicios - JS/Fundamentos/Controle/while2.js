// Define uma função que gera um número inteiro aleatório entre os valores 'min' e 'max'
function getInteiroAleatorioEntre(min, max) {
    // Gera um número decimal aleatório entre 0 e 1, multiplica pelo intervalo e soma o mínimo
    const valor = Math.random() * (max - min) + min;
    // Arredonda para baixo, transformando em um número inteiro
    return Math.floor(valor);
}

// Inicializa a variável 'opcao' com 0
let opcao = 0;

// Executa um loop while enquanto 'opcao' for diferente de -1
while (opcao != -1) {
    // Atribui um número inteiro aleatório entre -1 e 10 à variável 'opcao'
    opcao = getInteiroAleatorioEntre(-1, 10);
    // Imprime a opção escolhida no console
    console.log(`Opção Escolhida foi ${opcao}.`);
}

// Imprime 'Até a Próxima!' após o loop while ser encerrado (quando 'opcao' torna-se -1)
console.log('Até a Próxima!');
