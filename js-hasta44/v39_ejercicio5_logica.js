// 12) Programa una función que determine si un número es \
// primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

const evalPrimeNumber = (number = undefined) => {

  if (number === undefined) return console.warn(`No ingresaste numero`);

  if (typeof number !== "number") return console.error(`Ingrese un valor numerico, el valor ${number} es invalido`);

  if (number < 0) return console.error(`Evaluaremos primitivos solo de numeros positivos`);

  if (number === 0 || number === 1) return console.info(`El ${number} no se considera numero primo`);

  if (number === 2 || number === 3) return console.info(`*El numero ${number} SI es primo`);

  for (let i = 2; i < number; i++) {
    if (number % i === 0)
      return console.info(`**El numero ${number} NO es primo`);
  }
  return console.info(`***El numero ${number} SI es primo`);
}

evalPrimeNumber();
evalPrimeNumber(-23);
evalPrimeNumber(-1);
evalPrimeNumber();
evalPrimeNumber("12");
evalPrimeNumber("73");
evalPrimeNumber(0);
evalPrimeNumber(1);
evalPrimeNumber(2);
evalPrimeNumber(3);
evalPrimeNumber(4);
evalPrimeNumber(5);
evalPrimeNumber(57);
evalPrimeNumber(59);
evalPrimeNumber(61);
evalPrimeNumber(67);
evalPrimeNumber(71);
evalPrimeNumber(72);
evalPrimeNumber(73);

console.clear();

// 13) Programa una función que determine si un número \
// es par o impar, pe. miFuncion(29) devolverá Impar.

const evalParImpar = (number = undefined) => {

  if (number === undefined) return console.warn(`No ingresaste un numero`);

  if (typeof number !== "number") return console.error(`El valor ${number} no es un valor numerico.`);

  // if (Math.sign(number) <= 0) number = Math.abs(number);

  return (number % 2 === 0)
    ? console.info(`El numero ${number} es PAR`)
    : console.info(`El numero ${number} es IMPAR`);

}

evalParImpar(-100);
evalParImpar(-19);
evalParImpar();
evalParImpar("28");
evalParImpar(0);
evalParImpar(1);
evalParImpar(3);
evalParImpar(27);
evalParImpar(88);
evalParImpar(2002);

console.clear();

// 14) Programa una función para convertir grados Celsius a \
// Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

const convertirCToF = (grados = undefined, tipo = "") => {
  if (grados === undefined) return console.warn(`No ingresaste el valor en grados`);

  if (!tipo) return console.warn(`No ingresaste el tipo de grados`);

  if (typeof grados !== "number") return console.error(`El valor ${grados} no es valido`);

  if (typeof tipo !== "string") return console.error(`El valor de tipo: ${tipo} es invalido`);

  tipo = tipo.toUpperCase();
  return (tipo === "F")
    ? console.info(`resultado: ${grados} ${tipo} a Celcius: ${ ((grados - 32)*5/9).toFixed(1) } C`)// retorna Centigrados 
    : (tipo === "C")
      ? console.info(`resultado: ${grados} ${tipo} a Farenheit: ${((grados * (9/5)) + 32).toFixed(1) } F`) // retorna Farenheit
      : console.error(`El tipo ingresado[${tipo}] no corresponde ni a Celcius ni a Farnheit, ingrese valor valido`);
  
}

convertirCToF(34);
convertirCToF();
convertirCToF("34");
convertirCToF(0, "F");
convertirCToF(34, "C");
convertirCToF(36, "c");
convertirCToF(99.6, "F");
convertirCToF(100, "f");
convertirCToF(101.1, "F");
convertirCToF(101.1, "g");