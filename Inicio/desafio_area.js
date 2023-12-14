// pi * raio * raio 

// Define a constante 'raio' com o valor 10
const raio = 10;

// Define a constante 'PI' com o valor de pi aproximado
const PI = 3.141592;

// Calcula a área do círculo usando a fórmula 'Área = PI * raio * raio' e armazena em 'areaCirc'
let areaCirc = PI * raio * raio;

// Imprime a mensagem com o valor da área no console
console.log("O valor da área é: " + areaCirc + "m2");

// Reatribui o valor da área do círculo usando a constante 'Math.PI', que fornece uma precisão maior para o valor de pi
areaCirc = Math.PI * raio * raio;

// Imprime a mensagem atualizada com o novo valor da área no console
console.log("O valor da área é: " + areaCirc + "m2");
