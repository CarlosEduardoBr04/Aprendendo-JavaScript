// 'typeof Object' retorna 'function', pois Object é uma função.
console.log(typeof Object);

// 'typeof new Object' retorna 'object', pois 'new Object' cria uma instância de um objeto.
console.log(typeof new Object);

// 'typeof cliente' retorna 'function', pois cliente é uma função.
console.log(typeof cliente);

// 'typeof new cliente' retorna 'object', pois 'new cliente()' cria uma instância de um objeto.
console.log(typeof new cliente);

// 'typeof produto' retorna 'function', pois produto é uma classe (que é uma função no JavaScript).
console.log(typeof produto);

// 'typeof new produto()' retorna 'object', pois 'new produto()' cria uma instância de um objeto.
console.log(typeof new produto());
