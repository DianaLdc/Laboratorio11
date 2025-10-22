// Carrito de compras con límite de presupuesto.
// El usuario ingresa su presupuesto y agrega productos uno a uno.
// Si un producto excede el presupuesto restante, no se agrega y termina la compra.

function carritoFinal() {
  let presupuesto = parseFloat(prompt("Ingrese su presupuesto total:"));

  if (isNaN(presupuesto) || presupuesto <= 0) {
    alert("Presupuesto inválido. Intente nuevamente.");
    return;
  }

  let total = 0;
  let continuar = true;

  do {
    let precio = parseFloat(prompt("Ingrese el precio del producto:"));

    if (isNaN(precio) || precio <= 0) {
      alert("Precio inválido. Intente nuevamente.");
      continue;
    }

    if (total + precio > presupuesto) {
      alert(` No se puede agregar este producto. Supera su presupuesto de S/.${presupuesto.toFixed(2)}.`);
      continuar = false; 
    } else {
      total += precio;
      continuar = confirm("¿Desea agregar otro producto?");
    }

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

  mensaje += `Total final a pagar: S/.${total.toFixed(2)}\n`;
  mensaje += `Presupuesto restante: S/.${(presupuesto - total).toFixed(2)}`;

  alert(mensaje);
}
