// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b);
}

imprimirSoma(2, 3); // Imprime 5
imprimirSoma(2); // Imprime NaN (2 + undefined = NaN)
imprimirSoma(2, 5, 4, 6, 9, 8); // Ignora os parâmetros extras e imprime 7 (2+5=7)
imprimirSoma(); // Imprime NaN (undefined + undefined = NaN)

// Função com retorno
function soma(a, b = 1) {
    return a + b;
}

console.log(soma(2, 3)); // Imprime 5
console.log(soma(2)); // Imprime 3 (utilizando o valor padrão de b, que é 1)
