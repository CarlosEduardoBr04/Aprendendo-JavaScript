// Função que imprime a mensagem "Aprovado com nota:" se a nota for maior ou igual a 6
function soBoaNoticia(nota) {
    if (nota >= 6) {
        console.log("Aprovado com nota:" + nota);
    }
}

// Chama a função 'soBoaNoticia' com notas 8 e 5
soBoaNoticia(8); // Imprime "Aprovado com nota:8"
soBoaNoticia(5); // Nenhuma saída, pois a nota não é maior ou igual a 6

// Função que imprime a mensagem "É verdade...:" se o valor fornecido for avaliado como verdadeiro
function seForVerdadeEuFalo(valor) {
    if (valor >= 6) {
        console.log("É verdade...:" + valor);
    }
}

// Chama a função 'seForVerdadeEuFalo' com diferentes valores
seForVerdadeEuFalo();         // Nenhuma saída, pois o valor é undefined (considerado falso)
seForVerdadeEuFalo(null);     // Nenhuma saída, pois o valor é null (considerado falso)
seForVerdadeEuFalo(undefined);// Nenhuma saída, pois o valor é undefined (considerado falso)
seForVerdadeEuFalo(NaN);      // Nenhuma saída, pois o valor é NaN (considerado falso)
seForVerdadeEuFalo('');       // Nenhuma saída, pois o valor é uma string vazia (considerado falso)
seForVerdadeEuFalo(0);        // Nenhuma saída, pois o valor é 0 (considerado falso)
seForVerdadeEuFalo(-1);       // Imprime "É verdade...:-1", pois -1 é avaliado como verdadeiro
seForVerdadeEuFalo(' ');      // Imprime "É verdade...: ", pois uma string não vazia é verdadeira
seForVerdadeEuFalo('?');      // Imprime "É verdade...:?", pois uma string não vazia é verdadeira
seForVerdadeEuFalo([]);       // Imprime "É verdade...:", pois um array não vazio é verdadeiro
seForVerdadeEuFalo(1, 2);     // Imprime "É verdade...:1", pois apenas o primeiro valor é considerado
seForVerdadeEuFalo({});       // Imprime "É verdade...:[object Object]", pois um objeto é verdadeiro
seForVerdadeEuFalo(null);     // Nenhuma saída, pois o valor é null (considerado falso)
seForVerdadeEuFalo(6);        // Imprime "É verdade...:6", pois 6 é avaliado como verdadeiro
