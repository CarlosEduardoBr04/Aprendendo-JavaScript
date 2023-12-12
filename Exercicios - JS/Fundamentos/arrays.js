//arrays
const valores = [7.7, 8.8, 9.9, 3.2, 4,1]

// Acessando elementos do array pelos índices
console.log(valores[0], valores[3]) // Imprime: 7.7 3.2
console.log(valores[7], valores[0]) // Imprime: undefined 7.7

// Atribuindo valor a uma posição específica
valores[7] = 10
console.log(valores) // Imprime o array atualizado: [7.7, 8.8, 9.9, 3.2, 4,1, <2 empty items>, 10]
console.log(valores.length) // Imprime o comprimento do array: 8

// Adicionando elementos ao final do array
valores.push({id: 3}, false, null, 'teste')
console.log(valores) // Imprime o array com os novos elementos

// Removendo e exibindo o último elemento do array
console.log(valores.pop()) // Imprime o último elemento removido: 'teste'

// Deletando elemento específico pelo índice
delete valores[0]
console.log(valores) // Imprime o array sem o primeiro elemento: [empty, 8.8, 9.9, 3.2, 4,1, <1 empty item>, 10, { id: 3 }, false, null]

// Verificando o tipo da variável 'valores'
console.log(typeof valores) // Imprime: object
