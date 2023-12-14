// Define a função 'tratarErroLancar' que recebe um parâmetro 'erro', mas não realiza ação específica
function tratarErroLancar(erro) {
    // Código de tratamento de erro (comentado)
    // Pode lançar diferentes tipos de erro
    // throw new Error('...')
    // throw 10
    // throw true
    // throw 'Alguma Coisa'
}

// Define a função 'imprimirGritando' que recebe um objeto 'obj'
function imprimirGritando(obj) {
    try {
        // Tenta acessar a propriedade 'name' e imprimir em maiúsculas com exclamações
        console.log(obj.name.toUpperCasa() + "!!!"); // Erro de propriedade não definida (toUpperCasa não existe)
    } catch (e) {
        // Captura o erro e chama a função 'tratarErroLancar'
        tratarErroLancar(e);
    } finally {
        // Bloco que sempre será executado, independentemente de ocorrer ou não um erro
        console.log('final');
    }
}

// Cria um objeto 'obj' com a propriedade 'name'
const obj = { name: 'Eduardo' };

// Chama a função 'imprimirGritando' com o objeto 'obj'
imprimirGritando(obj);
