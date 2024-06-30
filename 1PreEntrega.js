// algoritmos  con condicional y ciclo
// variables  datos primitivos  condicionales bucles y funciones

// Solicitar al usuario que ingrese su nombre
let nombreCliente = prompt(
  "Bienvenido/a a la peluquería. Por favor, ingrese su nombre:"
);

// Mostrar servicios disponibles
console.log(`Hola ${nombreCliente}, estos son los servicios disponibles:`);
console.log("1. corte de hombre - $80");
console.log("2. corte de mujer - $100");
console.log("3. corte de niños - $50");

// Variables para el total y el método de pago
let totalAPagar = 0;
let metodoPagoTexto;

// Utilizar un ciclo for para permitir al usuario seleccionar hasta tres servicios
for (let i = 0; i < 3; i++) {
  // Solicitar al usuario que seleccione un servicio
  let servicioSeleccionado = prompt(
    `Seleccione el servicio ${
      i + 1
    } que desea (1, 2 o 3), o escriba 'fin' para terminar:`
  );

  // Variable para almacenar temporalmente el precio del servicio seleccionado
  let precioServicio;

  // Validar la selección del servicio y sumar al total
  switch (servicioSeleccionado) {
    case "1":
      precioServicio = 80;
      break;
    case "2":
      precioServicio = 100;
      break;
    case "3":
      precioServicio = 50;
      break;
    case "fin":
      i = 3; // Salir del bucle si se ingresa "fin"
      break;
    default:
      console.log(
        "opción no valida. Por favor, seleccione un servicio válido."
      );
      i--; // Decrementar el contador para permitir una nueva selección
  }

  // Si se seleccionó un servicio válido, sumar al total
  if (precioServicio) {
    totalAPagar += precioServicio;
  }
}

// Mostrar métodos de pago disponibles
console.log("\nmetodos de pago disponibles:");
console.log("1. tarjeta de credito");
console.log("2. mercado pago");
console.log("3. efectivo");

// Solicitar al usuario que seleccione un método de pago
let metodoPago = prompt("seleccione un método de pago (1, 2 o 3):");

// Validar y asignar el método de pago seleccionado
switch (metodoPago) {
  case "1":
    metodoPagoTexto = "tarjeta de crédito";
    break;
  case "2":
    metodoPagoTexto = "mercado pago";
    break;
  case "3":
    metodoPagoTexto = "efectivo";
    break;
  default:
    console.log("metodo de pago no válido. Intente nuevamente.");
    break;
}

// Mostrar el resumen de la compra
console.log(`\nResumen de la compra para ${nombreCliente}:`);
console.log(`Total a pagar: $${totalAPagar}`);
if (metodoPagoTexto) {
  console.log(`Método de pago seleccionado: ${metodoPagoTexto}`);
}

// Mensaje de despedida
console.log(`\nGracias ${nombreCliente}, su compra ha sido procesada.`);
