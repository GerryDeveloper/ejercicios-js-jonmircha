
/**
 * Estructura de Control
 * 
 *  - es aquel mecanismo que permite controlar el flujo de la aplicación
 * 
 *  - estructuras secuenciales: una de tras de la otra
 *  - condicionales: dependiendo de la evualuacion de una condicion hace 
 *  una cosa u otra.
 *  - loops o estructuras repetitivas: 
 * 
 */

// estructuras condicionales if - else

let edad = 25;

if ( edad > 17 ) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

edad = 18;
if ( edad < 18 ) {
  console.log("Eres MENOR de edad");
} else {
  console.log("Eres MAYOR de edad");
}

// if - else if - else (if anidados)
console.log("\n");

/**
 * greetings around the world
 * 
 * déjame dormir: 0 - 5hrs
 * buenos dias: 6 - 11hrs
 * buenas tardes: 12 - 18hrs
 * buenas noches: 19 - 23hrs
 * 
 */

let hora = 5;
if ( hora >= 0 && hora <= 5) {
  console.log("Dejenme Dormir#");
} else if (hora >= 6 && hora <= 11) {
  console.log("buenos dias!");
} else if (hora >= 12 && hora <= 18) {
  console.log("buenas tardes!!");
} else if(hora >= 19 && hora <= 23) {
  console.log("buenas noches!!!");
} else {
  console.log(`de alguna forma hemos llegado aqui. ${23 + 4}\n`);
}

hora = 14;
console.log("\nusando simbolos commpuestos: <=,>=");
hora = 21;
if ( hora >= 0 && hora <= 5) {
  console.log("Dejenme Dormir#");
} else if (hora >= 6 && hora <= 11) {
  console.log("buenos dias!");
} else if (hora >= 12 && hora <= 18) {
  console.log("buenas tardes!!");
} else {
  console.log("buenas noches!!!");
} 

console.log("\nusando solo simbolos simples: <,>");
hora = 21;
//if ( hora > 23 && hora < 6) {
if ( hora < 6) {
  console.log("Dejenme Dormir#");
} else if (hora > 5 && hora < 12) {
  console.log("buenos dias!");
} else if (hora > 11 && hora < 19) {
  console.log("buenas tardes!!");
} else {
  console.log("buenas noches!!!");
} 

/** Operador ternario
 * 
 * (condicion) ? true : false;
 * 
 *  - en un operador ternairo solo puedes ejecutar una linea de código.
 *  - si quisieras ejecutar un conjunto de lineas dentro de un 
 *  operadore ternario tendrias que poner esas lineas en una función
 *  y mandarla llamar dentro del operador ternario.
 * 
 * (condicion) ? functionTrue() : functionFalse();
 */
edad = 15;
console.log("Operador Ternario.");
//let eresMayor = (edad >= 18) ? "Eres MAYOR de edad." : "Eres MENOR de edad."; // podemos indentar
let eresMayor = (edad >= 18) ?
"Eres MAYOR de edad." :
"Eres MENOR de edad.";
console.log(eresMayor);

/**
 * switch - case
 * 
 *  - ejemplo:
 * domingo - 1
 * ...
 * sabado - 6
 * 
 */

let dia = 2;

switch (dia) {
  case 0:
    console.log("Domingo");
    break;
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miercoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sabado");
    break;

  default:
    break;
}