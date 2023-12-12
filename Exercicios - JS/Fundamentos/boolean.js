let isAtivo = false
console.log(isAtivo) // Imprime false

isAtivo = true
console.log(isAtivo) // Imprime true

isAtivo = 1
console.log(!!isAtivo) // Imprime true (usando !! para converter o valor para boolean)

console.log('Os verdadeiros...')
console.log(!!3) // Imprime true (números diferentes de zero são verdadeiros)
console.log(!!-1) // Imprime true (números diferentes de zero são verdadeiros)
console.log(!!' ') // Imprime true (uma string não vazia é verdadeira)
console.log(!!'Alguma Coisa') // Imprime true (uma string não vazia é verdadeira)
console.log(!![]) // Imprime true (um array vazio é verdadeiro)
console.log(!!{}) // Imprime true (um objeto vazio é verdadeiro)
console.log(!!Infinity) // Imprime true (Infinity é verdadeiro)
console.log(!!-(isAtivo = true)) // Imprime true (atribuição e negação)

console.log('Os falsos...')
console.log(!!0) // Imprime false (zero é falso)
console.log(!!'') // Imprime false (uma string vazia é falsa)
console.log(!!null) // Imprime false (null é falso)
console.log(!!NaN) // Imprime false (NaN é falso)
console.log(!!undefined) // Imprime false (undefined é falso)
console.log(!!-(isAtivo = false)) // Imprime false (atribuição e negação)

console.log('Para finalizar...')
console.log(!!('' || null || 0 || ' ')) // Imprime true (pelo menos um valor é verdadeiro)
console.log(('' || null || 0 || 'epa')) // Imprime 'epa' (retorna o primeiro valor verdadeiro)
console.log(('' || null || 0 || 123)) // Imprime 123 (retorna o primeiro valor verdadeiro)

let nome = ''
console.log(nome || 'Desconhecido') // Imprime 'Desconhecido' (como nome é falso, retorna o valor padrão)
