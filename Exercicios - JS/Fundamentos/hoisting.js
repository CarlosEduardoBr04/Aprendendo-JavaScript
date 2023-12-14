//Esse código envolve o conceito de hoisting, 
//que é o comportamento do JavaScript de mover as declarações
// de variáveis para o topo do seu escopo antes da execução do código.

// A declaração 'var a = 2' é içada para o topo do escopo, devido ao hoisting.
// Portanto, 'console.log('a =', a)' exibe 'a = undefined' antes da atribuição e 'a = 2' após a atribuição.
console.log('a =', a);
var a = 2;
console.log('a =', a);

// Com 'let b = 2', não há hoisting, e a variável 'b' só é visível após a declaração.
// Portanto, 'console.log('b =', b)' gera um erro, pois 'b' não está definido neste ponto.
let b = 2;
console.log('b =', b);


