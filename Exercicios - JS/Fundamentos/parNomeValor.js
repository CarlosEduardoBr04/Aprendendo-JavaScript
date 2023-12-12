// Par nome/valor
const saudacao = 'Opa' // Contexto léxico 1

function exec() {
    const saudacao = 'Falaaa' // Contexto léxico 2
    return saudacao
}

// Objetos são grupos alinhados de nome/valor
const cliente = {
    nome: 'Eduardo',
    idade: 19,
    peso: 60,
    endereco: {
        logradouro: 'Rua Takashi',
        numero: 25
    }
}

console.log(saudacao) // Saída: 'Opa' (contexto léxico 1)
console.log(exec())    // Saída: 'Falaaa' (contexto léxico 2)
console.log(cliente)   // Saída: objeto cliente com suas propriedades
