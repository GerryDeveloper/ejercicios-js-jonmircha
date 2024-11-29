/**
 * PROMESAS
 * 
 * - trabajan con dos recursos principales
 * - la promesa la tenemos que ver como un if-else, si la promesa se cumple
 *  nos ejecutaria RESOLVE, si falla ejecuta el segundo metodo
 *  el REJECT.
 * - una PROMESA RECIVE una FUNCION con estos dos valores: RESOLVE, REJECT
 * - puede ser una FUNCIONA DECLARADA o una ARROW FUNCTION
 * 
 * - cuando tienes una funcion que devuelve una promesa tienes dos metodos
 *  para ir trabajando la asincronia
 * 
 * - las PROMESAS nos convienen cuando tenemos una concatenacion de varios
 *  procesos asincronos
 * 
 * - tanto los metodos result() y reject() de las Promise son METODOS ESTATICOS
 * 
 * VENTAJAS
 * - codigo mejor ordenado, mejor manejo de errores
 * 
 * ===================================
 * -- metodo then(), indica el siguiente bloque a ejecutar una vez que se cumpla 
 *  la funcion inicial
 * - poemos tener tantos metodos then como nosotros lo necesitemos
 * 
 * -- metodo catch(), esta al final de todo, va a capturar el error resultante del
 *  REJECT
 * 
 * 
 * RESOLVE
 * - es como el return positivo de la promesa, en caso que se cumpla
 * - el then va a recivir el resolve
 * 
 * REJECT
 * - es el return negativo
 * 
 */

function cuadradoPromisse (value) {
  if ( typeof value !== "number") 
    return Promise.reject(`Error, el valor ${value} ingresado no es un numero`);
  
  return new Promise((resolve, reject) => {
    setTimeout(() => { 
      resolve({
        value, // value: value,
        result: value * value
      })
    // }, 0 | Math.random() * 2000);
    }, Math.random() * 2000);
  });
  
} 

// cuadradoPromisse("0")
cuadradoPromisse(0)
.then( obj => {
  // console.log(obj);
  console.log("Inicio Promise");
  console.log(`Promise: ${obj.value}, ${obj.result}`);
  return cuadradoPromisse(1);
})
.then( obj => {
  console.log(`Promise: ${obj.value}, ${obj.result}`);
  return cuadradoPromisse(2);
})
.then( obj => {
  console.log(`Promise: ${obj.value}, ${obj.result}`);
  return cuadradoPromisse("3");
})
.then( obj => {
  console.log(`Promise: ${obj.value}, ${obj.result}`);
  return cuadradoPromisse(4);
})
.then( obj => {
  console.log(`Promise: ${obj.value}, ${obj.result}`);
  return cuadradoPromisse(5);
})
.then( obj => {
  // aqui no va return porque termina, este manipula el resulado de 5
  console.log(`Promise: ${obj.value}, ${obj.result}`);
  console.log("Fin Promise");
})
// en el catch podemos recivir un error
.catch(err => {
  console.error(err);
});