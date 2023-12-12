// Armazenando uma função em uma variável
const imprimirSoma = function(a, b) {
    console.log(a + b);
}

imprimirSoma(2, 3); // Imprime 5

// Armazenando uma função arrow em uma variável
const soma = (a, b) => {
    return a + b;
}

console.log(soma(2, 3)); // Imprime 5

// Retorno implícito
const subtracao = (a, b) => a - b;
console.log(subtracao(2, 3)); // Imprime -1

const imprime2 = a => console.log(a);
imprime2('Conteudo'); // Imprime 'Conteudo'
