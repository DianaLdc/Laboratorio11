//Suma todos los números desde 1 hasta N, pero omite los múltiplos de 5. Programa iterativo

let N = parseInt(prompt("Ingresa el número límite N:"), 10);

let suma = 0;

for (let i = 1; i <= N; i++) {
    if (i % 5 === 0) {
        continue;  
    }
    suma += i;
}

alert(`La suma de los números del 1 al ${N}, omitiendo los múltiplos de 5, es: ${suma}`);
