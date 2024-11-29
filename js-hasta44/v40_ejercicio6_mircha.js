// 15) Programa una función para convertir números de base \
// binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

/**
 * 
 *  - parseInt() convierte de cadena a entero
 *  y de entero base dos a ase 10
 * 
 *  - toString() no sirve para convertir numero a cadena
 */

const convertirBinarioDecimal = (numero = undefined, base = undefined) => {
  if (numero === undefined) return console.warn(`No ingresate el numero a convertir`);

  if (typeof numero !== "number") return console.error(`El valor NUMERO ingresado ${numero} NO es un numero`);

  if (base === undefined) return console.warn(`No ingresaste la base a convertir`);

  if (typeof base !== "number") return console.error(`El valor BASE ingresado ${base} NO es un numero`);

  if (base === 2) {
    return console.info(`${numero} base ${base} = ${parseInt(numero, base)} en base 10`);
  } else if (base === 10) {
    return console.info(`${numero} base ${base} = ${numero.toString(2)}`)
  } else {
    return console.error(`El tipo de base a convertir no es valido`);
  }
}

convertirBinarioDecimal();
convertirBinarioDecimal("2");
convertirBinarioDecimal(100);
convertirBinarioDecimal(100, "2");
convertirBinarioDecimal(100, 2);
convertirBinarioDecimal(101, 2);
convertirBinarioDecimal(1110010, 2);
convertirBinarioDecimal(4,10);
convertirBinarioDecimal(114,10);
convertirBinarioDecimal(114,69);

console.clear();

// 16) Programa una función que devuelva el monto final \
// después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

const aplicarDescuento = (monto = undefined, descuento = 0) => { 
  // sino se pasa descuento se entiende que no se quiere aplcar
  if (monto === undefined) return console.warn(`No ingresaste el monto`);

  if (typeof monto !== "number") return console.error(`El valor ${monto} ingresado no es un numero`);

  if (monto === 0) return console.error(`El monto no puede ser 0`);

  if (Math.sign(monto) === -1) return console.error(`El monto no puede ser negativo`);

  if (typeof descuento !== "number") return console.error(`El valor descuento: ${descuento} ingresado no es un numero`);

  if (Math.sign(descuento) === -1) return console.error(`El descuento no puede ser negativo`);

  return console.info(`$${monto} - ${descuento}% = $${monto - ((monto*descuento / 100))}`);
}

aplicarDescuento();
aplicarDescuento("200");
aplicarDescuento(0);
aplicarDescuento(-1000);
aplicarDescuento(1000, "20");
aplicarDescuento(1000, -20);
aplicarDescuento(1000);
aplicarDescuento(1000, 25);

console.clear();

/**
 *  TIEMPO: hay distintas formas de expresar el timepo
 * 
 *  - formato TIMESTAMP: cuantos milisegundos han pasado del 01 01 1970 hasta ahora
 *  
 *  - si necesitas hacer operaciones aritmeticas con fechas, lo que teconviene es
 *  convertir ambas fechas a valores timestamp es decir a milisegundos, hacer la suma
 *  resta, multiplicacions o la opoeracion que quieras y despues de eso CONVERTIRLO
 *  a la unidad que quieres, dias, horas, anios, segundos.
 * 
 * 
 *  - en este caso es erroneo usar type, pues {}, [], date, son todos el mismo tipo, object
 *  typeof new Date();
    'object'

    typeof {}
    'object'

    typeof []
    'object'

    - arreglo instancia de Array:
    [] instanceof Array
    true

    - si un {} es instancia de object, se usa () en consola para dar contexto, objeto, no bloque
    de codigo
    ({} instanceof Object)
    true

    - fechas
    new Date() instanceof Date
    true

    new Date().getTime();
    1718335997650
 */

// 17) Programa una función que dada una fecha válida determine \
// cuantos años han pasado hasta el día de hoy, \
// pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

// fecha a trabajar: 1984, 4, 24. (mes lleva notacion 0-11, los meses se guardan en un arreglo)

const calcularAnios = (fecha = undefined) => {
  if (fecha === undefined) return console.warn(`No ingreaste la fecha`);

  if (!(fecha instanceof Date) ) return console.error(`El mensaje que ingresaste no es una fecha valida`);
  // (!fecha instanceof Date)

   // aqui ya tenemos la diferencia expresada en milisegundos
  let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
    aYearInMs = 1000 * 60 * 60 * 24 * 365.25, // para incluir anios biciestos
    aniosHumanos = Math.floor(hoyMenosFecha / aYearInMs);

  // return console.info(`Diferencia: ${diferenciaEnAnios}`);
  return (Math.sign(aniosHumanos) === -1)
    ? console.info(`Faltan ${Math.abs(aniosHumanos)} anios para el ${fecha.getFullYear()}`)
    : (Math.sign(aniosHumanos) === 1) 
      ? console.info(`Han pasado ${aniosHumanos} anios, desde ${fecha.getFullYear()}`)
      : console.info(`No hay diferencia, estamos en el anio actual: ${fecha.getFullYear()}.`);

}

// video a 30 marzo 2020
calcularAnios();
calcularAnios({});
calcularAnios(Boolean);
calcularAnios(new Date());
calcularAnios((new Date(1996, 2, 2)));
calcularAnios((new Date(2080, 2, 2)));
calcularAnios((new Date(2084, 4, 24)));