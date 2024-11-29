/**
 * CLASES Y HERENCIA
 * 
 *  - javascript es un lenguaje orientado a objetos orientado a prototipos
 *  - aunque nosotros gramatical y sintacticamente escribamos nuestras clases
 *  javascript eso lo va a compilar a prototipos
 * 
 *  - las Clases NO RECIVEN PARAMETROS
 *  - para recivir parametros cuando instanciamos un objeto de un tipo de clase
 *  usamos un metodo especial que se llama constructor, ese metodo es el que 
 *  recivira dichas propiedades
 * 
 * 
 *  - al escribir los metodos en formato de clase javascript se encarga 
 *  de sacarlos de la funcion parametrica y agregarlos al prototype, asi
 *  que no es necesario hacerlo nosotros
 */

// funcion constructora de Animal
/**
 * function Animal (nombre, genero) {
  // atributos
  this.nombre = nombre;
  this.genero = genero;

  // metodos
  this.sonar = function () {
    console.log("funcion sonar: hago sonidos y eso...");
  }

  this.saludar = function () {
    console.log(`hola me llamo ${this.nombre}`);
  }
}
 */


// convertimos la funcion constructora de Aniaml en Clase
class Animal {

  // el constructor es un metodo especial que se ejecuta al instanciar metodos de este tipo
  constructor (nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
  }

  // definimos los metodos como definimos las funcones en los objetos literales
  sonar () {
    console.log("funcion sonar en CLASE Animal: hago sonidos porque estoy vivo");
  }
  saludar () {
    console.log(`Clase: hola me llamo ${this.nombre}`);
  }
}

class Perro extends Animal {
  constructor (nombre, genero, tamanio) {
    // super() es un metodo que manda llamar el constructor de la clase padre
    super(nombre, genero);
    this.tamanio = tamanio;
  }

  // metods
  sonar () {
    console.log(`Soy un PERRO y mi sonido es un ladrido`);
  }

  ladrar () {
    console.log("woof woof !!");
  }
}

// instancias
const mimi = new Animal ("Mimi", "hembra");
const scooby = new Perro ("Scooby", "macho", "gigante");

// imprimimos
console.log(mimi);
mimi.saludar();
mimi.sonar();

console.log("\n");
console.log(scooby);
scooby.saludar();
scooby.sonar();
