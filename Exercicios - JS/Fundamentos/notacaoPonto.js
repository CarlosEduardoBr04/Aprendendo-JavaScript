// 1. Utiliza a função Math.ceil para arredondar para cima o número 6.1. Saída: 7.
console.log(Math.ceil(6.1))

// 2. Cria um objeto vazio chamado obj1.
const obj1 = {}

// 3. Adiciona a propriedade nome ao objeto obj1 com o valor 'Bola'.
obj1.nome = 'Bola'

// 4. Comentado, mas seria uma forma alternativa de adicionar a propriedade nome.
// obj1['nome'] = 'Bola2'

// 5. Imprime o valor da propriedade nome do obj1. Saída: 'Bola'.
console.log(obj1.nome)

// 6. Declara uma função construtora chamada Objeto que recebe um parâmetro nome
//    e cria objetos com propriedades nome e um método exec.
function Objeto(nome) {
    this.nome = nome
    this.exec = function () {
        console.log('Exec...')
    }
}

// 7. Cria uma instância do objeto Objeto chamada obj2 com o nome 'Cadeira'.
const obj2 = new Objeto('Cadeira')

// 8. Cria outra instância do objeto Objeto chamada obj3 com o nome 'Mesa'.
const obj3 = new Objeto('Mesa')

// 9. Imprime o valor da propriedade nome do obj2. Saída: 'Cadeira'.
console.log(obj2.nome)

// 10. Imprime o valor da propriedade nome do obj3. Saída: 'Mesa'.
console.log(obj3.nome)

// 11. Chama o método exec do objeto obj3, que imprime 'Exec...'.
obj3.exec()
