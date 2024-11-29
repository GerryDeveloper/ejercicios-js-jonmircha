// 24) Programa una función que dado un arreglo de números \
// devuelva un objeto con dos arreglos, el primero tendrá los \
// numeros ordenados en forma ascendente y el segundo de forma \
// descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
// 25) Programa una función que dado un arreglo de elementos, \
// elimine los duplicados, \
// pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
// 26) Programa una función que dado un \
// arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

//--------------------------------------------------------------

// 24) Programa una función que dado un arreglo de números \
// devuelva un objeto con dos arreglos, el primero tendrá los \
// numeros ordenados en forma ascendente y el segundo de forma \
// descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

const ordenarArreglo = (arr = undefined) => {
  if (arr === undefined) return console.warn(`No ingresaste un arreglo`);

  if ( !(arr instanceof Array)) return console.error(`El objeto ingresado ${arr} no es un Arreglo`);

  if (arr.length === 0) return console.error(`El arreglo esta vacio`);

  for ( let num of arr) {
    if (typeof num !== "number") return console.error(`El avlor ingresado: ${num} no es un numero`);
  }

  // creamos copias del array para no mutarlo por referencia
  const arr1 = arr.map(el => el*1);
  const arr2 = arr.map(el => el*1);

  // arreglo ascendente
  let flag = true;

  do {
    flag = true;
    let aux;
    for (let i = 0; i < arr1.length-1; i++) {
      if ( arr1[i] > arr1[i+1]) {
        aux = arr1[i];
        arr1[i] = arr1[i+1];
        arr1[i+1] = aux;

        flag = false;
      }
    }
  } while (!flag);

  // ordenar desdendente
  flag = true;
  do {
    flag = true;
    let aux;
    for (let i = 0; i < arr2.length-1; i++) {
      if ( arr2[i] < arr2[i+1]) {
        aux = arr2[i];
        arr2[i] = arr2[i+1];
        arr2[i+1] = aux;

        flag = false;
      }
    }

  } while (!flag);

  console.info(`Arreglo ascendente: ${arr1}`);
  console.info(`Arreglo descendente: ${arr2}`);

  return console.info({
    arr1,
    arr2
  })
}

// ordenarArreglo();
// ordenarArreglo(true);
// ordenarArreglo([]);
// ordenarArreglo([1,2,3,[]]);
// ordenarArreglo([1,4,5,99,-60]);
// ordenarArreglo([7, 5,7,8,6]);

//--------------------------------------------------------------
// 25) Programa una función que dado un arreglo de elementos, \
// elimine los duplicados, \
// pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

const eliminarDuplicados = (array = undefined) => {
  if (array === undefined) return console.warn(`No ingresaste un arreglo`);

  if ( !(array instanceof Array)) return console.error(`El objeto ingresado ${array} no es un Arreglo`);

  if (array .length === 0) return console.error(`El arreglo esta vacio`);

  const newArray = array.map(el => el);
  
  

  // let index = 0;
  // do {
  //   // index = 1;
  //   currentElement= array[index];
  //   for (let i = 1; i < newArray.length; i++) {
  //     if (newArray[i] === currentElement)
  //       continue;

  //     if (newArray[i] !== currentElement) {
  //       currentElement = newArray[i];
  //       index = i;
  //     }
  //   }
  //   index++;
  //   result.push[currentElement];

  // } while (index !== newArray.length);

  const result = [];
  let currentElement = newArray[0];
  let flag = false;

  for (let i = 0; i < newArray.length; i++) {
    
    // currentElement = newArray[i];
    // if ( !result.includes(currentElement) ) 
    //   result.push(currentElement);

   
    if ( !result.includes(newArray[i]) ) 
      result.push(newArray[i]);

    // esto tambien lo resuleve
    // flag = false;
    // for (let j = 0; j < result.length; j++) {
    //   if ( newArray[i] === result[j]) {
    //     flag = true;
    //     continue;
    //   } 
    // }
    // if (!flag) 
    //   result.push(newArray[i]);

  }
  
  console.info("resultado: ", result);
}

// eliminarDuplicados();
// eliminarDuplicados(true);
// eliminarDuplicados([]);
// eliminarDuplicados({});
// eliminarDuplicados(["x", 10, "x", 2, "10", 10, true, true]);
// eliminarDuplicados([1,2,2,3,4,55,55,55,5,7,8]);
// eliminarDuplicados([1,2,2,2,2,2,2,2,2,2,2,2,10,10,10,10,4,2,3,7,8]);


//--------------------------------------------------------------
// 26) Programa una función que dado un \
// arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

const calcularPromedio = (array = undefined) => {
  if (array === undefined) return console.warn(`No ingresaste un arreglo`);

  if ( !(array instanceof Array)) return console.error(`El objeto ingresado ${array} no es un Arreglo`);

  if (array.length === 0) return console.error(`El arreglo esta vacio`);

  for ( let num of array) {
    if (typeof num !== "number") return console.error(`El avlor ingresado: ${num} no es un numero`);
  }

  for ( let num of array) {
    if (typeof num !== "number") return console.error(`El avlor ingresado: ${num} no es un numero`);

    if ( Math.sign(num) < 0) return console.error(`valor ingresado invalido: ${num}, ingrese solo valors positivos.`);
  }

  let promedio = 0;
  for (let i = 0; i < array.length; i++) {
    promedio = promedio + array[i];

  }
  console.info(`El promedio es: ${ parseFloat(promedio) / parseFloat(array.length)}`);
  return promedio;

}

const calcularPromedio2 = (arr = undefined) => {
  if (arr === undefined) return console.warn(`No ingresaste un arreglo`);

  if ( !(arr instanceof Array)) return console.error(`El objeto ingresado ${arr} no es un Arreglo`);

  if (arr .length === 0) return console.error(`El arreglo esta vacio`);

  for ( let num of arr) {
    if (typeof num !== "number") return console.error(`El avlor ingresado: ${num} no es un numero`);

    if ( Math.sign(num) < 0) return console.error(`valor ingresado invalido: ${num}, ingrese solo valors positivos.`);
  }

  const initialValue = 0;
  let promedio = 0;
  const sumaArray = arr.reduce( (promedio, el) => promedio + el, initialValue,);

  console.info(`El promedio es ${sumaArray / arr.length}`);

  return promedio;

}

/**
 * [0, 1, 2, 3, 4].reduce(function (valorAnterior, valorActual, indice, vector) {
    return valorAnterior + valorActual;
    });
 */

calcularPromedio2([9,8,7,6,5,4,3,2,1,0]);
calcularPromedio2([9,8,7,-6,5,-4,3,2,1,0]);
console.info(`\n\n`);
calcularPromedio([9,8,7,6,5,4,3,2,1,0]);
calcularPromedio([9,8,7,-6,5,-4,3,2,1,0]);
calcularPromedio();
calcularPromedio(true);
calcularPromedio([]);
calcularPromedio({});