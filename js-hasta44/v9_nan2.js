
/**
 * Null, Undefined,
 * 
 * tanto null ocmo indefined van a representar un valor ausente, es decir una variable
 * que no tiene valro, pero la gran diferencia es que:
 * 
 *  - undefined no ha sido inicalizada
 *  estas son variables declaradas por el usuario, pero no definidas
 *  - indica que no se ha inicializado una variable y que el valor esta ausente.
 * 
 * NaN
 * 
 *  - not a number
 *  operaciones aritmeticas entre distintos tipos de datos que no son number
 *  
 */

let indefinida
console.log(indefinida) // variable declarada como vacia por el programa, no el usuario

let nulo = null // variable intencionalmente declarada como vacia

let notANumberExample = "cadena texto" * 34.1

console.log(`Esto es una String template que muestra un nan: ${notANumberExample}`)