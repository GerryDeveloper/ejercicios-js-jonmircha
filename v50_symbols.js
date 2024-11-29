/**
 * NUEVOS TIPOS DE DATOS EN JAVASCRIPT
 * 
 * - Symbol() retorna com un string "Symbol()"
 * - es un tipo de dato PRIMITIVO que fue introducido despues del estandar
 *  EcmaScript 2015, tiene pocos anios.
 * - una vez que creamos un symbolo, su valor se mantendra privado
 *  y para uso interno.
 * 
 * - generalmente los symbols se agregan como caracteristicas
 *  de un objeto, como una PROPIEDAD, y estas se van a mantener privadas
 * 
 * - NO podemos usar el operador NEW
 * - solo mandamos la funcion constructora Symbol()
 * 
 * - nos permiten crear IDENTIFICADORES UNICOS, identificadores
 *  de referencia
 *  
 * - lo que hacen los symbolos es crear un identificador
 *  UNICO
 * 
 * - un Symbol() crea una referencia UNICA
 * 
 * - acepta una cadena de texto o un numero, creo tambien undefined
 * 
 * - las buenas practicas indican que deben ser creados con
 *  CONSTANTES
 * 
 * - el uso mas comun que se le da a los Symbols es
 *  como propiedades privadas de lso objetos
 * - [NOMBRE]: "Jon", con esta nomenclatura [] javascript ya sabe
 *  que previamente debe existir una variable que es un simbolo
 *  y que en este caso se llama NOMBRE, ahora simplemente se le
 *  asigna un valor "Jon" en este caso.
 * 
 * - funcionan como si fueran PROPIEDADES PRIVADAS de los objetos
 * 
 * - es una PROPIEDAD TIPO VARIABLE
 * 
 * - su objetivo es crear ELEMENTOS PRIVADOS dentro de un objeto
 *  y que tambien sus REFERENCIAS SERAN UNICAS.
 * =========================
 * - ahora veremos PROPIEDAD TIPO FUNCION
 * 
 * ---------------------------
 * console.log(Object.getOwnPropertySymbols(persona)); 
// devuelve la lista de symbolos a manera de arreglo
 * 
 */

// let id = "hola";
// let id2 = "hola";
let id = Symbol("id");
let id2 = Symbol("id2");

console.log(id === id2);
console.log(id, id2); // los imprime como si fueran cadenas
console.log( typeof id, typeof id2);

// const NOMBRE = Symbol();
// const SALUDAR = Symbol();
const NOMBRE = Symbol("nombre");
const SALUDAR = Symbol("saludar");

const persona = {
  [NOMBRE]: "Jon",
  edad: 35
};

console.log(persona);

persona.NOMBRE = "Jonathan MircCha";
console.log(persona);
console.log(persona.NOMBRE);
console.log(persona[NOMBRE]);

persona[SALUDAR] = function () {
  console.log("hola, esto es un symbol tipo funcion");
}

console.log(persona);
persona[SALUDAR]; // falta la ejecucion de los parentesis
persona[SALUDAR]();
console.log(persona[SALUDAR]);

console.log("\n");

for (let propiedad in persona) {
  console.log(propiedad);
  console.log(persona[propiedad]);
}
console.log("\n");

console.log(Object.getOwnPropertySymbols(persona)); 
// devuelve la lista de symbolos a manera de arreglo

console.log( Symbol("same") === Symbol("same"));