// UNA RESPUESTA A UNA PREGUNTA

let n1 = 12;
let n2 = "12";

// console.log(n1 > n2); // false
// console.log(n1 < n2); // true
// console.log(n1 >= n2); // false
// console.log(n1 <= n2); // true
// console.log(n1 == n2); // comparacion simple
// console.log(n1 === n2); // comparacion estricta
// console.log(n1 != n2); // ---> cuando sean iguales da true
// console.log(n1 !== n2); // ---> cuando sean iguales da true

let id = "dsadasd";

// console.log(id === "xd123jk");

let esCasado = false;

// console.log(esCasado !== false);

// let nombre = prompt("ingresa tu nombre");
// let edad = Number(prompt("ingresa tu edad"));

// Un sistema para una app web que puedan sacar entradas para un recital
// que tiene que ser mayor de edad ---> 18 o mas

// console.log("inicio");

// if (edad >= 18) {
//   // bloque de codigo
//   console.log("gracias por tu compra");
// } else {
//   // bloque de codigo
//   console.log("debes ser mayor de edad");
// }

// console.log("fin");

// let estaLogeado = false;

// if (estaLogeado) {
//   // true
//   console.log("Tienes acceso");
// } else {
//   console.log("no tienes acceso");
// }

// // 18 o + ---> puedo entrar
// // 13 o +  ---> puedo entrar con un adulto
// // -13 ---> no puedo entrar

// let edad = 17.5;

// if (edad >= 18) {
//   console.log("puede entrar");
// } else if (edad >= 13) {
//   console.log("puede entrar con un adulto");
// } else {
//   console.log("no puede entrar");
// }

// 18 o + ---> puedo entrar
// -18 y vengo con un adulto ---> puedo entrar con un adulto
// -18 y no vengo con un adulto ---> no puedo entrar

// let edad = 12;
let siVieneConUnAdulto = true;
// OPERADORES LOGICOS ---> && - ||

// if (edad >= 18) {
//   console.log("puedo entrar");
// } else if (edad < 18 && siVieneConUnAdulto) {
//   console.log("puede entrar con el adulto");
// } else {
//   console.log("no puede entrar");
// }

// and ---> && ---> evaluar que ambas condiciones se cumplan
// or ---> ||  ---> evalauar que por lo menos una condicion se cumpla

// console.log(true || true || false || true);

// el operador and se queda con el primer falsy o con el ultimo truthy

let x = true && true && "pepe" && true && "casa" && "juancito";

// console.log(x);

// el operador or se queda con el primer truthy o con el ultimo falsy
let y = false || 0 || 0 || "" || false || 0;

// console.log(y);

// "" ---> falsy
// 0 ---> falsy
// "dsadas" --> truthy
// 125 ---> truthy

// mostrar por consola, el dia correspondiente
// 1 --> lunes
// 2 --> martes

// let dia = prompt("ingresa el numero de dia"); // 1 - 2 - 3

// if (dia === "1") {
//   console.log("lunes");
// } else if (dia === "2") {
//   console.log("martes");
// } else if (dia === "3") {
//   console.log("miercoles");
// } else if (dia === "4") {
//   console.log("jueves");
// } else if (dia === "5") {
//   console.log("viernes");
// } else if (dia === "6") {
//   console.log("sabado");
// } else if (dia === "7") {
//   console.log("domingo");
// } else {
//   console.log("el numero no es valido");
// }

// switch case
// let dia = prompt("ingresa el numero de dia"); // 1 - 2 - 3

// switch (dia) {
//   case "1":
//     console.log("lunes");
//     break;
//   case "2":
//     console.log("martes");
//     break;
//   case "3":
//     console.log("miercoles");
//     break;
//   case "4":
//     console.log("jueves");
//     break;
//   case "5":
//     console.log("viernes");
//     break;
//   case "6":
//     console.log("sabado");
//     break;
//   case "7":
//     console.log("domingo");
//     break;
//   default:
//     console.log("el numero no es valido");
// }

// ternario ---> siempre y cuando tenga unicamente 2 caminos

// mostrar por consola si es o no mayor de edad
let edad = prompt("ingresa tu edad");

if (edad >= "18") {
  console.log("mayor");
} else {
  console.log("menor");
}

// condicion ? lo que quiero hacer cuando es true : lo que quiero hacer cuando es false

edad >= "18" ? console.log("mayor") : console.log("menor");

let sandwich = 100;
let pan = prompt("que pan quieres?");
let extra = prompt("que extra quieres?");

// si elige pan comun --> le sumo 2
// si elige pan arabe ---> le sumamos 5

if (pan === "comun" || pan === "arabe") {
  pan === "comun" ? (sandwich = sandwich + 2) : (sandwich += 5);
} else {
  alert("pan incorrecto");
}

// extra carne 10
// extra pollo 5
// extra verdura 2
// extra queso x2 ---> 10
// extra panceta x2 ---> 10

switch (extra) {
  case "queso":
  case "panceta":
  case "carne":
    sandwich += 10;
    break;
  case "pollo":
    sandwich += 5;
    break;
  case "verdura":
    sandwich += 2;
    break;
  default:
    alert("extra no valido");
}

console.log("el precio de su sandiwch es de " + sandwich);
