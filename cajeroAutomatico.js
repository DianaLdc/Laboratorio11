//Cajero automático. 
//El usuario ingresa un monto a retirar. 
//El programa debe indicar cuántos billetes de 100, 50, 20 y 10 se entregan.
//(Debe ser la menor cantidad de billetes). Programa iterativo

let opcion;

do {
    opcion = prompt(
        "MENÚ:\n" +
        "1. Calcular área del círculo\n" +
        "2. Calcular área del rectángulo\n" +
        "3. Salir\n\n" +
        "Ingresa el número de la opción:"
    );

    switch(opcion) {
        case "1":
            let radio = parseFloat(prompt("Ingresa el radio del círculo:"));
            let areaCirculo = Math.PI * radio * radio;
            alert(`El área del círculo es: ${areaCirculo.toFixed(2)}`);
            break;

        case "2":
            let base = parseFloat(prompt("Ingresa la base del rectángulo:"));
            let altura = parseFloat(prompt("Ingresa la altura del rectángulo:"));
            let areaRectangulo = base * altura;
            alert(`El área del rectángulo es: ${areaRectangulo.toFixed(2)}`);
            break;

        case "3":
            alert("¡Saliendo del programa!");
            break;

        default:
            alert("Opción inválida, intenta de nuevo.");
            break;
    }

} while (opcion !== "3");
