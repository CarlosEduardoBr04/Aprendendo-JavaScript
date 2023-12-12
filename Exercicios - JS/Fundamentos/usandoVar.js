// Variável 'sera' está sendo declarada em um bloco de código
{ { { { var sera = 'sera???' } } } }

// A variável 'sera' é visível mesmo fora do bloco, pois JavaScript não possui escopo de bloco para variáveis 'var'
console.log(sera);

// Função de exemplo que declara uma variável 'local' dentro do escopo da função
function teste() {
    var local = 123;
}

// Chamando a função 'teste'
teste();

// Tentando acessar a variável 'local' fora da função resultará em um erro, pois está fora do escopo da função
//console.log(local); // Isso resultará em um erro
