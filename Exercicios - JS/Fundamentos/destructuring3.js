// A função 'rand' recebe um objeto como parâmetro com as propriedades 'min' e 'max' (com valores padrão).
function rand({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

// Pode ser chamada passando um objeto diretamente.
console.log(rand({max: 50, min: 40}));

// Ou passando um objeto já existente.
const obj = {max: 50, min: 40};
console.log(rand(obj));

// Se apenas 'min' for passado, 'max' assume o valor padrão.
console.log(rand({min: 900}));

// Se nenhum parâmetro for passado, são utilizados os valores padrão.
console.log(rand({}));
