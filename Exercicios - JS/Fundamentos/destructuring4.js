// A função 'rand' agora recebe um objeto desestruturado com 'min' e 'max' e realiza uma troca caso 'min' seja maior que 'max'.
function rand({min = 0, max = 1000}) {
    if (min > max) [min, max] = [max, min]; // Troca os valores se 'min' for maior que 'max'.
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

// A chamada da função utiliza um array [50, 40], mas a função espera um objeto desestruturado.
// Resultado imprevisível, pois não está seguindo a estrutura esperada pela função.
console.log(rand([50, 40]));

// O array [992] é interpretado como o valor de 'max', com 'min' assumindo o valor padrão (0).
console.log(rand([992]));

// O array [, 10] é interpretado como 'max' sendo 10 e 'min' assumindo o valor padrão (0).
console.log(rand([, 10]));

// Array vazio, 'min' e 'max' assumem os valores padrão (0 e 1000, respectivamente).
console.log(rand([]));
