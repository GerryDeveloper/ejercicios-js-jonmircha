/**
 * EXPRESIONES REGULARES
 * 
 *  - es una secuencia de caracteres que forman un patron de busqueda
 *  - principalmente utilizado en la BUSQUEDA de cadenas de TEXTO.
 *  - son una secuencia de caracteres que forman un patron 
 *  de busqueda, principalmente utilizada para la busqueda de patrones
 *  de cadens de caracteres
 * 
 *  - se usan para validar correos electronicos
 *  - validacion de DNI o numeros de identificacion
 *  - RFC en Mexico por ejempolo
 *  - podriamos validar los 16 digitos de una targeta
 * 
 *  - las banderas indican cuestiones adicionales a la busqueda
 *  - g: busca en todo, no se detiene en la primer coincidencia
 *  - i: ignore case
 *  - []: significan un listado valido, intervalos tipo
 *  - {}: las llaves indican repeticion
 *  
 */

// dos maneras de generar una expreson regular


let cadena2 = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
 Lorem Ipsum has been the industry's standard dummy text ever 
 since the 1500s, when an unknown printer took a galley of type and 
scrambled it to make a type specimen book.`;

let cadena = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.\
 Lorem Ipsum has been the industry's standard dummy text ever \
 since the 1500s, when an unknown printer took a galley of type and \
scrambled it to make a type specimen doloremque book."; // here in doLOREMque

// 1.- usando la funcion constructora
let expReg = new RegExp("lorem", "ig"); // recive: "regExp", "flags"
console.log(expReg.test(cadena)); // evaluar que exista expReg en cadena // fasle
console.log(expReg.exec(cadena)); // devuelve un arreglo con mas informacion // null
console.clear();

// 2.- segunda manera: expresion entre dos /expression/
// let expReg2 = /lorem/ig; // regExp/flags
let expReg2 = /lorem{3,}/ig; // almenos 3 veces o mas
// let expReg2 = /[0-9]/ig; // 
// let expReg2 = /\d/ig; // 
console.log(expReg2.test(cadena));
console.log(expReg2.exec(cadena));