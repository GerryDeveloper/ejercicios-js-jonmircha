/**
 * ALERT, CONFIRM & PROMPT
 * 
 *  - estos objetos cuelgan del objeto padre "window" en los navegadores
 *  - estos metodos no existen en Noje.js porque ahi no existe "window"
 *  - aunque no estemos viendo nada del BroserObjectModel, o del 
 *  o del DocumentObjectModel que ya es mas interaccion con HTML, es 
 *  considerado importante conocer estos 3 metodos de la ventana "window"
 * 
 *  - dependiendo lo que el usuario pulse, validan a verdadero o falso
 * 
 *  - prompt es como un imput de formulario dentro de un alert
 * 
 *  - no es necesario poner window en ninguno de los tres metodos
 * 
    window.alert("Hola esto es una alerta!");
    window.confirm("Hola esto es una confirmacion");
    window.prompt("Hola esto es un prompt y le permite al usuario ingresar un valor");
 *  
    - una alerta simepre va a dar undefined

    - alert: solo sirve para mandar informacion al usuario, es muy intrusiva
    - confirmacion: aceptar = true, cancelar = false.
    - prompt: ya permite interacion con usuario
    texto + aceptar = almacena la cadena de texto, sino se pone nada almacena
    cadena vacia.
    texto/sin texto + cancelar = null
 */

console.log(window);

// alert, confirm y prompt ya permiten una interaccion basica con el usiario

// alert("Hola esto es una alerta!");
// confirm("Hola esto es una confirmacion");
// prompt("Hola esto es un prompt y le permite al usuario ingresar un valor");

let alerta = alert("esto es una alerta."),
confirmacion = confirm("esto es una confirmacion"),
aviso = prompt("esto es un prompt");

console.log(alerta);
console.log(confirmacion);
console.log(aviso);