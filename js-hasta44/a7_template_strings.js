
let cadena = `esto es una template String,
y permite declarar una cadena en
multiples
lineas.`;

/**
 * CONCATENAR CADENAS
 */
let name2 = "Luis";
let lastName = "Ramos"
let nameCou = "Esther"

let saludo = "Hola mi nombre es " + name2 + " " + lastName
    + ".";

/**
 * INTERPOLACION DE VARIALES (TEMPLATE STRING)
 * meter dentro de una cadena de texto el valor dinamicamente de una variable 
 * esto usando "Template String" usando la tecla `` se llama "back tick"
 * */ 

let saludo2 = `Hola mi nombre es ${name2} ${lastName}.`

//console.log(cadena)
console.log(saludo)
console.log(saludo2)

let ul2 = `
<ul>
	<li>Primavera</li>
	<li>Verano</li>
	<li>Otoño</li>
	<li>Invierno</li>
</ul>`;

console.log(ul2)
