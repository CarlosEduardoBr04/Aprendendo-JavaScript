const func = [];

for (var i = 0; i < 10; i++) {
    func.push(function () {
        console.log(i);
    });
}

func[2](); // Imprimirá 10
func[8](); // Imprimirá 10
