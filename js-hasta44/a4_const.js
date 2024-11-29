
/**
 * CONST
 * 
 * nos va a permitir crear constantes
 * 
 *  -se usa cuando tengamos variables que sepamos que no van a cambiar de valor
 *  durante la ejecucion del programa
 *  -las const deben ser declarada e INICIALIZADAS al mismo tiempo
 *  -una const no funciona de la misma manera para funciones compuestos que para valores
 *  primitivos
 * 
 *  -se pueden modificar y añadir atributos a los objetos y a los arrays en JS
 *  aunque sean tipo const, esto se debe a que no se accede al objeto o array como tal
 *  la referencia a estos permanece igual, por tanto parecen no ser "modificados".
 *  <- se pueden añadir atributos pero sique siendo el "mismo objeto".
 * 
 *  RESUMEN:
 *  var <- olvidate de var
 *  let <- contexto de bloque, se usa cuando la variable cambiara de valor a lo largo de
 *          su vida util.
 *  const <- cuando el valor de la "variable" no va a cambiar a lo largo del ciclo de vida
 *          del programa.
 * 
 * 
 */

let a;
const PI = 3.1416
// const CONSTANT ; <- no se permite no declarar valor
// PI = 3.15 <- no se perrmite reasignar

console.log(PI)

a = "luisillo"

console.log(a)

console.log("tipo de {}: ",typeof {})


// const con tipos compuestos
// primero let luego const

const objeto = {
    name: "Luis",
    age: 28
}

const arrayColors = ["blanco","negro", "azul"]

console.log(objeto)
console.log( arrayColors)

// agregamos un elemento al objeto y a el array
objeto.correo = "jhonmircha@gmail.com"
arrayColors.push("anaranjado")

console.log(objeto)
console.log( arrayColors)

