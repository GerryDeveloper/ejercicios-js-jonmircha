
// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

const genRandom = () => Math.floor(Math.random() * (600 - 501) + 501);

console.info(genRandom() );
console.info(genRandom() );
console.info(genRandom() );
console.info(genRandom() );
console.info(genRandom() );

console.clear();

// 10) Programa una función que reciba un número y evalúe si es capicúa o no\
//  (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

const evalCapicua = (number = undefined) => {
  if (number === undefined) return console.warn(`Numero no ingresado.`);

  if ( number >= 0 && number <= 9) return console.info(`El numero ${number} SI es capicua.`);

  // if (number < 1) number = number * (-1);
  if (number < 0) number = Math.abs(number);

  // convertir int to String
  // number = number.toString();
  number = String(number);

  // console.info(number);
  // console.info(typeof number);
  // console.info((-150).toString()); // imprime le signo tambien

  for (let i = 0; i < number.length/2; i++) {
    if (number[i] !== number[number.length-1-i])
      return console.info(`El numero ${number} NO es capicua.`);
  }

  console.info(`El numero ${number} SI ES CPICUA`);
}


evalCapicua(2002);
evalCapicua();
evalCapicua(900);
evalCapicua(101);
evalCapicua(19091);
evalCapicua(-101);
evalCapicua(212.212);
evalCapicua("12");
evalCapicua("2002");

console.log(`\n\n`);
console.clear();
// -------------------

// 11) Programa una función que calcule el factorial de un \
// número (El factorial de un entero positivo n, se define como el producto de \
//   todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

const getFactorial = (num = undefined) => {
  if (num === undefined) return console.warn(`No ingresaste un numero`);

  if (typeof num !== "number") return console.warn(`El valor ingresado es invalido`);

  if (num < 0) return console.warn(`No existe el factorial de un numero negativo, ingrese un numero valido`);

  // en caso de ingresar un decimal sera redondeado
  // esto no sirve, es para pares, no para decimaes
  // if (num % 2 !== 0) console.warn(`Los numeros con decimal seran redondeados usando Math.floor()`);
  num = Math.floor(num);

  if (num === 0) return console.info(`El factorial de ${num} es 1`);

  if (num === 1) return console.info(`El factorial de ${num} es ${num}`);

  let factorial = 1;
  for (let i = 2 ; i <= num; i++)  {
    factorial = factorial * i;
  }

  console.info(`El factorial de ${num} es ${factorial}`);
}

getFactorial(-5);
getFactorial(-1);
getFactorial(0);
getFactorial(1);
getFactorial(2);
getFactorial(3);
getFactorial(4);
getFactorial(5);
getFactorial(6);
getFactorial(7);
