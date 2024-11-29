
/** JAVACSRIPT
 *  
 *  -es un lenguaje multiparadigma
 *  -la orientacion a objetos en JavaScript es muy diferente a otros lenguajes
 *  como C o Java
 *  -a partir del estandar ES6 (2015) ya tenemos clases
 *  - azucar sintactico => para hacernos mas facil la escritura de prototipos, porporcionada
 *  por Ecma Script 6.
 *  - aunque ya tenemos clases desde el anio 2015 es solo una forma para SIMPLIFICARNOS
 *  la escritura de los PROTOTIPOS.
 *  - anque ya tenemos Clases en javascript, el compilador se encarga de transformar
 *  todo este codigo en funciones prototipicas
 * 
 *  - JavaScript es un lenguaje orientado a objetos pero basado en prototipos
 *  - el compilador transforma neustra clase en una fucion prototipal
 * 
 * ----------
 * FUNCION CONSTRUCTORA
 * 
 *  - function Function () {}
 *  - y las instancias es usando la palabra reservada NEW
 *  - const instancia = new FunctionConstructor () {}
 * 
 *  - asignar los metodos al prototipo y no a la funcion constructora
 * 
 *  - lo ideal es que las funciones constructoras solo tengan los atributos
 *  - los metodos los agregamos a los prototipos
 * 
 * ----------
 * PROTOTIPOS
 * 
 *  - es un mecanismo por el cual un objeto puede heredar de un objeto padre, atributos y metodos (funciones)
 *  - la HERENCIA en javascript se da mediante la cadena de pototipos, es decir, hace una copia del 
 *  prototipo en el cual esta basado.
 *  
 *  - el prototipo mas primitivo que tiene JavaScript es el prototipo Object
 * 
 *  - llevan una funcion constructora, se declara una vez y se usa cuando se requiera
 * 
 *  - funcion constructora, a partir de ella voy a generar nuevas instancias del mismo tipo
 *  - una funcion en si genera un prototipo vacio
 *  - se escribe como una clase.
 * 
 *  - no se pueden usar arrow functions porque detectan el this del objeto donde se encuentran, no dentro de donde
 *  se encuentran
 * 
 *  - la nomenclatura de objetos literales ( atributoNombre: "valor") no aplica para funciones constructoras
 * 
 * ---------
 * POO
 * 
 *  - Clases
 *  - modelo a seguir para poder generar instancias
 * 
 *  - Objetos:
 *  - es una instancia de una clase
 *  - atributos => es una caracteristica o propiedad del objeto (son variables dentro de un objeto)
 *  - metodos => son las acciones que un objeto puede realizar (son funciones dentro de un objeto)
 * 
 *  - NEW nos va a permitir crear una neva instancia del tipo que le especifiquemos
 * 
 */

/*
const animal = {
  nombre: "Snoopy",
  sonar () {
    console.log("hago sonidos porque estoy vivo"); // wtf mircha?
  }
}

const animal2 = {
  nombre: "Lola Bunny",
  sonar () {
    console.log("este es el objeto animal2"); // wtf mircha?
  }
  //metodo2: function () {}
}

console.log(animal);
console.log(animal2);
animal.sonar(); */

// necesitamos un prototipo para genear animales, no es practico crear uno a uno

/**
 * function Animal (nombre, genero) {
  // atributos
  this.nombre = nombre; // atributos de mi funcion constructora
  this.genero = genero;

  // metodos
  this.sonar = function () {
    console.log("Animal hace sonidos");
  }

  this.saludar = function () {
    console.log(`Hola me llamo ${this.nombre}`);
  }
}
 */
function Animal (nombre, genero) {
  // solo la funcion tiene la asignacion de los atributos
  this.nombre = nombre; // atributos de mi funcion constructora
  this.genero = genero;
}

// Metodos agregados al prototipo Animal
Animal.prototype.sonar = function () {
    console.log("Animal hace sonidos");
  }

Animal.prototype.saludar = function () {
    console.log(`Hola me llamo ${this.nombre}`);
  }

// como podria volver a generar esas instancias de snoopy y tal no de la instancia
const snoopy = new  Animal ("Snoopy", "macho"),
  lolaBunny = new Animal ("Lola Bunny", "hembra");

console.log(snoopy);
console.log(lolaBunny);

snoopy.sonar();
snoopy.saludar();

lolaBunny.sonar();
lolaBunny.saludar();