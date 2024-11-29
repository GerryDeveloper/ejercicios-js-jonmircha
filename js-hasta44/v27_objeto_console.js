/**
 *  OBJETO CONSOLE
 * 
 *  - separados por comas puede recivir cualquier parametro opcional
 *  - console.log(nombre, apellido, edad, ...);
 * 
 *  - console.log() admite el uso de comodines como C++ y PHP: %s, %d
 * 
 *  - window: es el objeto global en JavaScript en los navegadores
 *  - document: es la representacion del objeto html a travez de JavaScript
 * 
 *  - console.dir(document) devuelve todas las propiedades , metodos
 *  y constructores del objeto document
 * 
 *  - cuando querramos representar un elemento como si fuera un OBJETO
 *  de JavaScript para poder desglozar en la consola todos sus metodos 
 *  y atributos en lugar de usar log, es mejor usar "dir".
 *  
 *  - el objeto window ya es un objeto
 * 
 *  - en la clase de cadens nos dice como ir a la documentacion de Mozilla
 * 
 *  - podemos hacer GRUPOS EN LA CONSOLA
 * 
 *  - hay librerias para hacer testing o pruebase en nuestro codigo
 *  es util para hacer pruebas unitarias
 */

console.log(console);
console.error("Esto es un error");
console.warn("Esto es un aviso");
console.info("Esto es un mensaje informativo");
console.log("Log es un registro de lo que ha pasado en nuestra aplciacion");

let nombre = "jhon";
let apellido = "MirCha";
let edad = 35;

console.log(nombre);
console.log(apellido);
console.log(edad);
console.log(nombre, apellido, edad);
console.log(`Hola mi nombre es ${nombre} ${apellido} y tengo ${edad} anios`);
console.log(`Hola mi nombre es %s %s y tengo %d anios`, nombre, apellido, edad);
console.clear();
console.log(window);
console.dir(window);
console.log(document);
console.dir(document); 
// obtentemos el document (DOM) como un objeto que yo puedo parsear o analizar para saber caracteristicas
console.clear();

// grupos en la consola
console.group(`Los cursos de @jhonMirCha en YouTube`);
console.log("curso de JavaScript");
console.log("curso de Node.js");
console.log("curso de PWAs");
console.log("Curso de FlexBox");
console.log("Curso de Design and Web Programming");
console.groupEnd();
console.log("console.log() despues de console.groupEnd()");

// trying groupCollapsed()
console.groupCollapsed(`Los cursos de @jhonMirCha en YouTube`);
console.log("curso de JavaScript");
console.log("curso de Node.js");
console.log("curso de PWAs");
console.log("Curso de FlexBox");
console.log("Curso de Design and Web Programming");
console.groupEnd();
console.log("console.log() despues de console.groupEnd() -> usando groupCollapsed()");

console.clear();

// representation using console.table
console.log(console);
console.table(Object.entries(console).sort()); // estos son todos los metodos que tiene la consola
console.clear();


const numbers = [1,2,3,4,5],
vocals = ["a","e","i","o","u"];

// camos a acomodar esos dos arreglos en una tabla
console.table(Object.entries(numbers));
console.table(Object.entries(vocals));
// salen con una columna mas, no se porque
console.clear();

console.table(vocals, numbers); // solo aparecera uno de los dos, para ejecutar otro hace falta otro console.table
console.table(numbers);

// ----------------------------------
// ejemplo usando objetos en table
console.clear();
const students = [
  { name: "John", age: 21 },
  { name: "Jane", age: 22 },
  { name: "Jim", age: 20 }
];

console.table(students); // Muestra una tabla con el arreglo de objetos

// para combinar las tablas uando una transformacion
const combined = numbers.map((num, index) => ({
  number: num,
  vocal: vocals[index]
}));

console.table(combined); // Muestra una tabla combinada
console.clear();
// ---------------------------------

const perro = {
  nombre: "Boni",
  raza: "Boxer",
  color: "cafe"
}

console.table(perro);
console.clear();

// calcular el tiempo para saber cuanto tarda una PETICION
console.time("time stamp >>");
const arr = Array(1_000_000);

for (let i =0; i < arr.length; i++) {
  arr[i] = i;
}

console.timeEnd("time stamp >>"); // el mensaje dentro debe ser exactamente igual, un "alias"
// vamos a ver si lleno el arreglo
// console.log(arr);
console.clear();


// console.count*()
for (let i = 0; i <= 100; i++) {
  console.count("codigo for"); // te dice cada vez que se ejecuta un for
  console.log(i);
}
console.clear();

// vamos a esperar que x siempre sea menor a y
// let x = 1, 
let x = 4, 
y = 2,
pruebaXY = "Se espera que X siempre sea menor a Y";

console.assert(x < y, {x,y,pruebaXY}); // siempre al final la variable con el mensaje de la prueba