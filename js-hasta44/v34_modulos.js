/**
 * MODULOS (import/export )
 * 
 *  ----------------
 *  - se usa la DESTRUCTURACION (?crear un objeto donde recive los imports
 *  como atributos)
 *  - tambien se puede tener un solo elemento importado por DEFAULT, este
 *  elemento sale de la destructuracion y se acomoda antes de esta
 * 
 *  ---------------
 *  ejemplo: import elementDefault, {desctruct1, element2, element3,....} from "./filename.js";
 * 
 *  - significa que puedes mandar a llamar los archivos javascript no solo
 *  desde el archivo HTML sino desde un archivo javascript interno puedes mandar
 *  a llamar otro
 * 
 *  - consideraciones: el codigo javascript es BLOQUEANTE
 * 
 *  - para ser capaces de mandar llamar otros archivos javascript desde este
 *  es necesario poner le atributo type="module" en la etiqueta <script> en javascript
 *  
 *  - lo primero en el archivo javascript son las importaciones de codigo, antes
 *  que cualquier otra cosa.
 *    - IMPORTACION DE MODULOS
 *    - despues VARIABLES
 *    - FUNCIONES
 *    - CODIGO
 * 
 *  - from {} se unsa un {} porque es como se lo importado se guardara en un objeto
 *  - ./ significa busca a partir dela carpete donde estoy
 *  - ../ se agrega un punto por cada nivel
 *  
 *  - el atributo type="module" es importantisimo cuando mandemos llamar imports de otros
 *  archivos de javascript, de otra forma no podremos hacer uso de import
 * 
 *  - para dar retrocompatibilidad a navegadores viejos escriben su codigo en ECMAScript 5
 *  y lo mandan a llamar con <script> y el paramedtro nomodule; este archivo se agrega junto 
 *  con el otro y se pone nomodule para no cargar los dos archivos, el ES6 y el ES5 dos  
 *  veces.
 * 
 *  - en un archivo se puede exportar solamente lo que uno necesite, sino es necesario 
 *  esportar otros elementos no se apade la palabra export y listo
 *  - esto permite exportar solamente lo que se necesite.
 *  
 *  -----------------
 *  - puedes agrupar funciones y exportarlas en un objeto
 * 
 *  - podemos exportar funciones automaticamente
 *  - no se pueden tener dos funcioens exportadas por default
 *  - no es necesario usar todas las funciones que se exportan
 * 
 *  -----------------
 *  - funcioens definidas y expresadas
 *  - funcion definida: se puede llamar desde cualquier parte, se usa function para
 *  mandarla llamar
 *  - funcion expresada: se guardan en VARIABLES, necesita suarse despues de 
 *  su declaracion.
 * 
 *  -----------------
 *  - cuando IMPORTAMOS POR DEFAULT indicamos que al momento que se importe el archivo
 *  donde se vaya a hacer la invocacion, carga ese objeto, esa funcion por defecto
 * 
 *  - el export default solo lo soportan las FUNCIONES DEFINIDAS, y las CLASES  
 * 
 *  -----------------
 *  - se pueden usar alias para los imports usando la palabra "as" seguido del alias
 * 
 */
// import saludar, {PI, usuario} from "./v34_constantes.js"; // a single / works, init a ./ needed?
import saludar, {Saludar, PI, usuario} from "./v34_constantes.js"; // a single / works, init a ./ needed?
// import {sumar, restar} from "./v34_aritmetica.js";
// import { aritmetica } from "./v34_aritmetica.js";
import { aritmetica as calculos} from "./v34_aritmetica.js";

console.log("Archivo modulos.js"); // v34_modulos.js
console.log(`Importamos PI from v34_constantes.js = %.5g`, PI); // v34_modulos.js
console.log(`usuaro = ${usuario}`);
// console.log(sumar(3, 4));
// console.log(aritmetica.sumar(3, 4));
console.log(calculos.restar(3, 4));
saludar();
const saludo = new Saludar();
// console.log(saludo);
saludo;