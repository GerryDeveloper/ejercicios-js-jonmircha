
/**
 * OBJETOS
 * 
 * - se dice que en javascript "TODO" es un objeto
 * - si podemos usar "const" para definir objetos.
 * - es recomendable usar "const" cuando se trabajan con
 *  objetos.
 * - al declarar el objeto con "const" evito que otro objeto
 *  ocupe la referencia en memoria que tiene mi objeto.
 * 
 * - un objeto puede tener como valor de una llave 
 *  cualquier tipo de valor.
 *  key: "any value, even a funciton()";
 * - un objeto dentro de si puede tener tambien un objeto
 * 
 * - dentro de un OBJETO a las variables se les va a llamar
 *  ATRIBUTOS/propiedades.
 * - a las FUNCIONES se les llamará MÉTODOS.
 * 
 * - 'this' es el contexto en el que nos encontramos
 *  el scope de this es el mismo objeto (en este caso que hablamos de
 *  objetos)
 * 
 * - un OBJETO es una colección de pares de llave: valor
 * 
 * - Objetct es el prototipo u objeto de JavaScript y tiene unos
 *  metodos importantes y útiles.
 */

{} // <- esto es un objeto para javascript

let a = new String("Hola");
// prototipo que deriva de la clase String: [[Prototype]]
// y es un valor primitivo de JavaScript: [[PrimitiveValue]]
// console.log(a)

const b = {};
console.log(b);

const c = new Object();
console.log(c)

const jhon = {
  name: "Jhon",
  lastName: "MirCha",
  age: 23,
  hobbies: ["Correr", "Hacer ejercicio", "Dar clases"],
  single: false,
  contacto: {
    email: "jhonmircha@gmail.com",
    twitter: "@jhonmircha",
    movil: 5512345678
  },
  saludar: function () {
    console.log(`Hola :)`);
  },
  decirMiNombre: function () {
    console.log(`Hola me llamo ${this.name} y tengo ${this.age} años
    y me puedes seguir como: ${this.contacto.twitter} en Twitter.`);
  }
}

console.log(`nombre objeto: ${jhon["name"]}`);
console.log(`edad objeto: ${jhon["age"]}\n`);
console.log(`soltero: ${jhon.single}`);
console.log(`Funcion dentro del objeto ${jhon.name}: ${jhon.saludar()}`); // without () return the entire function
console.log(jhon.saludar() );
console.log(jhon.hobbies);
console.log(jhon.hobbies[0]);
console.log(`contacto: ${jhon.contacto}`);
console.log(jhon.contacto);
console.log(`contacto e-mail: ${jhon.contacto.email}`);
console.log(jhon.saludar());
jhon.saludar();
jhon.decirMiNombre();

console.log(Object);
console.log(Object.keys(jhon)); // un método que tiene el prototipo Object (objeto de javscript)
console.log(Object.values(jhon));

console.log(jhon.hasOwnProperty("name") );
console.log(jhon.hasOwnProperty("nacimiento") ); 
// evalue si el nombre de propiedad pasado se encuentra en una de esas llaves