import { decimalBinario as toBinario } from "./v40_ejercicio6_funciones.js";

// 15) Programa una función para convertir números de base \
// binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
// 16) Programa una función que devuelva el monto final \
// después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
// 17) Programa una función que dada una fecha válida determine \
// cuantos años han pasado hasta el día de hoy, \
// pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

//-----------------------------------------------------------------

// 15) Programa una función para convertir números de base \
// binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

const convertirBinario = (numero = undefined, base = undefined) => {
  if (numero === undefined) return console.warn(`No ingresaste el numero a convertir`);

  if (typeof numero !== "number") return console.error(`El valor ingresado "${numero}" a CONVERTIR no es un numero`);

  if (base === undefined) return console.warn(`No ingresaste la base a convertir`);

  if (typeof base !== "number") return console.error(`El valor ingresado "${base}" como BASE no es un numero`);

  if (base !== 2 && base !== 10) return console.warn(`Base no reconocida, ingrese base 2 o base 10 por favor.`);

  // validamos que si se ingresa una potencia dos, se ingrese solamente 1s o ceros
  const regExBinario = /^[01]+$/; // solo unos y ceros
  if (base === 2) {
    return (regExBinario.test(numero))
      ? console.info(`Numero [${numero}, ${base}] a DECIMAL: ${parseInt(numero, 2)} BASE 10`) // si es solo binario
      : console.warn(`Para convertir a una base binaria [${base}] necesitas proporcionar un numero compuesto por 0's y 1's`);
  }
  if (base === 10) {
    // return console.info(`Numero [${numero}, ${base}] convertido a BINARIO: ${parseInt(numero, 10)} BASE 2`); // base deberia valer 10, devuelve en binario
    // return console.info(`Numero [${numero}, ${base}] convertido a BINARIO: ${toBinario(numero)} BASE 2`); 
    // let aBinario = Number.parseInt(numero, 10);

    let aBinario = numero.toString(2);
    return console.info(`Numero [${numero}, ${base}] convertido a BINARIO: ${aBinario} BASE 2`); 
  }
}

convertirBinario("11101", 2); // valor ingresado no es un numero if2
convertirBinario(11101, 2);
convertirBinario(100, 2);
convertirBinario(11101);
convertirBinario(4, 10);
convertirBinario(8, 10);

console.clear();

// 16) Programa una función que devuelva el monto final \
// después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

const aplicarDescuento = (cantidad = undefined, impuesto = undefined) => {
  if (cantidad === undefined) return console.warn(`No se ingreso la cantidad`);
  if (typeof cantidad !== "number") return console.error(`El valor inbresado ${cantidad} no es un valor numerico valido`);

  if (cantidad < 0 ) return console.warn(`No puede haber cantidades negativas.`);

  if (cantidad === 0) return console.warn(`No se puede aplicar impuesto a una cantidad de 0`);
  // impuesto
  if (impuesto === undefined) return console.warn(`No se ingreso el impuesto`);

  if (impuesto < 0 ) return console.warn(`el impuesto no puede ser negativo`);

  if (impuesto < 0 || impuesto > 100) return console.warn(`El impuesto debe ser >0 y <100`);

  let porcentajeNeto = parseFloat(impuesto) / parseFloat(100);
  let resultado = cantidad - (cantidad * porcentajeNeto);
  // console.info(`cantidad: ${cantidad}, impuesto: ${impuesto}, impuestoTotal: ${porcentajeNeto}, resultado: ${resultado}`);
  return console.info(`A la cantidad ${cantidad} se le aplico un impuesto de ${impuesto}%, resultando: ${resultado}`);
}

aplicarDescuento();
aplicarDescuento(-1);
aplicarDescuento(-10,1);
aplicarDescuento(0,5);
aplicarDescuento(0);
aplicarDescuento(100, 20);
aplicarDescuento(250, 20);
aplicarDescuento(3500, 10);

console.clear();

// 17) Programa una función que dada una fecha válida determine \
// cuantos años han pasado hasta el día de hoy, \
// pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

const localDate = new Date(),
givenDate = new Date("1996-03-02");

let fecha1 = localDate.getTime();
let fecha2 = givenDate.getTime();

/*
const diferenciaEnAnios = (fecha1 = undefined, fecha2 = undefined) => {
  if (fecha1 === undefined) return console.warn(`No se agrego la fecha 1.`);
  if (fecha2 === undefined) return console.warn(`No se agrego la fecha 2.`);

  console.log(new Date(fecha1));
  console.log(new Date(fecha2));
  let diferencia = Math.abs(fecha1 - fecha2);
  // cuando no tenia el return regresaba undefined, que es lo que regresan las funciones sin return
  return new Date(diferencia).getFullYear();
}


console.log(`La diferencia en años entre ${fecha1} y ${fecha2} es: ${diferenciaEnAnios(fecha1, fecha2)} años.`);
*/
const diferenciaEnAnios = (fecha1 = undefined, fecha2 = undefined) => {
  if (fecha1 === undefined || fecha2 === undefined) {
    console.warn(`No se proporcionaron ambas fechas.`);
    return undefined;
  }

  const milisegundosPorAnio = 1000 * 60 * 60 * 24 * 365.25; // Aproximadamente 1 año en milisegundos
  const diferenciaEnMilisegundos = Math.abs(fecha1 - fecha2);
  const diferenciaEnAnios = diferenciaEnMilisegundos / milisegundosPorAnio;

  return Math.round(diferenciaEnAnios);
};

let fechaA = (new Date(fecha1)).getFullYear();
let fechaB = (new Date(fecha2)).getFullYear();


// console.log(`La diferencia en años entre ${fechaA} y ${fechaB} es: ${diferenciaEnAnios(fecha1, fecha2)} años.`);



// let date2 = new Date("1996/03/02");
let date2 = new Date(1996, 2, 2);
const calcularFecha = (fecha2 = undefined) => {

  if (fecha2 === undefined) return console.warn(`No se ingreso la segunda fecha`);

  let date1 = new Date();
  console.info(date1);
  console.info(fecha2);

  let mili1 = Date.parse(date1); // a vlaor entero, no recomendada por la diferencia entre navegadores
  let mili2 = Date.parse(fecha2);

  let diferencia = Math.abs(mili1 - mili2);
  //diferencia = Date(diferencia);
  // let fechaDif = new Date(diferencia);
  // let fechaDif = new Date(diferencia);

  // Milisegundos en un año (365.25 días para incluir años bisiestos)
  const milisegundosPorAnio = 1000 * 60 * 60 * 24 * 365.25;
  // fechaDif = Math.floor(fechaDif / milisegundosPorAnio);
  // fechaDif = new Date(fechaDif);

  let diferenciaAnios = diferencia / milisegundosPorAnio;

  console.info(mili1);
  console.info(mili2);
  console.info(`Diferencia entre las dos fechas: \n${diferencia}`);
  // console.info(`Diferencia entre las dos fechas: \n${fechaDif.getFullYear()}`);
  console.info(`Diferencia entre las dos fechas en YEARS: \n${diferenciaAnios}`);

}

calcularFecha(date2);
