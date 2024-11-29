

console.log(`puto el que lo lea`);

// 12) Programa una función que determine si un número es \
// primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

const numeroPrimo = (numero = undefined) => {

  if (numero === undefined) return console.warn(`No ingresaste el numero`);

  if (typeof numero !== "number") return console.error(`El valor ${numero} ingresado, NO es un numero`);

  if (numero === 0) return console.error(`El numero no puede ser 0`);
  
  if (numero === 1) return console.error(`El numero no puede ser 1`);

  if (Math.sign(numero) === -1) return console.error(`El numero no puede ser negativo`);

  let divisible = false;

  for (let i = 2; i < numero; i++) {
    // if (numero % i === 0) 
    //   return divisible = true;
    if ((numero % i) === 0) {
      divisible = true;
      break;
    }
  }
  return divisible // se omiten los () prque es un solo valor
    ? console.info(`El numero ${numero} NO es primo`)
    : console.info(`El numero ${numero} SI es primo`);
}

numeroPrimo(-1);
numeroPrimo(5);
numeroPrimo("5");
numeroPrimo(1);
numeroPrimo(2);
numeroPrimo(3);
numeroPrimo(4);
numeroPrimo(5);
numeroPrimo(6);
numeroPrimo(true);
numeroPrimo(61);
numeroPrimo(72);
numeroPrimo(200);

console.clear();

// 13) Programa una función que determine si un número \
// es par o impar, pe. miFuncion(29) devolverá Impar.

const numeroParImpar = (numero = undefined) => {
  if (numero === undefined) return console.warn(`No ingresaste el numero`);

  if (typeof numero !== "number") return console.error(`El valor ${numero} ingresado, NO es un numero`);

  return (numero % 2 === 0)
    ? console.info(`El numero ${numero} es Par`)
    : console.info(`El numero ${numero} es Impar`);
}

numeroParImpar();
numeroParImpar(true);
numeroParImpar("12");
numeroParImpar(-238);
numeroParImpar(19);
numeroParImpar(200);

console.clear();


// 14) Programa una función para convertir grados Celsius a \
// Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

const convertirGrados = (grados = undefined, unidad = undefined) => {
  if (grados === undefined) return console.warn(`No ingresaste el valor a convertir`);

  if (typeof grados !== "number") return console.error(`El valor "${grados}" ingresado NO es un numero`);

  if (unidad === undefined) return console.warn(`No ingresaste el tipo de grado a convertir`);

  if (typeof unidad !== "string") return console.error(`El valor "${unidad}" ingresado NO es una cadena de texto`);

  if (unidad.length !== 1 || !/(C|F)/.test(unidad)) return console.warn(`Valor de unidad no reconocido`); 
  // si esto no se cumple y que no sea una C o una F y longitud diferente de 1

  if (unidad === "C") {
    return console.info(`${grados}°C = ${Math.round(grados * (9/5) + 32)}°F`);
  } else if (unidad === "F") {
    return console.info(`${grados}°F = ${Math.round( (grados - 32) * (5/9))}°C`);
  } else {
    return console.error(`El tipo de datos a convertir NO es valido`);
  }

  console.info(`funciono`);

}

convertirGrados();
convertirGrados("2");
convertirGrados(2);
convertirGrados(2, true);
convertirGrados(2, "hola");
convertirGrados(2, "E");
convertirGrados(0, "C");
convertirGrados(100, "C");
convertirGrados(32, "F");
convertirGrados(100, "F");