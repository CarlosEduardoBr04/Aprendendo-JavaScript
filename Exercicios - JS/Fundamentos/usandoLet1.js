let numero = 1 // Declaração da variável 'numero' fora do bloco

{
    let numero = 2 // Declaração da variável 'numero' dentro do bloco
    console.log('Dentro =', numero) // Imprime o valor 2 dentro do bloco
}

console.log('Fora =', numero) // Imprime o valor 1 fora do bloco
