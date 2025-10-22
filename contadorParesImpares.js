//Contador de números pares e impares.
//Pide 10 números y muestra cuántos fueron pares y cuántos impares
function contadorParesImpares(){
    let pares = 0;
let impares = 0;

for (let i = 1; i <= 10; i++) {
    let numero = parseInt(prompt(`Ingresa el número ${i}:`), 10);

    if (numero % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}

alert(`Cantidad de números pares: ${pares}`);
alert(`Cantidad de números impares: ${impares}`);
}

