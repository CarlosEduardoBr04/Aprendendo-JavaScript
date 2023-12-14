const func = [];

for (var i = 0; i < 10; i++) {
    // Todas as funções no array 'func' compartilham a mesma referência de 'i'.
    func.push(function () {
        console.log(i);
    });
}

func[2](); // Imprimirá 10
func[8](); // Imprimirá 10
