 //Tabla de multiplicar. 
//El usuario ingresa un número y se muestra su tabla del 1 al 12. Programa iterativo

let numero = parseInt(prompt("Ingresa un número para mostrar su tabla del 1 al 12:"), 10);

let tabla = []; 
for (let i = 1; i <= 12; i++) {
    let resultado = numero * i;
    tabla.push(`${numero} x ${i} = ${resultado}`);
}
 
alert(tabla.join("\n"));  

