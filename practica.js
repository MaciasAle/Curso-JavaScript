alert("Bienvenido");
let nombreDelAlumno = prompt("Nombre del Alumno");
let apellidoDelAlumno = prompt("Apellido del alumno");
alert(" Su hijo/a es " + nombreDelAlumno + " " + apellidoDelAlumno + "?");

let asiste = prompt("asiste?");

if (asiste === "si") {
  console.log(prompt("coloque DNI"));
  alert("su hijo/a se inscribio correctamente");
} else {
  console.log(alert("gracias por su tiempo"));
}
console.log("precios excursion");
let excursion = 100000;
let comedor = prompt("con comedor");
//si elige con comedor le sumo 20000
//si elige sin comedor le sumo 0
if (comedor === "si") {
  console.log(alert("vale 20000"));
} else {
  console.log(alert("contrato sin comedor: el alumno debera llevar su vianda"));
}
if (excursion === "sin comedor" || comedor === "con comedor") {
  excursion === "sin comedor"
    ? (excursion = excursion + 0)
    : (excursion = excursion + 20000);
}
alert = "quiere usted ser acompañante resposable del curso?";
let edad = prompt("coloque su edad ");
if (edad >= 18) {
  console.log(prompt("ingrese nombre y apellido "));
  alert =
    "gracias por su tiempo ya esta inscripto para ser un adulto responsable del curso de 4°A";
} else {
  console.log("debes ser mayor de edad");
}
// faltaria con un FOR agregar x cantidad de niños hasta que llegue a 20

// faltaria arreglar la suma total del precio de la excursion
