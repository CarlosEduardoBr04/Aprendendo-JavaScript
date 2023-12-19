// Declaração de uma função sem parâmetros (func1)
function func1() {}

// Declaração de uma arrow function sem corpo (func2)
const func2 = () => void {}

// Criação de um array contendo uma função anônima, func1, e func2
const array = [function(a, b) {return a + b, func1, func2}]
// Imprime o primeiro elemento do array e a expressão (2,3) que avalia para 3
console.log(array[0], (2, 3))

// Criação de um objeto vazio (obj)
const obj = {}
// Adiciona uma propriedade chamada 'falar' ao objeto, contendo uma função anônima que retorna 'Opa'
obj.falar = function() {return 'Opa'}
// Chama a função 'falar' do objeto e imprime o resultado
console.log(obj.falar())

// Declaração de uma função chamada 'run' que recebe uma função como parâmetro e a executa
function run(fun) {
    fun()
}
// Chama a função 'run' passando uma função anônima que imprime 'Executando...'
run(function() {console.log('Executando...')})

// Declaração de uma função chamada 'soma' que retorna uma nova função
function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}

// Chama a função 'soma' passando 2 e 3, e em seguida, chama a função retornada passando 4
soma(2, 3)(4)

// Atribui a constante 'cincoMais' a função retornada por 'soma' com argumentos 2 e 3
const cincoMais = soma(2, 3)
// Chama a função 'cincoMais' passando 4
cincoMais(4)
