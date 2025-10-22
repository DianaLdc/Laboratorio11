//Verificación de número Armstrong.
//Un número de n dígitos es Armstrong si la suma de sus dígitos elevados a n da el mismo número.
//Ejemplo: 153 → 1³ + 5³ + 3³ = 153.
//Programa iterativo.
function armstrong(){
 
let numero = parseInt(prompt("Ingresa un número para verificar si es Armstrong:"), 10);

let numeroOriginal = numero;
let digitos = numero.toString().length; 
let suma = 0;

while (numero > 0) {
    let digito = numero % 10;      
    suma += Math.pow(digito, digitos);  
    numero = Math.floor(numero / 10);  
}

if (suma === numeroOriginal) {
    alert(`${numeroOriginal} es un número Armstrong`);
} else {
    alert(`${numeroOriginal} no es un número Armstrong`);
}
   
}
