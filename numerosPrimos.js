//Números primos en rango.
//Pide un número y muestra todos los primos entre 1 y dicho número. 
//Programa iterativo

let limite = parseInt(prompt("Ingresa un número límite para mostrar los primos:"), 10);

let primos = [];  

for (let num = 2; num <= limite; num++) {
    let esPrimo = true;
 
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            esPrimo = false;
            break; 
        }
    }

    if (esPrimo) {
        primos.push(num);
    }
}

alert(`Números primos entre 1 y ${limite}:\n${primos.join(", ")}`);

