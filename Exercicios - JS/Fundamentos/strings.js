const nome = "Eduardo";

//Lembrando que sempre começa a contar do 0
console.log(nome.charAt(0)); // Imprime "E", o caractere na posição 0
console.log(nome.charAt(1)); // Imprime "d", o caractere na posição 1
console.log(nome.charAt(2)); // Imprime "u", o caractere na posição 2
console.log(nome.charAt(3)); // Imprime "a", o caractere na posição 3
console.log(nome.charAt(4)); // Imprime "r", o caractere na posição 4
console.log(nome.charAt(5)); // Imprime "d", o caractere na posição 5
console.log(nome.charAt(6)); // Imprime "o", o caractere na posição 6

console.log(nome.charCodeAt(0)); // Imprime o valor Unicode do caractere na posição 0 (E)
console.log(nome.indexOf(0)); // Imprime -1, pois 0 não é encontrado no nome
console.log(nome.substring(0)); // Imprime "Eduardo", retorna a substring a partir da posição 0 até o final
console.log(nome.substring(0,7)); // Imprime "Eduardo", retorna a substring da posição 0 à posição 7 (exclusive)

console.log('nome'.concat(nome).concat("!")); // Imprime "nomeEduardo!"
console.log(nome.replace(0, "X")); // Imprime "Eduardo", pois replace substitui apenas a primeira ocorrência de 0 por "X"
console.log(nome.replace(/\w/g, "X")); // Imprime "XXXXXXX", substitui todas as letras por "X"

console.log("Ana,Maria,Pedro".split(",")); // Divide a string em um array usando a vírgula como delimitador: ["Ana", "Maria", "Pedro"]
console.log("Ana,Maria,Pedro".split(/,/)); // O mesmo que o anterior, usando uma expressão regular como delimitador
