

/** Funcion constructora
 * 
 *  - buscar como crear una funcion constructora en JavaScript que genere prototipos
 *  - herencia en javascript se da a travez de una "cadena" prototipica
 *  - Animal su prototipo es un objeto PRIMITIVO de javascript y ahi es donde 
 *  se le asignaban los metodos sonar() y saludar() par evitar esta sobreescritura
 *  cada vez que generabamos distintas instancias
 *  
 *  - la propiedad super esta invocando las caracteristicas a travez de la herencia
 *  protitipica de su funcion constructora padre que es Animal y esta diciendo
 *  que necesita "nombre" & "genero" que son sus atributos
 * 
 *  - JavaScript es un lenguaje que el paradigma de la programacion orientada a objetos
 *  la hace a partir de los prototipos
 * 
 *  - a partir del anio 2015, ES6 le dio a los programadores una azucar sintactica, 
 *  esto significa una manera mas facil de escribir cosas que aveces son un poco
 *  confusas, esto dado a que javascript funciona con prototipos.
 *  
 * 
 */
console.log("Herencia Prototipica en JavaScript\n");

// funcion cosntructora

function Animal (nombre, genero) {
  this.nombre = nombre;
  this.genero = genero;
}

Animal.prototype.sonar = function () {
    console.log("Animal hace sonidos");
  }

Animal.prototype.saludar = function () {
    console.log(`Hola me llamo ${this.nombre}`);
  }

// Herencia prototipica
// creamos nuestra funcion constructora Perro ()
function Perro (nombre, genero, tamanio) { // recive los mismos atributos que el padre
   // en lugar de usar super() vamos acrear una variable que se cuelga del this de la funcion
   this.super = Animal;  // el elemento padre de Perro sera Aniaml
   this.super(nombre, genero);
   this.tamanio = tamanio;
}

// Perro esta heredando de Animal
Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;

// sobreescritura de metodos del prototipo padre en el hijo
Perro.prototype.sonar = function () {
  console.log("Soy un perro y mi sonido es un ladrido");
}

Perro.prototype.ladrar = function () {
  console.log("woof woof");
}

const snoopy = new  Perro ("Snoopy", "macho", "mediano"),
  lolaBunny = new Animal ("Lola Bunny", "hembra");


console.log("\n\n");
console.log(snoopy);
console.log(lolaBunny);

snoopy.sonar();
snoopy.saludar();
snoopy.ladrar();

console.log("\n");

lolaBunny.sonar();
lolaBunny.saludar();

