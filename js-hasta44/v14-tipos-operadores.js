/**
 * Operadores
 * 
 * - ARITMETICOS: +, -, *, /, %
 *  
 * - RELACIONALES: <, >, <=, >=, ==, ===, !=, !==
 * 
 * - OPERADORES: =, ==, ===
 * 
 *  = <- asingación de variable
 *  == <- comparación de valores
 *  === <- comparacion de tipo de dato Y DE VALOR!
 * 
 * - se recomienda usar siempre la compraración ===
 *  para evitar caer en tipos de datos truthy o falsey.
 * 
 * - OPERADORES DE INCREMENTO Y DECREMENTO
 * 
 *  +=, -=, *=, /=...
 *  
 * - OPERADORE UNARIO
 * 
 *  i++
 *  i--
 * 
 * - OPERADORES LÓGICOS
 * 
 * - ! <- Not: negacioin, inversion de valor.
 * - || <- Or: almenos una condicion debe cumplirse para retornar "true"
 * - && <- And: ambas condiciones DEBEN cumplirse para retornar "true"
 * 
 */

let a = 5 + (5 - 10) * 3;
let modulo = 5 % 2;
console.log(a)
console.log(`Modulo de dividir 5 % 2: ${modulo}`);


// Operadores relacionales

console.log(8 > 9);
console.log(8 < 9);
console.log(8 >= 9);
console.log(8 <= 9);
console.log( 7 < 7);
console.log( 7 <= 7);

// Operadores: =, ==, ===

console.log("operadores =, ==, ===");
console.log(7 == 7);
console.log("7" == 7);
console.log(0 == false); // este es de los tipos de valores truthy o falsey

console.log("operador: ===");
console.log(7 === 7);
console.log("7" === 7);
console.log(0 === false);

// operadores de INCREMENTO & DECREMENTO
console.log("\n");

let i = 1;

//i = i + 2;
//i += 3;
//i -= 3;
//i *= 3;

console.log(i)

// operador UNARIO
console.log("\n");

let j = 2;
j++;
j--;
++j;
--j;
console.log(`valor de la variable "j": ${j}`);
j = 1;
console.log(`variable j = 1, con ++j: ${++j}`);
j = 1;
console.log(`variable j = 1, con j++: ${j++}`);
console.log(`valor de la variable j sin operaciones extra: ${j}`);

console.log("\n");
j = 2;
console.log(j++);
console.log(++j);

// operadores LÓGICOS
console.log("\n");

console.log(!true);
console.log(!false);
console.log(9 === 9 || "9" === 9); // almenos se cumple una = true
console.log(9 === 9 && "9" === 9); 
console.log(9 === 9 && "9" === "9"); 
