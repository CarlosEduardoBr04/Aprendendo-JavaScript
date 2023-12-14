// Função teste1: imprime o número se for maior que 7, e sempre imprime 'Final' ao final
function teste1(num) {
    if (num > 7)
        console.log(num);
    console.log('Final');
}

// Chama teste1 com os números 6 e 8
teste1(6); // Nenhuma saída após 'Final', pois 6 não é maior que 7
teste1(8); // Imprime 8 e depois 'Final', pois 8 é maior que 7

// Função teste2: tem um erro de lógica devido ao ponto e vírgula após o 'if'
function teste2(num) {
    if (num > 7); // Ponto e vírgula encerra a declaração do 'if' sem corpo
    {
        console.log(num); // Sempre imprime o número, pois está fora do bloco 'if'
    }
}

// Chama teste2 com os números 5 e 9
teste2(5); // Imprime 5, pois o ';' encerra o 'if' e a linha abaixo é executada independentemente do valor de 'num'
teste2(9); // Imprime 9, pois o ';' encerra o 'if' e a linha abaixo é executada independentemente do valor de 'num'
