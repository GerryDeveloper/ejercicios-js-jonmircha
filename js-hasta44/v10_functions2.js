

/*
 * Funciones
 * 
 *  - un bloque de codigo autocontenido 
 *  - independiente al scope o al ambito global
 *  - se define una vez y se puede ejecutar en cualquier momento
 *  - puede o no recivir parametros
 *  - puede devolver o no valores
 *  - son un OBJETO 
 *  - se les considera "ciudadanos de primera clase"
 *  las funciones son muy poderosas en javascript
 *  ->las puedes asignar como valor
 *  ->puedes regresar la ejecucion de una funcion adicional
 *  ->se pueden pasar como argumentos
 *  ->en ECMA Stript 6 se les agrego bastante nueva funcionalidad
 *  como las arrow function => ()
 * 
 * 	- las funciones en JavaScript sufren un Hoisting, son elevadas a la parte superior
 **/

// (1).- Funcion Declarada

function estoEsFuncionDeclarada() {
    console.log("Uno 1");
    console.log("Dos 2");
    console.log("Tres 3");
}

// invocacion de funciones
/*estoEsFuncionDeclarada();
estoEsFuncionDeclarada();
estoEsFuncionDeclarada();
estoEsFuncionDeclarada(); */

function funcionDevuelveValores() {
	console.log("Uno 1");
	return 19
	console.log("Dos 2");
	console.log("Tres 3");
	return "La funcion ha retornado una cadena de texto";
}

// let returnedValue = funcionDevuelveValores()
// console.log(`Esto devuelve la funcion: ${returnedValue}`)

function funcionReciveValores(nombre, edad) {
	console.log(`Hola mi nombre es: ${nombre} y tengo ${edad} años`)
}
function funcionValoresPorDefecto(nombre = "Jhon Doe", edad = 0) {
	console.log(`(valorespor defecto) Hola mi nombre es: ${nombre} y tengo ${edad} años`)
}

funcionReciveValores("Luisillo Carajo", 69)
funcionReciveValores() // la funcion recive parametros, pero no los mandamos = undefined
funcionValoresPorDefecto()
funcionValoresPorDefecto("Julian", 29)

// let varBeforeFunDefinition = funcionDeclarada
// console.log(varBeforeFunDefinition)

// funciones Declaradas VS funciones Expresadas
funcionDeclarada() // It does works!, may be because of javascript inline compilation/interpreter??

function funcionDeclarada() {
	console.log("<<<Esto es una FUNCION DECLARADA, puede invocarse en cualquier parte de" +
		"nuestro codigo, incluso antes de que la funcion sea declarada")
}

funcionDeclarada()

// (2).- Funciones como EXPRESIONES

/* 	- crear una funcion y asignarsela dinamicamente a una variable	
	- serecomienda const para estas "variables" pues como se les asigna una 
	funcion, su valor tecnicamente no va a cambiar.
	- se recomienda usar const con funciones expresadas.
*/

// funcionExpresada() 
// -> ERROR: v10_functions2.js:81 Uncaught ReferenceError: Cannot access 'funcionExpresada' before initialization
// at v10_functions2.js:81:1


// funcion ANÓNIMA -> es decir una funcion que no tiene nombre (en este caso el nombre lo da la variable)
const funcionExpresada = function () {
	console.log(">>>Esto es una FUNCION EXPRESADA, es decir," +
		"una funcion que se le ha asignado como valor a una variable." +
		"\n\nSi invocamos esta funcion antes de su definicion JS nos dirá..." +
		"Uncaught ReferenceError: Cannot access 'funcionExpresada' before initialization")
}

funcionExpresada()
