const func = [];

for (let i = 0; i < 10; i++) {
    func.push(function () {
        console.log(i);
    });
}

func[2](); // Imprimirá 2
func[8](); // Imprimirá 8
