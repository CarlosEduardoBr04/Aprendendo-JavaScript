// Exemplo de uso de break e continue em um loop for com array
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numeros.length; i++) {
    const numeroAtual = numeros[i];

    // Utiliza continue para pular os números pares
    if (numeroAtual % 2 === 0) {
        console.log(`Pulando número par: ${numeroAtual}`);
        continue;
    }

    // Imprime o número atual
    console.log(`Número: ${numeroAtual}`);

    // Utiliza break para encerrar o loop quando encontrar o número 7
    if (numeroAtual === 7) {
        console.log("Encontrou o número 7. Saindo do loop...");
        break;
    }
}

console.log('Fim do Loop');
