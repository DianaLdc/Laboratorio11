//Un supermercado desea una app que simule un carrito de compras muy simple 
//El usuario puede agregar productos uno por uno, indicando sólo su precio, hasta que decida no continuar 
//Al terminar, mostrar: 
//El total parcial a pagar 
//Si el total supera 100, mostrar el mensaje "Tiene un descuento del 10%" y aplicar el descuento Si el total está entre 50 y 100, mostrar "Gana un cupón de 5%" y aplicar el descuento 
//Si el total es menor que 50, mostrar "No aplica descuento" 
//Finalmente, mostrar el total final a pagar

function carrito() {
  let continuar = true;
  let total = 0;

  do {
    let precio = parseFloat(prompt("Ingrese el precio del producto:"));

    if (isNaN(precio) || precio <= 0) {
      alert("Ingrese un valor válido.");
      continue;
    }

    total += precio;
    continuar = confirm("¿Desea agregar otro producto?");
    
  } while (continuar);

  let mensaje = `Total parcial: S/.${total.toFixed(2)}\n`;

  if (total > 100) {
    let descuento = total * 0.10;
    total -= descuento;
    mensaje += "Tiene un descuento del 10%.\n";
  } else if (total >= 50 && total <= 100) {
    let descuento = total * 0.05;
    total -= descuento;
    mensaje += "Gana un cupón del 5%.\n";
  } else {
    mensaje += "No aplica descuento.\n";
  }

  mensaje += `Total final a pagar: S/.${total.toFixed(2)}`;
  alert(mensaje);
}
