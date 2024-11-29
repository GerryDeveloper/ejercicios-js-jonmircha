

/**
 *  OBJETOS LITERALES
 * 
 *  -objetos que literalmente definimos en una variable y los utilziamos
 *  -es una forma de escribir atributos y metodos
 *  -incluso de asignarlos
 */

let nombre = "Itzel", edad = 21;

const perro = {
  nombre: nombre,
  edad: edad,
  ladrar: function() {
    console.log("woof woof");
  }
}

//console.log(perro, perro.ladrar());
console.log(perro);
perro.ladrar();

// con las NUEVAS CARACTERISTICAS DE LOS OBJETOS LITERALES

const dog = {
  nombre,
  edad,
  // agregando propeidades no inicilizadas previamente
  raza: "French Bulldog",
  ladrar() {
    console.log("bulldog: woof woof");
  }
}

console.log(dog);
dog.ladrar();