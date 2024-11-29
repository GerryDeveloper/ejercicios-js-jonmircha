// 21) Programa una función que dado un array numérico devuelve otro array con los \
// números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
// 22) Programa una función que dado un array devuelva el número mas alto y el más \
// bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
// 23) Programa una función que dado un array de números devuelva un objeto \
// con 2 arreglos en el primero almacena los números pares y en el segundo los \
// impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
//---------------------------------------------------------------------------

// 21) Programa una función que dado un array numérico devuelve otro array con los \
// números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

const toPowArray = (numArray = undefined) => {
  if (numArray === undefined) return console.warn(`No ingresaste un array`);

  // if (!Array.isArray(numArray)) return console.error(`El valor proporcionado: ${numArray} no es un Array`);

  if (!Array.isArray(numArray)) {
    return console.error(`El valor dado ${numArray} no es un Array`);
  } else if ( numArray.length === 0 ) {
    return console.error(`No se pueden proporcionar arreglos vacios`);
  }
  
  // evaluamos los valores
  for (let value of numArray) {
    if ( !( typeof value === "number") )
      return console.error(`El arreglo proporcionado no es un arreglo de enteros`);

    
  }

  let powerArray = [];

  for (let value of numArray) {
    powerArray.push(Math.pow(value, 2));
  }

  return console.info(powerArray);
}

toPowArray([1,2,3]);
toPowArray([18,7,35]);
toPowArray([1,-2,-3]); // valores negativos dan positivo
toPowArray();

console.clear();

// 22) Programa una función que dado un array devuelva el número mas alto y el más \
// bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

const retornaMayorMenor = (array = undefined) => {

  if (array === undefined) return console.warn(`No ingresaste el arreglo`);

  if (!(Array.isArray(array))) {
    return console.error(`Eal valor ingresado '${array}' no es un Array`);
  } 

  if (array.length === 0) return console.warn(`El arreglo ingresado no puede estar vacio`);

  //validamos que solo tenga numeros
  for (let value of array) {
    if ( (typeof value) !== "number") 
      return console.error(`El arreglo introducido "${array}" no contiene solo enteros`);
  }

  let mayor = array[0],
    menor = array[0];
  // calculamos mayor
  for (let i = 1; i < array.length; i++) {
    if (array[i] >= mayor) {
      mayor = array[i];
    }
    if (array[i] <= menor) {
      menor = array[i];
    }
  }

  return console.info(`Los elementos menor y mayor son[menor, mayor]: ${[menor, mayor]}`);
}

retornaMayorMenor();
retornaMayorMenor(true);
retornaMayorMenor("cadena");
retornaMayorMenor(12);
retornaMayorMenor([1,2,3,4,5,6,3,6,6]);
retornaMayorMenor([1,2,-93,34,-65,6,-3,6,6]); 
retornaMayorMenor([201,199, 500,201,27,12,78,300,401]);
retornaMayorMenor([201,199]);
retornaMayorMenor([3,3]);
retornaMayorMenor([28]);
retornaMayorMenor([]);
retornaMayorMenor({});

console.clear();

// 23) Programa una función que dado un array de números devuelva un objeto \
// con 2 arreglos en el primero almacena los números pares y en el segundo los \
// impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

const returnObject = (array = undefined) => {
  if (array === undefined) return console.warn(`No ingresaste el arreglo`);

  if (!(Array.isArray(array))) return console.error(`Eal valor ingresado '${array}' no es un Array`);


  if (array.length === 0) return console.warn(`El arreglo ingresado no puede estar vacio`);

  for (let value of array) {
    if ( (typeof value) !== "number") 
      return console.error(`El arreglo introducido "${array}" no contiene solo enteros`);
  }

  let paresArray = [],
    imparesArray = [];
  // evaluamos positimos y negativos
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      paresArray.push(array[i]);
    } else {
      imparesArray.push(array[i]);
    }
  }

  const arraysPosNeg = {
    paresArray,
    imparesArray
  }

  console.info(arraysPosNeg);
  // console.info(`Arreglo pares e impares en un objeto:\n ${arraysPosNeg}`);
  return 0;

}

returnObject();
returnObject("cadena");
returnObject(true);
returnObject(23);
returnObject([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);
// Arreglo con 15 números enteros entre -100 y 100
const array1 = [-85, 24, 45, -37, 100, -68, 79, -14, 55, 0, -92, 34, -23, 47, 12];
returnObject(array1);
// Arreglo con 15 números enteros positivos entre 0 y 250
const array2 = [200, 45, 123, 89, 240, 67, 150, 175, 35, 99, 5, 220, 180, 10, 245];
returnObject(array2);