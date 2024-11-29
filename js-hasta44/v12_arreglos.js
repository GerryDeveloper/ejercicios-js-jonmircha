
/**

Arreglos

	- mientras los arreglos no dejen de ser eso, arreglos, podemos declararlos como constantes
	aunque tenga cambios en sus posiciones sigue siendo un arreglo, por tanto se le considera una 
	"cosntante".
	- se puede declarar con "let" de todas formas.
	- un arreglo es una coleecion de elementos, estos elementos pueden ser de diferentes tipos

	-los arreglos son OBJETOS COMPUESTOS, no se accede al valor directamente, sino a la referencia
	del valor

	- Array <- es un prototipo en JavaScript y con .of(array declaration) accedemos a el.
	- Array es el tipo de dato al que pertenecen los arreglos en javascript
	- es digamos su "constructor"
*/

[] // <- esto ya es un objeto en javascript

const a = [];
const b = [1,true,"Hola",["A","B","C"]]
const c = [1,true,"Hola",["A","B","C",[1,2,3]]]
console.log(a)
console.log(b)
console.log(b.length)
console.log(b[2])
console.log(b[3])
console.log(`Del arreglo:\n[${b}]\nimprimimos solo el primer elemento: ${b[3][0]}`)
console.log(`\n\nDel arreglo:\n[${c}]\nimprimimos solo el primer elemento\ndel arreglo contenido en ${c[3]}:
 ${c[3][3][0] }`)
console.log(c)

// nuevas formas de crear eventos ECMAScript 2015/6
const d = Array.of("X","Y","Z",9,8,7)
console.log(d)

// arreglo con el mismo valor
const mismoValorArray = Array(100).fill(false);
console.log("\n",mismoValorArray);

// forma que ya nadie utiliza para crear un array, usando "new" y su constructor
const e = new Array();
console.log(e)

const f = new Array(1,2,3,true,false);
console.log(f);

// metodos de arreglos
const colores = ["Rojo","Verde","Azul"];
console.log(colores)

colores.push("Negro")
console.log(colores)

colores.pop()
console.log(colores)

// investigar metodos orientados a escribir nuestro codigo en forma 
// de programacion funcional

// metodo nos permite ejecutar una funcion por cada uno de los elementos
// que tenga nuestro arreglo

// colores.forEach(function () {} );
colores.forEach(function (el, index) { // recive los parametros VALOR, INDICE
	console.log(`<li id="${index}">${el}</li>`);
} );
