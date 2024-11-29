// function Persona() {
//   this.edad = 0;

//   setInterval(function crecer() {
//     this.edad++;
//     console.log(this.edad); // `this` se refiere al contexto del intervalo, no al objeto `Persona`
//   }, 1000);
// }

// function Persona() {
//   this.edad = 0;

//   setInterval(() => {
//     this.edad++;
//     console.log(this.edad); // `this` se refiere al objeto `Persona`
//   }, 1000);
// }

// let p = new Persona();
// let p = new Persona();
// --------------------------------------------------

// 5) Programa una función que invierta las palabras de una cadena de texto, \
// pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

// arrow function con return implicito
// ucando en split() no se indica caracter practicamente cada carcter sea una posicion del array  
const invertirCadena = (cadena = "") => 
  (!cadena)
    ? console.warn(`No ingresaste una cadena de teto`)
    : console.info(cadena.split("").reverse().join(""));

invertirCadena("Anita lava la tina");
invertirCadena("ABCDEFG");
invertirCadena();
invertirCadena("");

console.clear();

// 6) Programa una función para contar el número de veces que se repite una \
// palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

// vamos a usar index of, que retorna -1 sino detecta el texto a buscar
const textoEnCadena = (cadena = "", texto = "") => {
  if (!cadena) return console.warn("No ingresaste texto largo");

  if (!texto) return console.warn("No ingresaste la palabra a evaluar");

  let i = 0,
  contador = 0;

  while ( i !== -1) {
    i = cadena.indexOf(texto, i);
    
    if (i !== -1) {
      console.info(`palabra encontrada en i = ${i}`);
      i++;
      // i = i + texto.length-1; // estos dos dan lo mismo...
      contador++;
    }
    
  }
  return console.info(`La palabra ${texto} se repite ${contador} veces`);
}
let cadena = "Hola mundo adios mundo medio mundo";
let texto = "mundo";
textoEnCadena(cadena, texto);
textoEnCadena();
textoEnCadena("", "mundo");
textoEnCadena("texto");

console.clear();

// 7) Programa una función que valide si una palabra o frase dada, es un \
// palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

const palindromo = (palabra = "") => {
  if (!palabra) return console.warn(`No ingresaste la palabra`);

  palabra = palabra.toLowerCase();
  // let alReves = palabra.reverse(); // wtf dude ajajaja
  let alReves = palabra.split("").reverse().join("");

  // console.info(palabra, alReves);

  return (palabra === alReves)
    ? console.info(`Si es palindromo, palabra original: ${palabra}, palabra al reves: ${alReves}`)
    : console.info(`No es palindromo, palagra original: ${palabra}, palabra al reves: ${alReves}`);
}

palindromo("palabra");
palindromo();
palindromo("salAS");

console.clear();

// 8) Programa una función que elimine cierto patrón de caracteres de un \
// texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

// lo vamos a resolver con una funcion anonima con un return implicito

const eliminarCaracteres = (texto = "", patron = "") =>
  (!texto)
    ? console.warn(`No ingresaste un texto`)
    : (!patron)
      ? console.warn(`No ingresaste un patron de caracteres`)
      : console.info(texto.replace(new RegExp(patron, "ig"), ""));
      // flags= i: ignore case, g: general? busca todo

eliminarCaracteres();
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5");
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xy");
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "AAA");
// esta funcion soporta un expresion regular
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "[a-z]"); // elimina todo el alfabeto