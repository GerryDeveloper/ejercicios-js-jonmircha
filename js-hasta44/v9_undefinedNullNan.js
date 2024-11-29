

console.log("hola a")

// "use strict"; <- activates sstrict mode, do not use if dont know why

x = 5; // <- this creates a global (window in js, global in Node.js) variable


//console.log(window)
console.log("hola mundo desde javascript")

console.log("asdfsadfasdf")

/**
 * UNDEFINED
 * 
 *  -tanto NULL como undefined van a representar un valor ausente
 *  pero la gran diferencia es que mientras UNDEFINED es una variable 
 *  que no ha sido inicializada.
 * 
 *  -una variable que no tiene valor y que aparte no se le asigno ninguno
 *  cuando fue creada
 * 
 *  -undefined es asignado por javascript cuando detecta que una variable 
 *  no tiene un valor
 * 
 * NULL
 * 
 *  -igualmente indica que la variable está vacia, pero digamos que es un 
 *  "valorr" asignado por el programador.
 * 
 * NaN
 * 
 *  -sucede cuando queremos hacer operaciones aritmeticas entre tipos de datos
 *  que no son numéricos
 * 
 *  -Not a Number
 *  
 *  -cuando hagamos operaciones y uno de los datos no sea un numero
 */

let indefinida;

console.log(typeof indefinida) // undefined
console.log( indefinida)

let nulo = null
console.log(nulo) // intencionalmente el programador ha asignado null

let noEsUnNumero = "hola" * 3.7
console.log(noEsUnNumero)