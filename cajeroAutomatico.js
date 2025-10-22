/*
Cajero automático.
El usuario ingresa un monto a retirar.
El programa debe indicar cuántos billetes de 100, 50, 20 y 10 se entregan.
(Debe ser la menor cantidad de billetes). Programa iterativo.
*/

let monto = parseInt(prompt("Ingresa el monto a retirar (múltiplo de 10):"), 10);

let original = monto; // Guardamos el monto original

let billete100 = 0;
let billete50 = 0;
let billete20 = 0;
let billete10 = 0;

// Calcular billetes usando bucles while
while (monto >= 100) {
    billete100++;
    monto -= 100;
}

while (monto >= 50) {
    billete50++;
    monto -= 50;
}

while (monto >= 20) {
    billete20++;
    monto -= 20;
}

while (monto >= 10) {
    billete10++;
    monto -= 10;
}

// Mostrar resultados en un solo alert
alert(`Monto solicitado: ${original}
Billetes de 100: ${billete100}
Billetes de 50: ${billete50}
Billetes de 20: ${billete20}
Billetes de 10: ${billete10}`);
