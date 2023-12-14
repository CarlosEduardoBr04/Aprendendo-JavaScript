// v e v -> v
// v e f -> f
// f e ? -> f

// v ou ? -> v
// f ou v -> v
// f ou f -> f

// v xor v -> f
// v xor f -> v
// f xor v -> v
// f xor f -> f

// !v -> f
// !f -> v

/* function compras(trabalho1, trabalho2) {
    const comprarChocolate = trabalho1 || trabalho2
    const comprarXbox = trabalho1 && trabalho2
    //const comprarPs5 = !!(trabalho1 ^ trabalho2) //Bitwise xor
    const comprarPs5 = trabalho1 != trabalho2
    const naoComprarNada = !comprarChocolate // operador unario

    return { comprarChocolate, comprarXbox, comprarPs5, naoComprarNada }
} 

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))
*/

// Define a função 'compras' que recebe dois argumentos booleanos: 'trabalho1' e 'trabalho2'
function compras(trabalho1, trabalho2) {
    // Atribui a constante 'comprarChocolate' o resultado da operação lógica 'OU' entre 'trabalho1' e 'trabalho2'
    const comprarChocolate = trabalho1 || trabalho2;

    // Atribui a constante 'comprarXbox' o resultado da operação lógica 'E' entre 'trabalho1' e 'trabalho2'
    const comprarXbox = trabalho1 && trabalho2;

    // Atribui a constante 'comprarPs5' o resultado da operação de desigualdade entre 'trabalho1' e 'trabalho2'
    const comprarPs5 = trabalho1 != trabalho2; 

    // Atribui a constante 'naoComprarNada' o resultado da negação da constante 'comprarChocolate'
    const naoComprarNada = !comprarChocolate; // operador unário

    // Retorna um objeto contendo os resultados das decisões de compra
    return { comprarChocolate, comprarXbox, comprarPs5, naoComprarNada };
}

// Chama a função 'compras' com diferentes combinações de argumentos e imprime os resultados no console
console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));
