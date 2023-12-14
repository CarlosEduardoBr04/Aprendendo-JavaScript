// Comparação de valor: '1' é igual a 1 (true)
console.log('01', '1' == 1);

// Comparação de valor e tipo: '1' não é estritamente igual a 1 (false)
console.log('02', '1' === 1);

// Comparação de valor: '3' é diferente de 3 (false)
console.log('03', '3' != 3);

// Comparação de valor e tipo: '3' é estritamente diferente de 3 (true)
console.log('04', '3' !== 3);

// Verifica se 3 é menor que 2 (false)
console.log('05', 3 < 2);

// Verifica se 3 é maior que 2 (true)
console.log('06', 3 > 2);

// Verifica se 3 é menor ou igual a 2 (false)
console.log('07', 3 <= 2);

// Verifica se 3 é maior ou igual a 2 (true)
console.log('08', 3 >= 2);

// Cria duas instâncias de Date com o mesmo valor (false para ambas)
console.log('09', d1 === d2);

// Cria duas instâncias de Date com o mesmo valor (false para ambas)
console.log('10', d1 == d2);

// Compara os valores numéricos de tempo das instâncias de Date (true)
console.log('11', d1.getTime() === d2.getTime());

// Comparação de valor: undefined é igual a null (true)
console.log('12', undefined == null);

// Comparação de valor e tipo: undefined não é estritamente igual a null (false)
console.log('13', undefined === null);
