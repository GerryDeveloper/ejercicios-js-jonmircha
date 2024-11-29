/* 

porfin puedo puto escribir los simbolos < & > carajooo 

 Ciclos:

  vamos a ver las otras estructuras de control para conrolar el flujo de nuestra aplicacion
  -estos son los "ciclos" o bucles.

  -javascript es cada vez mas "declarativo".
*/

exampleFor1();

function exampleFor1() {
  for (let i = 0; i < 10; i ++) {
    console.log("Hola mundo desde JavaScript. y nuevo teclado, numero: ", i);
  }
}

let contador = 0;
function whileStructure() {
  
  while (contador < 10) {
    console.log(`Usando "while": ${contador}`);
    contador++;
  }
}

function doWhileStructure() {
  
  do {
    console.log(`usando "do-while": ${contador}`);
    contador++;
  }while (contador < 10);
}

function forSentence() {
  let stopCondition = 10;
  for (let i = 0; i < stopCondition; i++) { // declaration, stop condition, incremente/decrement
    console.log("usando un ciclo for: ", i);
  }
}

function forSentence2() {

  const array = []; 
  let startValue = 10;
  let i = 0;
  for (startValue; startValue < 100; startValue+=10, i++){
    array[i] = startValue;
    //i++;
  }
  
  for (let i = 0; i < array.length; i++) {
    console.log(`array[${i}]: ${array[i]}`);
  }

}

function forIn() {
  const johnObject = {
    nombre: "jhon",
    apellido: "edad",
    edad: 35
  }

  // se le llama for in por el "in" duh
  for (const key in johnObject) { // mostly for objects, access to the properties of a primitive object
    // metodo for-in permite recorrer propiedades de un objeto
    //console.log(key);
    //console.log(`key: ${key}, value: ${johnObject.key}`); 
    // this result in "undefined", pont notation not gonna work
    console.log(`key: ${key}, value: ${johnObject[key]}`);
  }
}

function forOfArray() { 
  // mostrly for arrays, to get to any of the elements of any array in javascript that is iterable
  const numbers = [100,200,300,400,500];
  for (const element of numbers) {
    console.log(element);
  }
}

function forOfString() {

  let cadena = "esto es una cadena";

  for (const element of cadena) {
    console.log(`element: ${element} `);
  }
}

whileStructure();
contador = 0;
doWhileStructure();
forSentence();
console.log();
forSentence2();
console.log();
forIn();
console.log()
forOfArray();
console.log();
forOfString();





