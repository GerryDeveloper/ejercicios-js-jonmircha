
// 18) Programa una función que dada una cadena de texto cuente el \
// número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

/**
 * 
 * el for=of permite recorrer cualquier dato iterable como string y arrays
 */

const contarLetras = (cadena = "") => {
  if (cadena === "") return console.warn(`No ingresaste una cadena de texto`);

  if (typeof cadena !== "string") return console.error(`La cadena proporcionada no es un una cadena de texto valida`);

  let vocales = 0,
    consonantes = 0;

  cadena = cadena.toLowerCase();

  for (let letra of cadena ) {
    // if ( /^[AEIOUaeiou]$/.test(letra)) { // tambien las acentuadas pero el teclado no da xd
    if ( /^[aeiou]$/.test(letra)) { // tambien las acentuadas pero el teclado no da xd
      vocales++;
    }

    if (/^[bcdfghjklmnpqrstvwxyz]$/.test(letra)) consonantes++;
    
  }

  // vamos a retornar un objeto
  return console.info({
    // cadena: cadena,
    // vocales: vocales,
    // consonantes: consonantes
    cadena,
    vocales,
    consonantes
  });

}

contarLetras();
contarLetras(3);
contarLetras("Hola mundo");
contarLetras("lorem impsum");

console.clear();

// ---------------------------------
// 19) Programa una función que valide que un texto sea un nombre \
// válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.

const validarNombre = (nombre = "") => {
  if (nombre === "") return console.warn(`No ingresaste una cadena de texto`);

  if (typeof nombre !== "string") return console.error(`La cadena proporcionada no es un una cadena de texto valida`);

  // \s espacio en blanco, g es para todos los miembros
  // ^ no puede haber nada antes, $ no puede haber nada despues
  let regex = /^[A-Za-z\s]+$/g.test(nombre);
  
  return (regex) // si cumple
    ? console.info(`${nombre} es un nombre valido`)
    : console.warn(`${nombre} no es un nombre valido`);
}

validarNombre();
validarNombre(7);
validarNombre(3);
validarNombre("Jhon Mircha");
validarNombre("Jhon Mircha, 37");
validarNombre("Luis Ramos,19");

console.clear();

//----------------------------------
// 20) Programa una función que valide que un texto sea un email\
//  válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

const validarEmail = ( email = "") => {
  if (!email) return console.warn(`No ingresaste un email`);

  if (typeof email !== "string") return console.error(`El correo proporcionado no es un una cadena de texto valida`);

  // i: ignore case
  let regexEmail = /^[a-z0-9]+(\.[a-z0-9]+)*@[a-z0-9]+(\.[a-z0-9]+)*(\.[a-z]{2,15})$/i.test(email);
  
  return (regexEmail) // si cumple
    ? console.info(`${email} es un email valido`)
    : console.warn(`${email} no es un email valido`);
}

validarEmail();
validarEmail(34);
validarEmail("jon,mir,cha@gmail;");
validarEmail("jonmircha@gmail.com");

console.clear();


// --------------------------------
// TAREA fusion 19, 20: hacer una sola funcion que valide tanto nombre como e-mail,
// se le enviaria tambien el regex evaluador.

const validarPatron = (cadena = "", patron = undefined) => {
  if (!cadena) return console.warn(`No ingresaste una cadena de texto`);

  if (typeof cadena !== "string") return console.error(`El valor ${cadena} no es un una cadena de texto valida`);

  if (patron === undefined) return console.warn(`No ingresaste un patron a evaluar`);

  // if (typeof patron !== "string") return console.error(`El valor ${patron} no es un una cadena de texto valida`);
  if ( !(patron instanceof RegExp)) return console.error(`El valor "${patron}" ingresado no es una regex valida`);

  const regexPatron = patron.test(cadena);
  
  return (regexPatron)
    ? console.info(`"${cadena}", cumple con el patron ingresado`)
    : console.warn(`"${cadena}", no cumple con el patron ingresado`);
}

// const patronEmail = "/^[a-z0-9]+(\.[a-z0-9]+)*@[a-z0-9]+(\.[a-z0-9]+)*(\.[a-z]{2,15})$/i"; // cadena de texto
const patronEmail = /^[a-z0-9]+(\.[a-z0-9]+)*@[a-z0-9]+(\.[a-z0-9]+)*(\.[a-z]{2,15})$/i; // regex valida
// const patornNombre = "/^[A-Za-z\\s]+$/g";
const patornNombre = /^[A-Za-z\\s]+$/g;

validarPatron("jonmircha@gmail.com");
validarPatron({});
validarPatron("jonmircha@gmail.com", patronEmail);
validarPatron("jonmircha@gmail.com", []);
validarPatron("jonmircha@gmail.com", "cadena invalida hola");
validarPatron("jonmircha@gmail.com", new RegExp(/^[a-z0-9]+(\.[a-z0-9]+)*@[a-z0-9]+(\.[a-z0-9]+)*(\.[a-z]{2,15})$/i));
validarPatron("Jonathan Mircha 19", new RegExp(/^[a-z0-9]+(\.[a-z0-9]+)*@[a-z0-9]+(\.[a-z0-9]+)*(\.[a-z]{2,15})$/i));
validarPatron("jonmircha@gmail", patronEmail);
validarPatron("jonmircha@gmail.com", patornNombre);
// mini 35
validarPatron("jonmircha@gmail", new RegExp("/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/", "i"));
validarPatron("jonmircha@gmail.com", new RegExp("[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})", "i"));
validarPatron("jonmirc{{{ha@gmail", patronEmail);

// regex constructor RegExp() recive dos argumentos, la "cadena regex" y una cadena con "las banderas"