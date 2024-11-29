/**
 * ARROW FUNTIONS => ()
 * 
 *  - recordar undiones declaradas y expresadas.
 *  - es una nueva forma de definir funciones anonimas
 *  - pero fundiones anonmas expresadas
 * 
 *  - nueva forma de definir una funcion anonima
 *  - si la funcion tiene una linea de codigo podemos omitir las {}
 *  - si la funcion solo recive un parametro podemos omitir los ()
 * 
 *  - una de las caracteristicas mas importantes de las arrow funcitons es que 
 *  capturan el CONTEXTO del OBJETO donse se ENCUENTRAN "this" del CONTEXTO donde se encuentren. 
 *  (o no?????????) Esto es que capturan el contexto del objeto que las contiene, no de donde
 *  estan contenidas. Osea Window por ejemplo.
 *  
 *  -reconocen el contexto padre donde se encuentra el objeto que las ha declarado.
 * 
 * _________________
 *  - OBJETO LITERAL:
 *  - dentro de un OBJETO LITERAL no es una buena practica declarar una ARROW FUNCTION.
 *  - los metodos dentro de un objeto literal se crean asi: nombreFunction: function () {}, o con la 
 *  NUEVA SINTAXIS de los objetos literales: nombreFunction () {}
 * _________________
 *  - FUNCION DECLARADA:
 *  - la llamada puede ser incluso antes de que la funcion sea creada, lo cual no se puede
 *  con una funcion expresada, pues javascript aplica el hoisting a las funciones.
 * 
 */

// una FUNCION EXPRESADA se origina cuando a una variable le asignas el valor de una funcion anonima

const saludar = function () {
  console.log("Hola");
}

// FUNCION DECLARADA: 

function saludarDeclared() {
  console.log(`Hola desde una funcion declarada. `);
}

// ARROW FUNCTION

const saludarArrow = () => {
  console.log("Hola desde una arrow function = () => {}");
}
// cuando tu funcion tiene una sola linea de instruccion se pueden omitir las {}
const despedirArrow = () => console.log("arrow function en una sola linea");

// para RECIVIR PARAMETROS (uno solo) en una arrow funtion

const saludar3 = nombre => {
  console.log(`Hola ${nombre}!`);
}

const saludar4 = (nombre, disponibilidad) => {
  console.log(`Nombre es: ${nombre}, disponibilidad: ${disponibilidad}`);
}

// RETURN IMPLICITO en las arrow functions

// ejemplo return
// function sumar(a, b) {
//   return a + b;
// }

const sumar = (a, b) => a + b;

// funcion de varias lineas
const funcionVariasLineas = () => {
  console.log("UNO");
  console.log("DOS");
  console.log("TRES");
}

// 
function iterarArray() {
  const numeros = [1,2,3,4,5];

  numeros.forEach(function (element, index) {
    console.log(`El elemento ${element} esta en la posicion: ${index}`);
  });
}

// iterar array con arrow function
function iterarArrayArrow() {
  const numeros = [1,2,3,4,5];
  numeros.forEach( (element, index) => {
    console.log(`Elemento index[${index}] valor: ${element}`);
  });
}

// example how arrow funcionts grab the "this" object of its context
// function Perro
function Perro () {
  console.log(this);
}

// en lugar de funcion, sera objeto perro
// objeto literal
const perro = {
  nombre: "nombre perro",
  ladrar () {
    console.log(this);
  }
  // ladrar: () => {
  //   console.log(this);
  // }
  // ladrar: function () {
  //   console.log(this); // this hace referencia al objeto, al perro en este caso
  // }
}

perro.ladrar();

// Perro();
/** como la funcion existe dentro del contexto del contexto del navegador
 *  entonces "this" se vuelve el objeto "window", el objeto del DOM que 
 *  representa la venana del navegador.
 */

// saludar();
// saludarDeclared();
// saludarArrow();
// saludar3("Itzel");
// saludar4("Itzel", "soltera");
// console.log()
// console.log(sumar(10, 8.75));
// console.log("\n");
// funcionVariasLineas();
// iterarArray();
// iterarArrayArrow();

