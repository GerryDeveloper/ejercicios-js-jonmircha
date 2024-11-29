
/**
 * SCOPE DE LAS VARIABLES
 * 
 * Es el ambito de existencia
 * 
 *  .-HOISTING:
 *  Caracteristica antigua de JavaScript, el ambito de variables antiguo era global y de funcion
 *  no de bloque como otros lenguajes, entonces si se declaraba una variable en un if, el compilador
 *  la sacaba y la colocaba antes de la "funcion" pero como no hay funcion, la colocaba al inicio
 *  volviendola global, esto era un problema.
 * 
 *  -> Esto cambio con ECMAScript 6, ahora tenémos ambito de bloque
 * 
 *  .-LET
 *  Por eso ahora tenémos que declarar una variable con la palabra reservada "let"
 * 
 *  -> si declaras una variable con "let" en lugar de "var" esta variable pasara a ser de ambito de 
 *  BLOQUE. 
 * 
 *  .-AMBITO GLOBAL EN EL JS DE LOS NAVEGADORES (8:50 vid 4)
 *  El objeto "window" es el objeto donde se almacena el ambito global en el javascript de los navegadores
 * 
 *  -> el objeto window MAPEA toda la ventana del navegador para javascript
 * 
 * 
 */

var hola = "Hola Mundo"
let hello = "Hello World."

console.log(hola)
console.log(hello)
console.log(window)
console.log(window.hola)
console.log(window.hello)

console.log("********* var *********")
// ambito de bloque
var musica = "Rock";
console.log("Variable Música ANTES del bloque {...  }: ", musica);
// esto es un bloque
{
    var musica = "Rap";
    console.log("Variable Música DENTRO del bloque {...  }: ", musica);
}
console.log("Variable Música DESPUÉS del bloque {...  }: ", musica);

console.log("********* let *********")
// Ejemplo uso de "let" para usar el "scope de bloque"

let musica2 = "Reggae"
console.log("Variable Música ANTES del bloque {...  }: ", musica2);
// esto es un bloque
{
    let musica2 = "Country";
    console.log("Variable Música DENTRO del bloque {...  }: ", musica2);
}
console.log("Variable Música DESPUÉS del bloque {...  }: ", musica2);

/**
 * var genera variables GLOBALES, let genera variables de BLOQUE
 * 
 * contexto global navegador -> window
 * contexto globarl Node.js -> global
 * 
 */