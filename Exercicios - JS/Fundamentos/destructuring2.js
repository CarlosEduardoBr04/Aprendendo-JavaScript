// 1. Destrói o array [10] e atribui o valor 10 à variável 'a'.
const [a] = [10];
console.log(a); // Saída: 10

// 2. Destrói o array [10, 7, 9, 8] e atribui os valores às variáveis n1, n3, n4 e n5.
//    A vírgula vazia ignora o segundo elemento do array (7).
//    Se n5 não estiver definido, assume o valor padrão 0.
const [n1, , n3, n4, n5 = 0] = [10, 7, 9, 8];
console.log(n1, n3, n4, n5); // Saída: 10 9 8 0

// 3. Destrói o array aninhado [[, 8, 8], [9, 6, 8]] e atribui o valor 8 à variável 'nota'.
const [, [, nota]] = [[, 8, 8], [9, 6, 8]];
console.log(nota); // Saída: 6
