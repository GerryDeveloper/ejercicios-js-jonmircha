/**
 * FUNCIONES ANONIMAS AUTOEJECUTABLES (IIFE en ingles)
 * 
 *  - es un patron
 *  - es una funcion donde englobas todo lo que deseas ejecutar
 *  - se llaman autoejecutables porque son DEFINIDAS Y EJECUTADAS al  
 *  momento de ser creadas
 *  - como su nombre indica NO TIENEN NOMBRE
 * 
 *  - es una manera que a la hora que el archivo carga en el navegador
 *  se ejecuta la programacion que esta en ese archivo
 *  - ademas esta protejido de efectos secundarios que pudiera  tener
 *  la invocacion de librerias de terceros o de otros mismos archivos
 *  de programacion que uno haya hecho
 * 
 *  - como son funciones, podrias tener nombres de variables muy similares
 *  y no habria conflicto
 * 
 *  - todo el codigo de jQuery esta en una funcion
 *  - jQuery esta escrito en el patron factory
 *  
 *  - nos permiten pasar PARAMETROS y usar ALIAS dentro del cuerpo de 
 *  nuestra funcion
 * 
 *  - los ; son NECESARIOS en estos casos, sino podria haber una concatenacion
 *  de funciones que den resultados inesperados
 * 
 *  - puede ser una forma para refactorizar por ejemplo se pasa de parametro 
 *  document y se recive como d, por tanto se puede trabajar con el document
 *  sin tener que escribir el nombre completo
 * 
 *  - eran muy populares antes de que llegaran los modulos, es decir poder llamar
 *  a archivos javascript dentro de otros y poder encapsular nuestro codigo
 *  a manera de metodos exportados e importados, este era un metodo muy uitlizado
 *  
 *  - era un patron muy utilzado a la hora de crear modulos en javascript
 * 
 * 
 *  -------------
 *  FUNCION
 *  alert("Hola"); 
 *  - alert: es el nombre de la funcion
 *  - (): indican ejecucion
 * 
 *  - por tanto una funcion que no tiene nombre y que se autoejecuta seria
 *  () {... code here }
 * 
 *  - una funcion con nombre es una funcion nombrada alga la redundancia
 * 
 */

// Funcion Anonima Autoejecutable
// alert("hola!"); // es una funcion dentro de window

// function () {} // indica el cuerpo, la ESTRUCTURA de la funcion: equivalente a alert de arriba
// () seria el ejecutable de la funcion, es el parentesis que la EJECUTA
// tenemos que ENCERRARLA entre llaves () PARENTESIS ya que no tiene nombre

// el codigo de una no entra en conflicto con el codigo de la otra

(function () {
  // ... all code here
  console.log("Mi primer IIFE");
} )();

(function (d, w, c) { // recive/parametros
  console.log("Mi segunda IIFE");
  console.log(d);
  console.log(w);
  console.log(c);

  c.log("este es un console.log() dentro de la variable \"c\"");
})(document, window, console); // argumentos

// distintas formas de escribir funciones anonimas autoejecutables
// CLASICA
(function () {
  //...code here
})();

// formato Crockford (JavaScript The Good Parts)
// es el formato que propone Douglas Crockford
((function () {
  //...code here
}) ());

// Unaria
+function () {
  console.log("Version Unaria");
}();

// Facebook
!function () {
  console.log("version Facebook");
}();