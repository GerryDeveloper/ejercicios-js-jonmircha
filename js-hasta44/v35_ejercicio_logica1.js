/**
 * PRIMEROS 4 EJERCICIOS:
 * 
 * ---------------------
 * 
1) Programa una función que cuente el número de caracteres de una cadena de 
texto, pe. miFuncion("Hola Mundo") devolverá 10.
2) Programa una función que te devuelva el texto recortado según el número de caracteres 
indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
3) Programa una función que dada una String te devuelva un Array de textos separados por 
cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
4) Programa una función que repita un texto X veces, pe.
miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
 */

// 1.- Ejercicio1
// falta resolver en caso de ingresarse un arreglo con elementos
function contarCaracteres (str) { // value by default =""

  switch (typeof str) { // we get the type, yeh
    case "number":
      return `>>>Es un numero, ingrese una cadena\
        de igual forma su longitud es: ${ String(str).length}`;
        // de igual forma su longitud es: ${(String.toString(str)).length}`;
      break;

    case "string":
      return str.length;
      break;

    case "boolean":
      return ">>>Boolean, no length";

    case "undefined":
      return ">>>Undefined, no length";
      break;

  
    case "object":
      // es object pero puede ser [] or {}
      if (Array.isArray(str)) {
        return `//Es un arreglo de longitud ${str.length}`;
      } else {
        return ">>>Oject, no length";
      }
      break;

    default: 
      return "***Ingrese un valor valido***";
      break;
  }

  //return str.length;
}

let value = "esto es una cadena de texto";
let functionResult = contarCaracteres(value);

let indefinido;

// console.log(`longitud de la cadena "grupo g5" = ${contarCaracteres("grupo g5")}`);
console.log(`longitud del elemento: "${value}" = ${contarCaracteres(value)}`);
value = 12;
console.log(`longitud del elemento: "${12}" = ${contarCaracteres(value)}`);
value = true;
console.log(`longitud del elemento: "${true}" = ${contarCaracteres(value)}`);
value = indefinido;
console.log(`longitud del elemento: "${indefinido}" = ${contarCaracteres(value)}`);
value = [];
console.log(`longitud del elemento: "${[]}" = ${contarCaracteres(value)}`);
value = [1,2,3,4,5,6,7,8,9];
console.log(`longitud del elemento: "${[]}" = ${contarCaracteres(value)}`);
// se enviea un objeto {}
console.log(`longitud del elemento: "${{}}" = ${contarCaracteres({})}`);
// console.log(typeof undefined === "undefined"); // true

console.clear();

/*
2) Programa una función que te devuelva el texto recortado según el número de caracteres 
indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
*/

function cortarCadena(cad, limit) {
  if(limit <= cad.length) {
    let resul = "";
    for (let i = 0; i < limit; i++) {
      resul += cad[i];
    }
    return resul;
  } else {
    return "el tamanio de la cadena brindada es menor al corte.";
  }
}

console.log("estoEsUnaCadenaDeTexto".length);
console.log(cortarCadena("estoEsUnaCadenaDeTexto", 8));
console.log(cortarCadena("estoEsUnaCadenaDeTexto", 22));
console.log(cortarCadena("estoEsUnaCadenaDeTexto", 80));
console.clear();

/**
 * 3) Programa una función que dada una String te devuelva un Array de textos separados por 
cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
 */

function separarCadena(cad, separador) {
  const arrayCadenas = cad.split(separador);
  return arrayCadenas;

}
let cadena = "esto tambien es una cadena de texto",
separador = " ";

const resultado = separarCadena(cadena, separador);
console.log(resultado);
console.log(`Es tipo array? = ${Array.isArray(resultado)}`); // preguntas si es array
console.log(`Converte la cadena ${cadena}, \nen un arreglo: ${ separarCadena(cadena, separador)}`);

console.clear();

/**
 * 4) Programa una función que repita un texto X veces, pe.
miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
 */

function repiteTexto(texto, cantidad) {

  let cad = "";
  for (let i = 0; i < cantidad; i ++) {
    cad += texto;
  }
  return cad;
}
let cadena2 = "Texto",
cantidad = 5;
console.log(`Funcion repite el texto: ${cadena2} ${cantidad} \
  de veces = ${repiteTexto(cadena2, cantidad)}`);