/* 
tareas asincrona
- que no esperan resolverse en el presente inmediato, sino a futuro

no bloqueantes
- en cuanto se ejecutan van a regresar el control al hilo principal 
  del programa y en el momento que la respuesta este lista
  enviaran una notificaicon y se ejecutara el resultado

JavaScript tiene diferentes mecanismos para trabajar la asincronia

CALLBACKS
- las callbacks son funciones que se van a ejecutar despues de que 
  otra lo haga
- es el mecanismo por escelencia que tiene js para invocar incluso
  algunas de sus funciones
- las FUNCIONES se les considera ciudadanos de primer orden
- con las FUNCIONES podemos hacer practicamente todo
- SIMULAR la orientacion a objetos a traves de FUNCIONES CONSTRUCTORAS
- retornar una funcion como el valor de retorno de otra
- pasar como parametros funciones
- crear funciones autoinvocadas anonimas

- las callback son un tipo de funcion
- el CALLBACK es el primer mecanismo que tiene javascript para trabjar
  con la ASINCRONIA 

- hay un detalle, si llegas a tener varias callbacks anidadas esto te
  va a generar el llamado CALLBACK HELL, que es esta anidacion 
  a la hora que se va formando el codigo

- visita la pagina callbackhell.com

Pasos para tratar las  desventajas de los callbacks
- modularizar el codigo
- uso de prommisses
- uso de generators
- uso de funciones asincronas

  ==================================
RECURSIVIDAD
- un concepto mas de la programacion funcional, pero recordemos que 
  javascript es mulitparadigma

- vamos a simular la ASINCRONIA con setTimeout()

====================================
- cuando estas concatenando varias peticiones asincronas, probalemente
  las callbacks NO son tu mejor opcionl

DESVENTAJAS
- el manejo de errores se hace por cada funcion, por cada iteraccion

SOLUCION
- una posible es modularizar el codigo y usar PROMISSES
- GENERATORS
- ASINCRONOUS FUNCTIONS

--------------------------------------------
*/

// codigo sincrono
// (() => {
//   console.log("Codigo Sincrono");
//   console.log("Inicio");

//   function dos() {
//     console.log("Dos");
//   }

//   function uno() {
//     console.log("Uno");
//     dos();
//     console.log("Tres");
//   }

//   uno();
//   console.log("Fin");
// }) ();

// console.log("********************************");

// // codigo asincrono
// (() => {

//   console.log("Codigo Asincrono");
//   console.log("Inicio");

//   function dos() {
//     setTimeout( function () {
//       console.log("Dos");
//     }, 1000);
//   }

//   function uno() {
//     setTimeout(() => {
//       console.log("Uno");
//     }, 2000); // 0
//     dos();
//     console.log("Tres");
//   }

//   uno();
//   console.log("Fin");

// }) ();
// ===================================

function cuadradoCallback (value, callback) { // recive un valor y una funcion
  setTimeout(() => {
    callback(value, value * value);
  }, 0 || Math.random() * 1000);
}

cuadradoCallback(0, (value, resultado) => {
  console.log("Inicia callback");
  console.log(`Callback: ${value} ${resultado}`);
  cuadradoCallback(1, (value, resultado) => {
    // console.log("Inicia callback");
    console.log(`Callback: ${value} ${resultado}`);
    cuadradoCallback(2, (value, resultado) => {
      // console.log("Inicia callback");
      console.log(`Callback: ${value} ${resultado}`);
      cuadradoCallback(3, (value, resultado) => {
        // console.log("Inicia callback");
        console.log(`Callback: ${value} ${resultado}`);
        cuadradoCallback(4, (value, resultado) => {
          console.log(`Callback: ${value} ${resultado}`);
          cuadradoCallback(5, (value, resultado) => {
            console.log(`Callback: ${value} ${resultado}`);
            console.log("Fin Callback");
            console.log("Callback Hell! 😈");
            console.log("https://callbackhell.com/");
          });
        });
      });
    });
  });
});