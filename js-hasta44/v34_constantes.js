
export const PI = Math.PI;

export let usuario = "jon";

// export default letpassword = "qwerty"; // esto no puede ser porque js no conoce el valor de pass. al momento
let password = "qwerty"; 
//export default password; // pero se puede exportar una vez tenga valor

// funcion expresada
const hello = () => {
  console.log("Hola, esto es una funcion expresada");
};
 // funcion definida
 // se puede exportar default porque primero hace HOISTING, porque es funcion definida
export default  function saludar () {
  console.log("Hola modulos +ES6");
}

// clase la mandamos por defecto
export class Saludar {
  constructor() {
    console.log("class constructor: Hola Clases +ES6");
  }
}
