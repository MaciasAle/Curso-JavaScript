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

// Función para guardar el carrito en localStorage
function guardarCarrito() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Función para cargar el carrito desde localStorage
function cargarCarrito() {
  const carritoGuardado = localStorage.getItem("carrito");
  if (carritoGuardado) {
    carrito = JSON.parse(carritoGuardado);
  }
}

function mostrarProductos() {
  const contenedor = document.getElementById("productos");
  contenedor.innerHTML = ""; // Limpiar contenedor antes de agregar productos
  productos.forEach((producto) => {
    const productoHTML = document.createElement("div");
    productoHTML.classList.add("producto");
    productoHTML.innerHTML = `
          <img src="${producto.imagen}" alt="${producto.nombre}">
          <h2>${producto.nombre}</h2>
          <p>${producto.descripcion}</p>
          <p>$${producto.precio}</p>
          <button data-id="${producto.id}">Agregar al Carrito</button>
      `;
    contenedor.appendChild(productoHTML);
  });

  // Añadir evento a todos los botones de "Agregar al Carrito"
  document.querySelectorAll(".producto button").forEach((button) => {
    button.addEventListener("click", (e) => {
      const id = parseInt(e.target.dataset.id);
      agregarAlCarrito(id);
    });
  });
}

function agregarAlCarrito(id) {
  const producto = productos.find((p) => p.id === id);
  carrito.push(producto);
  guardarCarrito();
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
  tabla.innerHTML = `
      <tr>
          <th>Producto</th>
          <th>Precio</th>
          <th>Acciones</th>
      </tr>
  `;

  carrito.forEach((producto, index) => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
          <td>${producto.nombre}</td>
          <td>$${producto.precio}</td>
          <td><button data-index="${index}">Eliminar</button></td>
      `;
    tabla.appendChild(fila);
  });

  contenedor.appendChild(tabla);

  // Añadir evento a todos los botones de "Eliminar"
  document.querySelectorAll("#carrito button").forEach((button) => {
    button.addEventListener("click", (e) => {
      const index = parseInt(e.target.dataset.index);
      eliminarDelCarrito(index);
    });
  });
}

function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  guardarCarrito();
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
  guardarCarrito();
  mostrarCarrito();
}

document.addEventListener("DOMContentLoaded", () => {
  cargarCarrito();
  mostrarProductos();
  mostrarCarrito(); // Para inicializar el carrito al cargar la página
  document
    .getElementById("formulario-pago")
    .addEventListener("submit", procesarPago);
});
