/**
 * Exsiten dos formas para declarar las clases:
 * 
 *  - Declaraciones de Clases
 *  - Expresioines de Clases
 * 
 * - necesitan ser declaradas antes de usarse sino dara un: ReferenceError
 */


// 27) Programa una clase llamada Pelicula.

//   La clase recibirá un objeto al momento de instanciarse con \
//   los siguentes datos: id de la película en IMDB, titulo, \
// director, año de estreno, país o países de origen, géneros y calificación en IMBD.
//   - Todos los datos del objeto son obligatorios. XX
//   - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
//      7 restantes números. XX
//   - Valida que el título no rebase los 100 caracteres. XX
//   - Valida que el director no rebase los 50 caracteres. XX
//   - Valida que el año de estreno sea un número entero de 4 dígitos. XX
//   - Valida que el país o paises sea introducidos en forma de arreglo. XX
//   - Valida que los géneros sean introducidos en forma de arreglo. XX
//   - Valida que los géneros introducidos esten dentro de los géneros 
//      aceptados*. XX
//   - Crea un método estático que devuelva los géneros aceptados*. XX
//   - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
//     decimal de una posición. XX
//   - Crea un método que devuelva toda la ficha técnica de la película. XX
//   - Apartir de un arreglo con la información de 3 películas genera 3 
//     instancias de la clase de forma automatizada e imprime la ficha técnica 
//     de cada película.

//--------------------------------------------------------------------------------
class Pelicula {
  
  constructor(objeto) {

    if (objeto === undefined) return console.warn(`No ingresaste el objeto al constructor`);

    if (objeto.id === undefined) return console.error(`Falto ingresar el id.`);
    if (objeto.titulo === undefined) return console.error(`Falto ingresar el titulo.`);
    if (objeto.director === undefined) return console.error(`Falto ingresar el director.`);
    if (objeto.anioEstreno === undefined) return console.error(`Falto ingresar el anio de estreno.`);
    if (objeto.paisesDeOrigen === undefined) return console.error(`Falto ingresar el pais o paises de origen.`);
    if (objeto.generos === undefined) return console.error(`Falto ingresar el genero o generos de la pelicula.`);
    if (objeto.calificacionIMDB === undefined) return console.error(`Falto ingresar la calificacion en IMDB.`);

    // validaciones
    // id validar
    if (objeto.id.length !== 9) console.error(`El id "${objeto.id}", NO tiene los caracteres necesarios`);
    if (typeof objeto.id !== "string") console.error(`El id ingresado "${id}, NO es una cadena."`);
    const regexAlphabet = /^[A-Za-z]$/;
    if ( ( !regexAlphabet.test(objeto.id[0])) // typeof id[0] !== "string"
      && ( !regexAlphabet.test(objeto.id[1])) )  
      return console.error(`Los dos primeros caracteres de id deben ser caracteres`);

    for (let i = 2; i < objeto.id.length; i++) {
      if ( typeof objeto.id[i] !== "number")
        return console.error(`El valor del id: ${objeto.id[i]}, NO es un numero`);
    }
    // titulo validar
    if (objeto.titulo.length > 100) return console.error(`El tamanio del titulo no puede exceder los 100 caracteres`);

    // director validar
    const regexDirector = /^[A-Za-z ]+$/;
    if ( !regexDirector.test(objeto.director))
      return console.error(`El nombre del director debe ser valido y contener solo letras y espacos`);
    if (objeto.director.length > 50) 
      return console.error(`tamanio del nombre del director debe ser menor a 50 caracteres`);

    // anio estreno validar
    if (typeof objeto.anioEstreno !== "number") 
      return console.error(`El anio estreno debe ser un valor numerico entero`);
    if (objeto.anioEstreno < 1000 ) 
      return console.warn(`El anio de estreno debe tener almenos 4 digitos`);

    // paises origen validar
    const regexPais = /^[A-Za-z ]+$/;
    if (objeto.paisesDeOrigen instanceof Array) return console.warn(`Los paises de origen no son un arreglo`);
    for ( pais of objeto.paisesDeOrigen) {
      if ( typeof pais !== "string"
        && !regexPais.test(objeto.paisesDeOrigen)
      ) return console.error(`Los paises ingresados deben ser cadenas de letras y espacios`);
    }

    // generos validar
    const regexGeneros = /^[A-Za-z ]+$/;
    if (objeto.generos instanceof Array) return console.warn(`Los generos ingresados no son un arreglo`);
    for ( pais of objeto.generos) {
      if ( typeof pais !== "string"
        && !regexGeneros.test(objeto.generos)
      ) return console.error(`Los generos ingresados deben ser cadenas de letras y espacios`);
    }

    // calificacion validar
    if (typeof objeto.calificacionIMDB !== "number") 
      return console.warn(`La calificacion debe ser un entero no es valida`);
    // validamos que sea de 1 decimal
    objeto.calificacionIMDB = parseFloat(objeto.calificacionIMDB.toFixed(1));
    if (objeto.calificacionIMDB < 0 || objeto.calificacionIMDB > 10) {
      console.warn(`la calificacion debe ser entre 0 y 10`);
    }

    // generos aceptados validar
    // const generosDePeliculas = [
    //   "Acción",
    //   "Aventura",
    //   "Animación",
    //   "Biografía",
    //   "Comedia",
    //   "Crimen",
    //   "Documental",
    //   "Drama",
    //   "Familiar",
    //   "Fantasía",
    //   "Historia",
    //   "Horror",
    //   "Musical",
    //   "Misterio",
    //   "Romance",
    //   "Ciencia Ficción",
    //   "Deportes",
    //   "Suspenso",
    //   "Bélico",
    //   "Western"
    // ];
    for ( genero of objeto.generos) {
      if ( !this.generosAceptados.includes(genero.capitalize()))
        return console.warn(`El genero ${genero}, no es valido, ingrese un genero valido`);
    }


    this.id = objeto.id,
    this.titulo = objeto.titulo,
    this.director = objeto.director,
    this.anioEstreno = objeto.anioEstreno,
    this.paisesDeOrigen = objeto.paisesDeOrigen,
    this.generos = objeto.generos,
    this.calificacionIMDB = objeto.calificacionIMDB

    this.generosAceptados = [
      "Acción",
      "Aventura",
      "Animación",
      "Biografía",
      "Comedia",
      "Crimen",
      "Documental",
      "Drama",
      "Familiar",
      "Fantasía",
      "Historia",
      "Horror",
      "Musical",
      "Misterio",
      "Romance",
      "Ciencia Ficción",
      "Deportes",
      "Suspenso",
      "Bélico",
      "Western"
    ];
  }

  // metodo asignado a PROPIEDAD ESTATICA de la clase, no es lo mas recomendado
  // static devuelveGenerosAceptados = function () {
  //   return generosAceptados;
  // }
  static devuelveGenerosAceptados () {
    return this.generosAceptados;
  }

   objFichaTecnica ()  {
    console.info(
      `==============================\nFicha Tecnica\n\n\
      id: ${this.id}\ntitulo: ${this.titulo}\ndirectot: ${this.director}\nanio de estreno: ${this.anioEstreno}\
      \npaises de origen: ${this.paisesDeOrigen}\ngeneros: ${generos}\ncalificacion: ${this.calificacionIMDB}\
      ==============================`);
    return 0;
  }

}

const objetoPelicula = {
  id: "AB0000000",
  titulo: "titulo pelicula",
  director: "director nombre",
  anioEstreno: 1999,
  paisesDeOrigen: ["Mexico","Argentina","Chile"],
  generos: ["terror", "comedia","ciencia ficcion"],
  calificacionIMDB: 7.8
}


// - Apartir de un arreglo con la información de 3 películas genera 3 
//     instancias de la clase de forma automatizada e imprime la ficha técnica 
//     de cada película.

const atributosPeliculas = ["id", "titulo", "director", "anioEstreno","paisesDeOrigen", "generos", "calificacionIMDB"];
const valoresPeliculas = 
["AB1234567","La Gran Aventura","Carlos Pérez",2020,["España", "México"], ["Acción", "Aventura"],8.5,
  "CD1234568", "El Misterio del Lago", "Ana García",2018, ["Estados Unidos"], ["Misterio", "Suspenso"], 7.3,
  "EF1234569", ];

const pelicula1 = new Pelicula({});
const pelicula2 = new Pelicula({});
const pelicula3 = new Pelicula({});
const instanciasPelicula = [pelicula1, pelicula2, pelicula3];

for (let i = 0; i < valoresPeliculas.length; i++) {
  let indexIns = 0;
  let indexAtrib = 0;

  instanciasPelicula [ indexIns ][atributosPeliculas[indexAtrib] = valoresPeliculas[i]];
  indexAtrib++;
  if ( instanciasPelicula[ indexIns ][atributosPeliculas[indexAtrib]] === "calificacionIMDB" ) {
    indexAtrib = 0; // atributos debe resetearse
    indexIns++; // solo son 3 instancias
  }
}


console.info(instanciasPelicula[0]);
console.info(instanciasPelicula[1]);
console.info(instanciasPelicula[2]);
console.info(instanciasPelicula);

console.info(`fin del programa`);



/**
 * if (objeto.id === undefined || objeto.titulo === undefined || objeto.director === undefined
      || objeto.anioEstreno === undefined || objeto.paisesDeOrigen === undefined
      || objeto.generos === undefined || objeto.calificacionIMDB === undefined
    ) {
      return console.error(`Todos los valores son obligatorios`);
    }
 */