
/**
 * METODOS ESTICOS, GETTERS & SETTERS
 * 
 * 
 *  METODOS ESTATICOS
 *  - un metodo esatico es aquel que se puede ejecutar sin necesidad de instanciar
 *  la clase.
 * 
 *  - para crear un metodo etatico se antepone la palabra "static"
 * 
 * 
 *  METODOS GETTERS && SETTERS
 *  - son metodos especiales que nos van a permitir ESTABLECER y OBTENER el valor
 *  de atributos de nuestra clase.
 * 
 *  - aunque son metodos, los vamos a usar como si fueran atributos de la clase
 *  - se igualan y se usan SIN parentesis ()
 *  
 *  GET 
 *  - para indicar que no es un simple metodo, sino un metodo GET, anteponemos 
 *  la palabra reservada "get"
 * 
 *  
 */

console.log("metodos static, get $ set");

class Animal {
  constructor (nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
  }

  sonar () {
    console.log("funcion sonar en CLASE Animal: hago sonidos porque estoy vivo");
  }
  saludar () {
    console.log(`Clase: hola me llamo ${this.nombre}`);
  }
}

class Perro extends Animal {
  constructor (nombre, genero, tamanio) {
    super(nombre, genero);
    this.tamanio = tamanio;
    this.raza = null;
  }

  // metods
  sonar () {
    console.log(`Soy un PERRO y mi sonido es un ladrido`);
  }

  ladrar () {
    console.log("woof woof !!");
  }

  static queEres () {
    console.log(`Soy un perro, considerados por muchos como los mejores amigos del hombre`);
  }

  // get y set Perro
  get getRaza () {
    return this.raza;
  }
  set setRaza (raza) {
    this.raza = raza;
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
Perro.queEres(); // llamada al metodo sin usar la instancia
console.log(`\n${scooby.getRaza}`);
scooby.setRaza = "French puddle"; // se usan como un maldito atributo
console.log(`${scooby.getRaza}`);