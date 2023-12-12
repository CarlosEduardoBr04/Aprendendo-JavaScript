//Esse código envolve o conceito de hoisting, 
//que é o comportamento do JavaScript de mover as declarações
// de variáveis para o topo do seu escopo antes da execução do código.

console.log('a =', a)
var a = 2
console.log('a =', a)

//console.log('b =', b)  //Com let não funciona
let b = 2
console.log('b =', b)
