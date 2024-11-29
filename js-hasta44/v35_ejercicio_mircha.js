
/**
 *  RENDER CONDICIONAL
 */

// Ejercicio 1. Mircha
function contarCaracteres (cadena = "") { // agregamos valor por defecto
  console.log(!cadena); // a este punto esta vacia
  if (!cadena) {
    console.warn("No ingresaste ninguna cadena");
  } else {
    console.info(`la cadena "${cadena}" tiene ${cadena.length} caracteres`);
  }
}

contarCaracteres();
contarCaracteres("cuantos caracteres tiene esta cadena?");

console.clear();

// modificamos la funcion declarada para usar tambien arrow functions y reducira a una linea la funcion
// const contarCaracteresArrow = (cadena = "") => (cadena.length > 0 ? cadena.length : "no ingresaste una cadena");

// las funciones arrow de una sola linea tienen un return implicito.
// sino fuese una sola linea en la arrow funtion habria que poner { y dentro un return };
const contCad = (cadena = "") => (!cadena) ? console.warn("no ingresaste una cadena") : console.info(`la \
  cadena tiene ${cadena.length} caracteres`);

// podemos indentar la funcion para mayor legibilidad, que chulo se ve el codigo
const contCadIndented = (cadena = "") => 
  (!cadena) 
    ? console.warn("no ingresaste una cadena") // if true
    : console.info(`la cadena tiene ${cadena.length} caracteres`) // if false

// console.log(contCad("cuenta los caracteres"));
contCad("cuenta estos caracteres");
contCad();

console.clear();

// -----------------------
// Ejercicio 2. Mircha
const recortarTexto = (cadena = "", longitud = undefined) =>
  (!cadena)
    ? console.warn("No ingresaste el texto")
    : console.info(`Rsultado, longitud (${longitud}): \n${cadena.slice(0, longitud)}`);


// todo esto para javascript es una sola funcion, aporovechamos el return implicito de la funcion arrow
const recortarTexto2 = (cadena = "", longitud = undefined) =>
  (!cadena)
    ? console.warn("No ingresaste el texto")
    : (longitud === undefined)
      ? console.warn("No ingresaste la longitud para recortar el texto")
      : console.info(cadena.slice(longitud));

recortarTexto("esto es otra cadena de texto", 5);
recortarTexto("esto es otra cadena de texto", 10);
recortarTexto("esto es otra cadena de texto");
recortarTexto();
recortarTexto("", 6);
recortarTexto("esto es otra cadena de texto", "esto es otra cadena de texto".length);

console.log("\n");

recortarTexto2("cadena cadena cadena"); // no mandamos segundo parametro

console.clear();

// -------------------
// Ejercicio 3. Mircha

const cadenaAArreglo = (cadena = "", separador = undefined) =>
  (!cadena)
    ? console.warn(`No ingresaste una CADENA de texto`)
    : (separador === undefined)
      ? console.warn(`No imbresaste un caracter SEPARADOR`)
      : console.info(cadena.split(separador));

cadenaAArreglo("hola mundo desde javascript esto es una cadena a arreglo", " ");
cadenaAArreglo("esto tambien es una cadena de texto con menos palabras"); // sin separador
cadenaAArreglo(); // cadena vacia
cadenaAArreglo("");
cadenaAArreglo(" ");
cadenaAArreglo(" ", " ");

console.clear();

// Ejercicio 3. Mircha.
/**
 * 
 * hasta que acaben todos los ifs de validaciones ya empieza el cuerpo de la funcion
  evitar el callBack hell
  es mejor tener cada validacion de cada error de manera independiente
 */

const repetirTexto = (texto = "", veces = undefined) => {
  if (!texto) return console.warn(`No ingresaste TEXTO en la funcion`); // el return hace que sea imposible retroceder
  
  if (veces === undefined) return console.warn(`No ingresaste el numero de VECES a la funcion`);

  if (veces === 0) return console.error(`El numero de veces no puede ser CERO.`);

  // if (veces < 0) 
  if (Math.sign(veces) === -1) return console.error(`El numero de veces no puede ser NEGATIVO`);

  for (let i = 1; i <= veces; i++) console.info(`${texto}, ${i}`);  
}

repetirTexto("Hola Mundo",3);
repetirTexto();
repetirTexto("Hola Mundo"); // veces undefined
repetirTexto("Hola Mundo",0);
repetirTexto("Hola Mundo",-1);
repetirTexto("Hola Mundo",8);
