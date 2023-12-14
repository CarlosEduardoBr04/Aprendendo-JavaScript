// Exemplo de uso de break e continue em um loop for
for (let i = 1; i <= 10; i++) {
    // Verifica se o número é igual a 3
    if (i === 3) {
        // Se for igual a 3, utiliza continue para pular para a próxima iteração
        console.log("Encontrou o número 3. Continuando para o próximo...");
        continue;
    }

    // Imprime o número atual
    console.log(`Número: ${i}`);

    // Verifica se o número é igual a 5
    if (i === 5) {
        // Se for igual a 5, utiliza break para encerrar o loop
        console.log("Encontrou o número 5. Saindo do loop...");
        break;
    }
}

console.log('Fim do Loop');
