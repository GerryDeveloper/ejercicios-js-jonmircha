/**
 * OPERADOR CORTO-CIRCUITO
 * 
 *  - cortocuircioto OR (||)
 *  - cuando el valor de la izquierda de la expresion siempre pueda validar
 *  a true, es el valor que se cargara por defecto
 * 
 *  - cortocircuito AND (&&)
 *  - cuando el valor de la izquierda de la expresion siempre pueda validar
 *  a false, es el valor que se cargara por defecto.
 * 
 * 
 */

// function saludar (nombre = "***Desconocido***") { // usamos parametros por defecto
function saludar (nombre) { // usamos parametros por defecto
  // asi se hacia antes la asignacion de parametros por defecto
  nombre = nombre || ">>Desconocido>>"; // esto era un operador cortocircuito
  console.log(`Hola %s`, nombre);
}

saludar("Itzel"); // ejecutar funcion con parametro
saludar(); // ejecutar funcion sin parametro = undefined

console.group("todos son valores TRUTHY que hacen CORTOCURCUITO.");
console.log("cadena izquierda" || "cadena derecha");
console.log(23 || "cadena derecha");
console.log(true || "cadena derecha");
console.log([] || "cadena derecha");
console.log({} || "cadena derecha");
console.log(-1 || "cadena derecha");
console.groupEnd("no se si esta cadena se ve");

console.group("\nahora valores FALSEY.");
console.log(false || "cadena derecha");
console.log(null || "cadena derecha");
console.log(undefined || "cadena derecha");
console.log("" || "cadena derecha");
console.log(0 || "cadena derecha"); // "valor de la derecha"
console.groupEnd();

console.log("--------------------------");

console.group("CORTOCIRCUITO con &&");
console.log("valor de la  izquierda" && "valor de la derecha");
console.log(false && "valor de la derecha");
console.log(null && "valor de la derecha");
console.log(undefined && "valor de la derecha");
console.log("" && "valor de la derecha");
console.log(-2 && "valor de la derecha");
console.log(0 && "valor de la derecha");
console.groupEnd("no se si esta cadena se ve");

console.group("\nahora valores FALSEY");
console.log("valor de la  izquierda" && "valor de la derecha");
console.log(19 && "valor de la derecha");
console.log(true && "valor de la derecha");
console.log([] && "valor de la derecha");
console.log({} && "valor de la derecha");
console.groupEnd("no se si esta cadena se ve");

