// console.log("algo");

// // inicializacion / condicion / modificador

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// console.log("otra cosa");

// let x = 12;
// x = x + 10;
// x += 10;

// let y = 15;
// y = y + 1;
// y += 1;
// y++;

// mostrarle la tabla de multiplicar de ese numero

//  5 * 1 = 5
//  5 * 2 = 10
//  5 * 3 = 15
//  5 * 3 = 15
//  5 * 3 = 15
//  5 * 3 = 15
//  5 * 3 = 15
//  5 * 3 = 15
//  5 * 3 = 15
//  5 * 3 = 50

// let numero = prompt("Ingresa el numero");
// numero = Number(numero);
// // console.log(typeof numero);

// for (let i = 1; i <= 10; i++) {
//   //   let texto = numero + " * " + i + " = " + numero * i;
//   //   let texto = `${numero} * ${i} = ${numero * i}`;
//   console.log(texto);
// }

// template literals
// "" -- '' -- ``
// acentos graves ``

let nombre = "pepe";
let apellido = "perez";

// console.log( hola pepe perez como estas )
console.log("hola " + nombre + " " + apellido + " como estas?");
console.log(`hola ${nombre} ${apellido} como estas?`);

for (let i = 10; i >= 5; i--) {
  //   console.log(i);
}

// Ejercicio: Números Pares e Impares en un Rango
// Escribe un programa en JavaScript que recorra un rango de números dados por el
// usuario e imprima si cada número es par o impar.

// Requisitos:
// El programa debe pedir al usuario que ingrese dos números: el número de inicio (start)
//  y el número de fin (end).
// El programa debe usar un ciclo for para recorrer todos los números desde start hasta
// end (inclusive).
// Dentro del ciclo, el programa debe verificar si cada número es par o impar.
// El programa debe imprimir cada número junto con un mensaje que indique si es par o
// impar.

// let inicio = Number(prompt("ingresa el numero inicial"));

// let fin = Number(prompt("ingresa el numero final "));

// if (inicio <= fin && fin - inicio <= 100) {
//   for (let i = inicio; i <= fin; i++) {
//     let res =
//       i % 2 === 0 ? `el ${i} es un numero par` : `el ${i} es un numero impar`;
//     console.log(res);
//   }
// } else {
//   alert("el codigo va a explotar");
// }

// WHILE

// mostrar por consola los numeros del 1 al 10

// let palabra = "juancito";

// while (palabra !== "pepe") {
//   console.log("la palabra es incorrecta");
//   palabra = prompt("ingresa una palabra");
// }

// let ingreso = Number(prompt("ingresos")); // 15
// let ingresoTotal = 0;

// while (ingreso !== 0) {
//   ingresoTotal += ingreso;
//   ingreso = Number(prompt("ingresos"));
// }

// alert("el ingreso total fue " + ingresoTotal);

// DO WHILE

// mostrar los numeros desde A hasta B
// por lo menos mostar 1 vez el console log

let a = 9;
let b = 7;

do {
  console.log(a);
  a++;
} while (a <= b);
