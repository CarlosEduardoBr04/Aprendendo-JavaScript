 //Novo recurso do ES2015
// 1. Cria um objeto 'pessoa' com propriedades nome, idade e endereco.
const pessoa = {
    nome: 'Eduardo',
    idade: 19,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 100
    }
}

// 2. Faz a destruição (destructuring) do objeto 'pessoa', extraindo as propriedades nome e idade.
const { nome, idade } = pessoa
console.log(nome, idade) // Saída: Eduardo 19

// 3. Faz a destruição do objeto 'pessoa' e atribui a propriedade nome para a variável 'n' e idade para a variável 'i'.
const { nome: n, idade: i } = pessoa
console.log(n, i) // Saída: Eduardo 19

// 4. Tenta extrair as propriedades sobrenome e Alguma, mas como não existem, elas terão valores undefined.
const { sobrenome, Alguma = true } = pessoa
console.log(sobrenome, Alguma) // Saída: undefined true

// 5. Faz a destruição aninhada, extraindo as propriedades logradouro, numero e cep do objeto endereco dentro de pessoa.
const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep) // Saída: Rua ABC 100 undefined
