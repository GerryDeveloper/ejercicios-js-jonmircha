/** DESTRUCTURING
 * 
 *  asingas dinamicamente el contenido de un arreglo o un objeto
 *  a nuevas varaibles pero de una manera mas agil
 * 
 */

const numbers = [1,2,3];

/* imagniemos que de este arreglo de numeros quiero guardar cada uno 
  de los valores en variables diferentes
*/

// sin usar destructuring
let uno = numbers[0],
  dos = numbers[1],
  tres = numbers[2];

console.log(uno, dos, tres);

// using destructuring
const [one, two, three] = numbers;
console.log(one, two, three);

// using and object
/* imaginemos que tenemos un objeto y queremos guardar cada una de
  sus propiedades en una variable independiente

  -quiza para usarlas en un template de html dinamico
  -o vamos a hacer operaciones aritmeticas

  -el ORDEN no importa, porque busca atributos que tengan el mismo
  nombe de las variables.
*/

let persona = {
  nombre: "juan",
  apellido: "alzaraz",
  edad: 38
}

// destructuring, in this case is an object so we use a fucking objetct

let {nombre, apellido, edad} = persona;
console.log(nombre, apellido, edad);

const obj1 = {
  atributo1: 12,
  atributo2: "cadenatxt"
}

const {atributo1, atributo2} = obj1;

console.log(atributo1, atributo2);