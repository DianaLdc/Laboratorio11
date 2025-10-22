// Solicita edad y muestra: 
//“Niño” si < 12 
//“Adolescente” si entre 12 y 17 
//“Adulto” si entre 18 y 59
 //“Adulto mayor” si ≥ 60

let edad = parseInt(prompt("Ingresa tu edad:"));
 
if (isNaN(edad) || edad < 0) {
    alert("Edad inválida. Debe ser un número positivo.");
} else {
    let categoria;
 
    if (edad < 12) {
        categoria = "Niño";
    } else if (edad >= 12 && edad <= 17) {
        categoria = "Adolescente";
    } else if (edad >= 18 && edad <= 59) {
        categoria = "Adulto";
    } else {
        categoria = "Adulto mayor";
    }

    // Mostrar resultado
    alert("Tu categoría es: " + categoria); 
}
