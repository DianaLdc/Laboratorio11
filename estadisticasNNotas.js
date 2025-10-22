function pedirNotas(cantidad) {
    let notas = [];
    for (let i = 0; i < cantidad; i++) {
        let nota = parseFloat(prompt(`Ingresa la nota ${i+1}:`));
        while (nota < 0 || nota > 20 || isNaN(nota)) {
            nota = parseFloat(prompt(`Nota inválida. Ingresa la nota ${i+1} nuevamente:`));
        }
        notas.push(nota);
    }
    return notas;
}

function calcularPromedio(arr) {
    let suma = arr.reduce((a,b) => a + b, 0);
    return suma / arr.length;
}

function contarParesImpares(arr) {
    let pares = arr.filter(n => n % 2 === 0).length;
    let impares = arr.length - pares;
    return {pares, impares};
}

function tablaMultiplicar() {
    let numero = parseInt(prompt("Ingresa un número para mostrar su tabla del 1 al 12:"), 10);
    let tabla = [];
    for (let i = 1; i <= 12; i++) {
        tabla.push(`${numero} x ${i} = ${numero * i}`);
    }
    alert(tabla.join("\n"));
}
 
let opcion;

do {
    opcion = prompt(`Seleccione una opción:
1. Calcular estadísticas de N notas
2. Promedio
3. Valor máximo
4. Valor mínimo
5. Cantidad de pares e impares
6. Cuántos están por encima del promedio
7. Contar números pares e impares en un rango
8. Generar una tabla de multiplicar
9. Salir`);

    switch(opcion) {
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
            let cantidad = parseInt(prompt("¿Cuántas notas desea ingresar?"), 10);
            let notas = pedirNotas(cantidad);
            if(opcion === "1") {
                alert(`Notas: ${notas.join(", ")}\nPromedio: ${calcularPromedio(notas).toFixed(2)}\nMáximo: ${Math.max(...notas)}\nMínimo: ${Math.min(...notas)}\nPares: ${contarParesImpares(notas).pares}\nImpares: ${contarParesImpares(notas).impares}`);
            } else if(opcion === "2") {
                alert(`Promedio: ${calcularPromedio(notas).toFixed(2)}`);
            } else if(opcion === "3") {
                alert(`Valor máximo: ${Math.max(...notas)}`);
            } else if(opcion === "4") {
                alert(`Valor mínimo: ${Math.min(...notas)}`);
            } else if(opcion === "5") {
                let {pares, impares} = contarParesImpares(notas);
                alert(`Pares: ${pares}, Impares: ${impares}`);
            } else if(opcion === "6") {
                let promedio = calcularPromedio(notas);
                let porEncima = notas.filter(n => n > promedio).length;
                alert(`Cantidad de notas por encima del promedio (${promedio.toFixed(2)}): ${porEncima}`);
            }
            break;
        case "7":
            let limite = parseInt(prompt("Ingresa el número límite para contar pares e impares:"), 10);
            let {pares, impares} = contarParesImpares([...Array(limite).keys()].map(n => n+1));
            alert(`Entre 1 y ${limite}:\nPares: ${pares}\nImpares: ${impares}`);
            break;
        case "8":
            tablaMultiplicar();
            break;
        case "9":
            alert("¡Saliendo del programa!");
            break;
        default:
            alert("Opción inválida. Intente nuevamente.");
    }
} while(opcion !== "9");
