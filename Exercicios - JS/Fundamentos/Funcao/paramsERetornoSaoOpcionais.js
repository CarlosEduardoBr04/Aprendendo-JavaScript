// Declaração de uma função chamada 'area' com parâmetros 'largura' e 'altura'
function area(largura, altura) {
    // Declaração de uma constante 'are' que armazena o resultado da multiplicação 'largura * altura'
    const are = largura * altura
    // Verifica se 'are' (área calculada) é maior que 20
    if (area > 20) {
        // Imprime uma mensagem caso a área seja maior que 20
        console.log('Valor acima do permitido: $(area)m2.')
    } else {
        // Retorna a área se não ultrapassar 20
        return area
    }
}

// Chamadas da função 'area' com diferentes argumentos e impressão dos resultados

// Chama a função 'area' com largura 2 e altura 2, imprime o resultado
console.log(area(2, 2))

// Chama a função 'area' com largura 2 (altura ausente), o que resulta em 'NaN' (Not a Number)
console.log(area(2,))

// Chama a função 'area' sem argumentos, o que resulta em 'NaN'
console.log(area())

// Chama a função 'area' com mais argumentos do que o esperado, mas usa apenas os dois primeiros
console.log(area(2, 2, 5, 7, 1, 12, 3))

// Chama a função 'area' com largura 5 e altura 5, imprime o resultado
console.log(area(5, 5))
