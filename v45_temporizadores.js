
/*
Temporizadores en JavaScript

  - posibilidades de ejecutar ciertas acciones despues de cierto tiempo en JavaScript

setTimeOut( () => {} , timeout );

  - el setTimeOut recive una callback, recive una FUNCION que va a ejecutar
    y recive un TIEMPO expresado en milisegundos.
  - todo el codigo qe ponda dentro del setTimeOut es lo que se va a ejecutar

  - se ejecuta despues de cierto tiempo una sola vez

setInterval( () => {} , timeout );

  - recive un callback/funcion y un intervalo de tiempo

*/

// console.log("Inicio");
// let timeout = 50000; // expresado en milisegundos

// setTimeout( () => {
//   console.log(`Ejecutando un setTimeOut(), esto se ejecuta una sola vez`);
// }, timeout); // se ejecuta despues del tiempo dado

// setInterval (() => {
//   console.log(`Ejecutando un setInterval(), esto se ejecuta indefinidamente cada cierto
//     intervalo de tiempo`);
// }, 20000);

// setInterval( () => {
//   console.log(new Date().toLocaleTimeString() );
// }, 1000);
//------------------------------------
// let temporizador = setTimeout ( () => {
//   console.log(new Date().toLocaleDateString());
// }, 5000);

// clearTimeout(temporizador);

// console.log("Despues del clearTimeout");

//--------------------------------
let temporizador = setInterval ( () => {
  console.log(new Date().toLocaleDateString());
}, 1000);

let tempStop = setTimeout( () => {
  clearInterval(temporizador);
},5000)

// clearTimeout(temporizador);
// clearInterval(temporizador);

// console.log("Despues del clearTimeout");
console.log("Despues del clearInterval");