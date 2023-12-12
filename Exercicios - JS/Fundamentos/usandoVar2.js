var numero = 1 // Declaração da variável 'numero' fora do bloco

{
    var numero = 2 // Mesma variável 'numero' sendo reatribuída dentro do bloco
    console.log('Dentro =', numero) // Imprime o valor 2 dentro do bloco
}

console.log('Fora =', numero) // Imprime o valor 2 fora do bloco
