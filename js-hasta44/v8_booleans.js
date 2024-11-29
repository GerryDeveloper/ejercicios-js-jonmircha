
/**
 * BOOLEANOS
 * 	-true
 * 	-false
 * 
 * TRUTHY & FALSEY
 * 
 */


let verdadero = true
let falso = false

console.log(verdadero, falso)
console.log(typeof verdadero, typeof falso)

// creando booelanos a partir del constructor booelan

let v = Boolean(true);
let f = Boolean(false);

console.log(v, f);

// valores que TIENDEN a boolean
// Falsey values

console.log("Valores FALSEY en javascript:") // falsos
console.log(Boolean(0))
console.log(Boolean(-7))
console.log(Boolean(""))
console.log(Boolean(' '))
console.log(Boolean("*"))
console.log(`Valor objeto vacio {}: ${Boolean({})}`)
console.log("Valores TRUTHY en javascript:") // verdaderos
console.log(Boolean(0))

