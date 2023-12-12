//objeto
const prod1 = {}

// Adicionando propriedades dinamicamente a prod1
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4999.00
prod1['Desconto legal'] = 0.40 // Evitar atributos com espaços

// Imprimindo o objeto prod1 no console
console.log(prod1)

const prod2 = {
    nome: 'Camisa',
    preco: 79.90,
    obj: {
        bla: 1,
        obj: { bla2: 2 }
    }
};

// Imprimindo o objeto prod2 no console
console.log(prod2)
