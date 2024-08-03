// script.js

const productos = [
  {
    id: 1,
    nombre: "Adidas",
    descripcion: "Zapatillas para Hombre",
    precio: 50,
    imagen: "img/zapatilla1.png",
  },
  {
    id: 2,
    nombre: "Reebook",
    descripcion: "Zapatilla Unisex",
    precio: 70,
    imagen: "img/zapatilla2.png",
  },
  {
    id: 3,
    nombre: "Adidas",
    descripcion: "Zapatilla para Mujer",
    precio: 100,
    imagen: "img/zapatilla3.png",
  },
  // Agrega más productos aquí
];

let carrito = [];

function mostrarProductos() {
  const contenedor = document.getElementById("productos");
  productos.forEach((producto) => {
    const productoHTML = `
            <div class="producto">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <h2>${producto.nombre}</h2>
                <p>${producto.descripcion}</p>
                <p>$${producto.precio}</p>
                <button onclick="agregarAlCarrito(${producto.id})">Agregar al Carrito</button>
            </div>
        `;
    contenedor.innerHTML += productoHTML;
  });
}

function agregarAlCarrito(id) {
  const producto = productos.find((p) => p.id === id);
  carrito.push(producto);
  mostrarCarrito();
}

function mostrarCarrito() {
  const contenedor = document.getElementById("carrito");
  contenedor.innerHTML = "";

  if (carrito.length === 0) {
    contenedor.innerHTML = "<p>El carrito está vacío.</p>";
    return;
  }

  const tabla = document.createElement("table");
  const encabezado = `
        <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Acciones</th>
        </tr>
    `;
  tabla.innerHTML = encabezado;

  carrito.forEach((producto, index) => {
    const fila = `
            <tr>
                <td>${producto.nombre}</td>
                <td>$${producto.precio}</td>
                <td><button onclick="eliminarDelCarrito(${index})">Eliminar</button></td>
            </tr>
        `;
    tabla.innerHTML += fila;
  });

  contenedor.appendChild(tabla);
}

function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  mostrarCarrito();
}

function abrirCarrito() {
  const modal = document.getElementById("modal-carrito");
  modal.style.display = "block";
  mostrarCarrito();
}

function cerrarCarrito() {
  const modal = document.getElementById("modal-carrito");
  modal.style.display = "none";
}

function mostrarFormularioPago() {
  cerrarCarrito();
  const modalPago = document.getElementById("modal-pago");
  modalPago.style.display = "block";
}

function cerrarFormularioPago() {
  const modalPago = document.getElementById("modal-pago");
  modalPago.style.display = "none";
}

function procesarPago(event) {
  event.preventDefault();
  alert("Pago procesado exitosamente");
  cerrarFormularioPago();
  carrito = [];
  mostrarCarrito();
}

document.addEventListener("DOMContentLoaded", () => {
  mostrarProductos();
  mostrarCarrito(); // Para inicializar el carrito al cargar la página
  document
    .getElementById("formulario-pago")
    .addEventListener("submit", procesarPago);
});
