// Inicializa as variáveis 'num1' e 'num2' com os valores 1 e 2, respectivamente
let num1 = 1;
let num2 = 2;

// Incrementa 'num1' pós-fixado (num1++), agora 'num1' é 2
num1++;
console.log(num1);

// Decrementa 'num1' pré-fixado (--num1), agora 'num1' é 1 novamente
--num1;
console.log(num1);

// Incrementa 'num1' pré-fixado e compara com a pós-decrementação de 'num2'
console.log(++num1 === num2--);

// Incrementa 'num1' pré-fixado e compara com 'num2' após a pós-decrementação (num2 foi decrementado no passo anterior)
console.log(++num1 === num2);
