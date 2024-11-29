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

  return console.info({
    arr,
    asc: arr.map(el => el).sort(),
    desc: arr.map(el => el).sort().reverse()
  });
}

// ordenarArreglo();
// ordenarArreglo("hola");
// ordenarArreglo([]);
// ordenarArreglo([3, {}]);
// ordenarArreglo([7, 5, 7, 8, 6]);


// 25) Programa una función que dado un arreglo de elementos, \
// elimine los duplicados, \
// pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

const quitarDuplicados = (arr = undefined) => {
  if (arr === undefined) return console.warn(`No ingresaste un arreglo`);

  if ( !(arr instanceof Array)) return console.error(`Elvalor ingresado ${arr} no es un Arreglo`);

  if (arr.length === 0) return console.error(`El arreglo esta vacio`);

  if (arr.length === 1) return console.warn(`El arreglo debe tener almenos dos elementos`);

  // return console.info({
  //   original: arr,
  //   sinDuplicados: arr.filter((value, index, self) => self.indexOf(value) === index), // valor, posicion y el mismo arreglo (self)
  // });

  // esto se puede lograr con un SET
  // set permite crear un conjunto de objetos donde no se permitan objetos duplicados

  return console.info({
    original: arr,
    sinDuplicados: [...new Set(arr)] // el ... spread operator, para que vaya iterando cada elemento
  })
}

// quitarDuplicados();
// quitarDuplicados({});
// quitarDuplicados([]);
// quitarDuplicados(23);
// quitarDuplicados(["x", 10, "x", 2, "10", 10, true, true]);

// 26) Programa una función que dado un \
// arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

// los tres metodos mas usados en los arreglos javascript: map(), filter(), reduce()

// esta es una solucion ECMAScript 6 hacia adelante

// todos estos metodos generan un arreglo nuevo, forEach() por ejemplo, no, este uiltimo
// modifica el arreglo origianl

const promedio = (arr = undefined) => {
  if (arr === undefined) return console.warn(`No ingresaste un arreglo`);

  if ( !(arr instanceof Array)) return console.error(`El objeto ingresado ${arr} no es un Arreglo`);

  if (arr.length === 0) return console.error(`El arreglo esta vacio`);

  for ( let num of arr) {
    if (typeof num !== "number") return console.error(`El avlor ingresado: ${num} no es un numero`);
  }

  // reduce recive una funcion
  return console.info(
    arr.reduce( (total, el, index, arr) => { // index = posicion actual del elemento
      total = total + el;
      if ( index === (arr.length - 1)) { // esto solo se cumple al llegar al final del arreglo
        // return console.info(`El promedio de ${arr.join(" + ")} es ${ total / arr.length}`);
        return console.info(`El promedio de ${arr} es ${ total / arr.length}`);
      } else {
        return total; // retornamos el valor cada iteraccion para la suma
      }
    }) 
  );
}

promedio();
promedio({});
promedio([]);
promedio([2,true]);
promedio([2]);
promedio([1,2,3,4,5,6,7,8,9,0]);