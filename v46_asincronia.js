/*
Asincronia en JavaScript

- javascript es un lenguaje Single Thread
  es un lenguaje de un solo subproceso o hilo
- solo puede ejecutar una cosa a la vez

Antes de explicar como funciona el modelo de Javascript, es importante
entender algunos conceptos:

- procesamiento single-thread y multi-thread *
- operaciones de CPU y operaciones de I / O **
- concurrencia y paralelismo ***
- operaciones bloqueantes y no bloqueantes ****
- operaciones sincronas y asincrona *****

- la asincronia permite hacer largas solicitudes de red sin bloquear
  el hilo principal, javascript fue diseniado para ser ejecutado
  en navegadores, trabaja con peticiones hacia la red y procesar
  las interacciones con el usuario, todo esto a la vez que 
  trata de mantener una interfaz fluida lo mas posiblemente fluida.

- JavaScript trabaja bajo un MODELO ASINCRONO y NO BLOQUEANTE
  y tiene un loop de eventos implementado de un solo hilo, lo que 
  se conoce como single-thread para operaciones de entrada y salida

- gracias a esto JavaScript es altamente concurrente a pesar 
  de que sea un lenguaje de un solo hilo

- JavaScript tiene diferentes mecanismos para trabajar la asincronia
  el primero son las funciones de tipo CALLBACK 

- JavaScript trabaja bajo una filosofia llamada LIFO (Last In First Out)

*

Operaciones de CPU y operaciones de I / O

- Las operaciones de CPU:
  son las que van a pasar mayor tiempo consumiendo 
  los procesos de nuestra cpu, como un for infinito

- Operaciones de entrada y salida (I / O): 
  son aquellas que van a pasar la mayor parte del tiempo esperando 
  la peticion del recurso que han solicitado
- por recurso, podria ser enviar un formulario a que procese en un
  servidor y que nos envie la notificacion de "se ha procesado tu informacion"
- o como cuando se esta haciendo un pago en linea, estamos esperando
  a que el API cobre y responda los datos
- o como cuando se le solicitan datos a una API y los responde en JSON
  todas estas son operaciones de entrada y salida

- en la mayoria de los casos javascript se va a comportar haciendo operaciones
  de entrada y salida

**

CONCURRENCIA Y PARALELISMO

- Concurrencia:
  Es cuando dos o mas tareas progresan simultaneamente, es decir se estan
  ejecutando al mismo tiempo y ahi van avanzando simultaneamente

- Paralelismo: 
  Es cuando dos o mas tareas se ejecutan al mismo tiempo

- ambas podrian parecer lo mismo, pero la clave esta en la palabra
  PROGRESAR en la concurrencia

--------------------------------
- algo es concurrente cuando diferentes tareas estan progresando
  simultaneamente, al mismo tiempo, pero puede ser que una empezo antes
  o despues.

- concureente !== sincrono, asincrono
  aunque estos pueden cohexistir perfectamente no son lo mismo

- CONCURRENCIA:
  varias tareas van prograsando al mismo tiempo.

- PARALELISMO:
  esas tareas se ejecutan al unisono

------------------------------------
- si se van a ejecutar paralelamente NO significa estamos hablando de 
  multithread, esto es falso

- tambien se podria dar paralelismo en un single thread asincrono

***

OPERACIONES BLOQUEANTES Y NO BLOQUEANTES

- en Javascript podemos tener tanto operaciones sincronas como asincronas
- siempre habra una fase de espera cada que se va ejecutando una operacion
  de nuestro codigo

  OPERACION BLOQUEANTE:
- aquella que NO va a devolver el control a la aplicacion hasta que haya terminado
  toda su tarea

  NO BLOQUEANTE
- las operaciones se ejecutan y devuelven inmediatamente el control al hilo
  principal no importando si han terminado o no la tarea.
- en el momento que una tarea no bloqueante se acabe mandara una notificacion
  y se avisara al hilo principal.
  En caso de haberse completado devolvera los datos solicitados o el mensaje 
  correspondiente y en caso contrario se podria incluso manejar un codigo
  de error

****

OPERACIONES SINCRONAS Y ASINCRONAS

- se refiere a cuando tendra lugar la respuesta

SINCRONO:
- que la respuesta sucede en el presente, osea en el tiempo inmediato

ASINCRONO:
- la respuesta sucede en un futuro
- no va a esperar el resultado, por eso suelta imediatamente el control y se 
lo regresa al hilo principal


- se suele relacionar: BLOQUEANTE - SINCRONO; NO-BLOQUEANTE - ASINCRONO.
- sin embargo, puede existir codigo sincrono bloqueante y no bloqueante.
- el codigo asincrono si sera generalmente no-bloqueante

*****

----------------------

CODIGO SINCRONO BLOQUEANTE

- cada operacion se hace de una vez, bloqueando el flujo del hilo principal
  este hilo queda bloqueado mientras espera la respuesta
  cuando esta se procese pasa a la siguiente operacion

CODIGO ASINCRONO NO BLOQUEANTE

==============================================
- EVENT LOOP.

  digamos que los THREADS o los hilos son las unidades basicas
  de ejecucion de cada proceso que realiza nuestra maquina

  cada proceso desencadena uno o varios hilos (?)

------------------------------------------
- tiene sus ventajas que un lenguaje sea single-thread, por ejemplo
  no es necesario preocuparse por la concurrencia, el recolector de basura

- DESVENtajas, que no se pueden hacer operaciones largas como el 
  ACCESO A LA RED sin que se bloquee el hilo principal
- esa es una de las principales preocupaciones de un lenguaje que trabaja
  en un solo hilo
  -----------------------------------

- las defined function al ser declaradas, ya estan en memoria

SETTIMEOUT
- es un mecanismo de asincronismo
- el setTimeout() usado en el ejemplo de asincronia de este archivo podria
  ejemplificar cuando se una solicituda a una base de datos, o a una 
  API de datos, depiendiendo de la coneccion, del servidor, es lo que 
  va a tardar.
  Bien podria simular una peticion a un servidor si en lugar de
  milisegundos fijos fuese Math.ranom()

*/

/* Codigo Sincrono Bloqueante
- dado que el codigo tiene los mismos nombres de funcion, estamos utilzando
  el paradigma de las Funciones Anonimas Autoejecutables,
  por tanto el codigo escrito en una no afecta el codigo escrito en otra
  dado que son scopes diferentes

- al codigo de abajo se le considera bloqueante porque cada operacion
  (como aparecen en el call stack) bloqea el hilo principal
  del event loop de javascript, el cual es un UNICO HILO, un unico
  subproceso en el cual va procesando toda la peticion

- call stack

============================================

- JavaScript tiene un modelo ASINCRONO y no BLOQUENTE con un 
  LOOP DE EVENTOS (event loop) implementado en UN SOLO HILO (single thread) 
  para la realizacion de operaciones
  de entradas y salidas I / O

- JavaScript tiene diferentes mecanismos para trabajar la asincronia
  como las CALLBACKAS, PROMISSES, ASINCRONOUS FUNCTIONS
  
*/ 

// funcion anonima autoejecutable 
(() => {
  console.log("Codigo Sincrono");
  console.log("Inicio");

  function dos() {
    console.log("Dos");
  }

  function uno() {
    console.log("Uno");
    dos();
    console.log("Tres");
  }

  uno();
  console.log("Fin");
}) ();

console.log("********************************");
/* Codigo Asincrono No Bloqueante

- callback Queue

- en este caso hay truco, aunque el setTimeout() tenga 0
  milisegundos, por el simple hecho de estar en un setTimeout()
  ya hace que se pase a la pila de tareas: callBack Queue

- ejecuta Tres y Fin porque son operaciones SINCRONAS
  despues ejecuta Uno, Dos

- los console.log() tienen mayor preferencia a ejecutarse
  en este proceso LIFO, que el setTimeout()


*/

(() => {

  console.log("Codigo Asincrono");
  console.log("Inicio");

  function dos() {
    setTimeout( function () {
      console.log("Dos");
    }, 1000);
  }

  function uno() {
    setTimeout(() => {
      console.log("Uno");
    }, 2000); // 0
    dos();
    console.log("Tres");
  }

  uno();
  console.log("Fin");

}) ();