/**
 * EJERCICIOS 2/10 jhon mircha JavaScript
 * 
 * 5) Programa una función que invierta las palabras de una cadena de texto, 
 * pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
6) Programa una función para contar el número de veces que se repite una palabra 
en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
7) Programa una función que valide si una palabra o frase dada, es un 
palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
8) Programa una función que elimine cierto patrón de caracteres de un 
texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
 * 
 */

// 5) Programa una función que invierta las palabras de una cadena de texto, 
//   pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

const invertirPalabra = (palabra = "") => {
  if (!palabra)
    return console.warn("No ingresaste una CADENA de texto");

  if (palabra.length === 1)
    return palabra;

  let reversePalabra = "";
  for (let letra = palabra.length-1; letra >= 0; letra--) {
    reversePalabra = reversePalabra + palabra[letra];
  }
  console.info(reversePalabra);
}

invertirPalabra("Esta palabra va invertida en la salida de texto");
invertirPalabra();
invertirPalabra("a");
invertirPalabra("AbC");
invertirPalabra("Luis Gerardo");
invertirPalabra("Luis & Itzel");

console.clear();

// 6) Programa una función para contar el número de veces que se repite una palabra 
// en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

const contarPalabras = (texto = "", palabra = "") => {
  if (!texto)
    return console.warn(`No ingresaste el TEXTO deonde buscar la palabra`);

  if (!palabra)
    return console.warn(`No ingresaste la PALABRA para buscala en el texto`);

  texto = texto.toLowerCase(),
  palabra = palabra.toLowerCase();

  if (!texto.includes(palabra))
    return console.info(`La palabra no esta contenida`);

  let arrayTexto = texto.split(" "),
  cont = 0;
  for (let i = 0; i < arrayTexto.length; i++) {
    if (arrayTexto[i].includes(palabra))
      cont++;
  }
  return (cont > 1)
    ? console.info(`El texto contiene la palabra "${palabra}" un total de ${cont} veces`)
    : console.info(`El texto contiene la palabra "${palabra}" ${cont} vez`);
}

let texto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
Integer dapibus tristique tortor sit amet malesuada. Morbi sollicitudin \
sem non vulputate condimentum. Morbi euismod, tellus sed scelerisque hendrerit, \
purus lectus pretium sem, vel ultrices quam augue a orci. Sed auctor felis sem, \
ut congue augue cursus ac. Vivamus eget convallis massa.",
palabra = "lorem";
palabra = "amEt";

contarPalabras("a a a a a a Luis a a palabra palabra palabra luis luis", "luis");
contarPalabras();
contarPalabras("a a a a a");
contarPalabras("aaa aaa aaa aaa aaa aaa ", "bbb");
contarPalabras("aaa aaa aaa bbb aaa aaa ", "bbb");
contarPalabras(texto, palabra);

console.clear();

// 7) Programa una función que valide si una palabra o frase dada, es un 
// palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

const validarPalindromo = (text = "") => {
  if (!text)
    return console.warn(`No ingresaste TEXTO en el ejercicio.`);

  if (text.length === 1)
    return console.info(`El texto introducido SI es un palindromo: ${text}`);
  
  let palindromo = "";

  text = text.toLowerCase();
  text = text.replaceAll(" ", ""); // replace() solo reemplaza la primer existencia, que tonto!

  for (let i = text.length-1; i >= 0; i--) {
    palindromo = palindromo + text[i];
  }
  
  console.log(text);
  console.log(palindromo);

  for (let i = 0; i < text.length/2; i++) {
    console.log(`${text[i]} ===  ${palindromo[i]}`);
    if (text[i] !== palindromo[i])
      return console.info(`la palabra NO es palindromo`);
  }

  return console.info(`La palabra SI es palindromo`)
}

const validarPalindromo2 = (phrase = "") => {
  if (!phrase)
    return console.warn(`No ingresaste TEXTO para validar`);

  if (phrase.length === 1)
    return console.info(`La palabra "${phrase}" Si es palindromo`);

  for (let i = 0; i < phrase.length/2; i++) {
    if (phrase[i] !== phrase[phrase.length-1-i])
      return console.info(`La frase NO es un palindromo`);
    console.info(`La frase SI es un palindromo`);
  }
  /// a n n a, a b c d c b a
}

validarPalindromo("pez");
validarPalindromo("anita lava la tina");
console.clear();
console.log("\n");
validarPalindromo2("anita lava la tina");
validarPalindromo2();
validarPalindromo2("A");
validarPalindromo2("ZZ");
validarPalindromo2("AAAbAAA");
console.clear();

// 8) Programa una función que elimine cierto patrón de caracteres de un 
// texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

const eliminarPatron = (text = "", patron = "") => {
  if (!text)
    return console.warn(`No se introdujo texto a evaluar`);

  if(!patron)
    return console.warn(`No se introduco patron a evaluar`);

  if (!text.includes(patron))
    return console.info(`El patron dado no se encuentra en la cadena`);

  return console.info(text.replaceAll(patron, "")); // same, replace, is diferent from replaceAll
}

let text2 = "xyz1, xyz2, xyz3, xyz4 y xyz5",
patron = "xyz";
eliminarPatron(text2, patron);
eliminarPatron(text2);
eliminarPatron();
eliminarPatron(patron, text2);
eliminarPatron(patron, "abc");