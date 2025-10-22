// Calcular promedio con validación. Pide 5 notas y calcula el promedio, asegurándote de que estén entre 0 y 20

let suma = 0;
const cantidadNotas = 5;

for (let i = 1; i <= cantidadNotas; i++) {
    let nota;
    do {
        nota = parseFloat(prompt("Ingresa la nota " + i + " (0-20):"));
        if (nota < 0 || nota > 20 || isNaN(nota)) {
            alert("Nota inválida. Debe estar entre 0 y 20.");
        }
    } while (nota < 0 || nota > 20 || isNaN(nota));

    suma += nota;
}

let promedio5NotasValidas = suma / cantidadNotas;
alert("Promedio de las 5 notas válidas: " + promedio5NotasValidas.toFixed(2));
