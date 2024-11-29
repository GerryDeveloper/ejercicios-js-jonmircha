
// 18) Programa una función que dada una cadena de texto cuente el \
// número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
// 19) Programa una función que valide que un texto sea un nombre \
// válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
// 20) Programa una función que valide que un texto sea un email\
//  válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
//-------------------------------------------------------------------

// 18) Programa una función que dada una cadena de texto cuente el \
// número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

const contarVocales = (word = undefined) => {
  if (word === undefined) return console.warn(`No ingresaste la palabra para contar vocales`);

  if (typeof word !== "string") return console.error(`La cadena proporcionada no es un string`);

  // const regexOnlyAlpha = /^[a-zA-Z]+$/;
  // console.info(regexOnlyAlpha.test(word), word);

  // if (!regexOnlyAlpha.test(word)) {
  //   return console.warn("La palabra ingresada contiene números o caracteres no alfabéticos, \
  //     ingrese solo caracteres alfabéticos.");
  // } else {
  //   return console.log("La palabra es válida: contiene solo caracteres alfabéticos.");
  // }
  word = word.toLowerCase();
  // let regexVowels = /^[aeiouAEIOU]+$/,
  let regexVowels = /^[aeiou]$/,
    vowels = 0,
    consonants = 0;

    console.info("esto es una letra: ", word.charAt(2));
    console.info("esto es una letra anumero .charAt(i): ", Number.parseInt(word.charAt(2)));
    console.info("esto es una letra anumero .charCodeAt(i): ", Number.parseInt(word.charCodeAt(2)));

  for (let i = 0; i < word.length; i++ ) {
    

    // if ( regexVowels.test(word.charAt(i))) {
    //   vowels++;
    // }

    if ( parseInt(word.charCodeAt(i)) === 97
      || parseInt(word.charCodeAt(i)) === 101
      || parseInt(word.charCodeAt(i)) === 105
      || parseInt(word.charCodeAt(i)) === 111
      || parseInt(word.charCodeAt(i)) === 117 ) {
        vowels++;
        console.info("vocal: ",word.charAt(i));
    } else if ( (parseInt(word.charCodeAt(i)) >= 98) && (parseInt(word.charCodeAt(i)) <= 122) ) {
      console.info("consonante: ",word.charAt(i));
      consonants++;
    } else {
      console.warn(`Caracter no es ni vocal ni consonante ${word.charAt(i)}`);
    }
    
    // cons 65-90A, 97-122a
    // vocales a97, e101, i 105, o111, u117
    
  }

  return console.info(`La palabra ${word} contiene ${vowels} vocales, y ${consonants} consonantes.\n\n`);
  
}

// contarVocales("aaabbbccc");
contarVocales();
contarVocales(56);
contarVocales("esto es una mugre caden");
contarVocales("Fanny bb");

console.clear();

// 19) Programa una función que valide que un texto sea un nombre \
// válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.

const validarNombre = (nombre = undefined) => {
  if (nombre === undefined) return console.warn(`No ingresaste la palabra para contar vocales`);

  if (typeof nombre !== "string") return console.error(`La cadena proporcionada no es un string`);

  const regexOlnyLetters = /^[a-zA-Z]+( [a-zA-Z]+)?( [a-zA-Z]+)?$/;

  return ( !regexOlnyLetters.test(nombre))
    ? console.warn(`El nombre: "${nombre}" ingresado no es valido`)
    : console.info(`El nombre: "${nombre}" ingresado es valido.`);
}

validarNombre();
validarNombre("Jose");
validarNombre("Jose Luis");
validarNombre("Jose Luis aaa");
validarNombre(90);
validarNombre([]);
validarNombre("aaa bbb");

console.clear();

// 20) Programa una función que valide que un texto sea un email\
//  válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

const validarEmail = (email = undefined) => {
  if (email === undefined) return console.warn(`No ingresaste el correo para contar vocales`);

  if (typeof email !== "string") return console.error(`El valor proporcionado no es un string`);

  const regexEmailValidator = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/

  // const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // blueprint


  return (!regexEmailValidator.test(email))
    ? console.warn(`El correo proporcionado: "${email}" NO es valido`)
    : console.info(`El correo es Valido: ${email}`);

}

validarEmail();
validarEmail("elcorreo@email.com");
validarEmail("elcorreo.@email.com");


