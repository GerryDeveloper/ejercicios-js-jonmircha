/**
 * REST
 *  - son parametros que recive una funcion
 *  - son una forma de virtualmente agregar parametros infinitos a una funcion
 *  - posibles valores infinitos
 *  - se definen usando ... antes del nombre
 *  - parametro REST que puede o no ser infinito.
 * 
 *  - el metodo forEach(function () {}); recive una funcion que se va a ejecutar tantas veces como
 *  elementos tenga la variable que lo manda llamar, creo la funcion dentro es una funcion anononima.
 * 
 * SPREAD OPERATOR
 * 
 *  - cuando una operacion la tengamos que expandir en situaciones donde tengamos que guardar multiples
 *  argumentos o elementos
 *  - son parametros que se pueden estar ejecutando en cualquier sentencia de nuestro codigo
 * 
 */

function sumar(a, b, ...c) {
  let resultado = a + b;

  // todo lo que llegue despues de c se tratara como si fuera un arreglo
  c.forEach(function (n) {
    resultado = resultado + n;
  });

  return resultado;
}

console.log(sumar(1,2));
console.log(sumar(1,2,5));
console.log(sumar(1,2,3,4));

// SPREAD OPERATORS

const arr1 = [1,2,3,4,5],
  arr2 = [6,7,8,9,0];

//const arr3 = [arr1, arr2];
const arr3 = [...arr1, ...arr2];

console.log(arr1, arr2);
console.log(arr3);