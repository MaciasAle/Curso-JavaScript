// Variables para la venta de gorras
let gorras = [];
const productForm = document.getElementById("product-form");
const productList = document.getElementById("product-list");

// Constructor de objeto Gorra
function Gorra(nombre, precio) {
  this.nombre = nombre;
  this.precio = parseFloat(precio);
}

// Función para agregar una gorra
function agregarGorra(nombre, precio) {
  const nuevaGorra = new Gorra(nombre, precio);
  gorras.push(nuevaGorra);
  actualizarLista();
}

// Función para eliminar una gorra
function eliminarGorra(index) {
  gorras.splice(index, 1);
  actualizarLista();
}

// Función para actualizar la lista de gorras en el DOM
function actualizarLista() {
  productList.innerHTML = "";

  for (let i = 0; i < gorras.length; i++) {
    const gorra = gorras[i];
    const li = document.createElement("li");
    li.textContent = `${gorra.nombre} - $${gorra.precio.toFixed(2)}`;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Eliminar";
    deleteButton.addEventListener("click", () => eliminarGorra(i));
    li.appendChild(deleteButton);
    productList.appendChild(li);
  }
}

// Manejar el envío del formulario
productForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const nombre = document.getElementById("product-name").value;
  const precio = document.getElementById("product-price").value;

  if (nombre && precio) {
    agregarGorra(nombre, precio);
    productForm.reset();
  }
});
