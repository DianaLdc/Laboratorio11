//Menú con múltiples opciones. Crea un menú tipo consola con las siguientes opciones: 
//Calcular estadísticas de N notas 
//Promedio 
//Valor máximo 
//Valor mínimo 
//Cantidad de pares e impares 
//Cuántos están por encima del promedio 
//Contar números pares e impares en un rango 
//Generar una tabla de multiplicar
//Salir 
//Debe repetirse hasta que el usuario elija la opción “Salir”.
 function estadisticasNNotas(){
  
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
    return arr.reduce((a,b) => a+b, 0)/arr.length;
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
        tabla.push(`${numero} x ${i} = ${numero*i}`);
    }
    alert(tabla.join("\n"));
}

let opcion;
  
do {
    opcion = prompt(`Menú principal:\n1. Estadísticas de N notas\n2. Contar números pares e impares en un rango\n3. Generar una tabla de multiplicar\n4. Salir`);

    switch(opcion) {
        case "1": // Submenú de estadísticas
            let cantidad = parseInt(prompt("¿Cuántas notas desea ingresar?"), 10);
            let notas = pedirNotas(cantidad);

            let subopcion = prompt(`Submenú estadísticas:\n1. Promedio\n2. Valor máximo\n3. Valor mínimo\n4. Cantidad de pares e impares\n5. Cuántos están por encima del promedio`);

            switch(subopcion) {
                case "1":
                    alert(`Promedio: ${calcularPromedio(notas).toFixed(2)}`);
                    break;
                case "2":
                    alert(`Valor máximo: ${Math.max(...notas)}`);
                    break;
                case "3":
                    alert(`Valor mínimo: ${Math.min(...notas)}`);
                    break;
                case "4":
                    let {pares, impares} = contarParesImpares(notas);
                    alert(`Pares: ${pares}, Impares: ${impares}`);
                    break;
                case "5":
                    let promedio = calcularPromedio(notas);
                    let porEncima = notas.filter(n => n > promedio).length;
                    alert(`Cantidad de notas por encima del promedio (${promedio.toFixed(2)}): ${porEncima}`);
                    break;
                default:
                    alert("Opción inválida en submenú.");
            }
            break;

        case "2":
            let limite = parseInt(prompt("Ingresa el número límite para contar pares e impares:"), 10);
            let {pares, impares} = contarParesImpares([...Array(limite).keys()].map(n => n+1));
            alert(`Entre 1 y ${limite}:\nPares: ${pares}\nImpares: ${impares}`);
            break;

        case "3":
            tablaMultiplicar();
            break;

        case "4":
            alert("¡Saliendo del programa!");
            break;

        default:
            alert("Opción inválida. Intente nuevamente.");
    }

} while(opcion !== "4");


 }
