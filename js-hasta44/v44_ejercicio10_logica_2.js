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
  constructor({ id, titulo, director, anioEstreno, paisesDeOrigen, generos, calificacionIMDB }) {
    // Validaciones de entrada
    if (!id || !titulo || !director || !anioEstreno || !paisesDeOrigen || !generos || calificacionIMDB === undefined) {
      throw new Error("Faltan datos para crear la película");
    }

    if (typeof id !== 'string' || id.length !== 9 || !/^[A-Za-z]{2}\d{7}$/.test(id)) {
      throw new Error(`El ID "${id}" no es válido`);
    }

    if (typeof titulo !== 'string' || titulo.length > 100) {
      throw new Error(`El título "${titulo}" no es válido`);
    }

    if (typeof director !== 'string' || director.length > 50 || !/^[A-Za-z\s]+$/.test(director)) {
      throw new Error(`El director "${director}" no es válido`);
    }

    if (typeof anioEstreno !== 'number' || anioEstreno < 1000 || anioEstreno > new Date().getFullYear()) {
      throw new Error(`El año de estreno "${anioEstreno}" no es válido`);
    }

    if (!Array.isArray(paisesDeOrigen) || paisesDeOrigen.some(pais => typeof pais !== 'string')) {
      throw new Error(`Los países de origen no son válidos`);
    }

    if (!Array.isArray(generos) || generos.some(genero => typeof genero !== 'string')) {
      throw new Error(`Los géneros no son válidos`);
    }

    if (typeof calificacionIMDB !== 'number' || calificacionIMDB < 0 || calificacionIMDB > 10) {
      throw new Error(`La calificación "${calificacionIMDB}" no es válida`);
    }

    this.id = id;
    this.titulo = titulo;
    this.director = director;
    this.anioEstreno = anioEstreno;
    this.paisesDeOrigen = paisesDeOrigen;
    this.generos = generos;
    this.calificacionIMDB = parseFloat(calificacionIMDB.toFixed(1));
  }

  static get generosAceptados() {
    return [
      "Acción", "Aventura", "Animación", "Biografía", "Comedia", "Crimen", "Documental",
      "Drama", "Familiar", "Fantasía", "Historia", "Horror", "Musical", "Misterio",
      "Romance", "Ciencia Ficción", "Deportes", "Suspenso", "Bélico", "Western"
    ];
  }

  objFichaTecnica() {
    console.info(`==============================
Ficha Técnica
ID: ${this.id}
Título: ${this.titulo}
Director: ${this.director}
Año de Estreno: ${this.anioEstreno}
Países de Origen: ${this.paisesDeOrigen.join(", ")}
Géneros: ${this.generos.join(", ")}
Calificación IMDB: ${this.calificacionIMDB}
==============================`);
  }
}

const datosPeliculas = [
  {
    id: "AB1234567",
    titulo: "La Gran Aventura",
    director: "Carlos PErez",
    anioEstreno: 2020,
    paisesDeOrigen: ["España", "México"],
    generos: ["Acción", "Aventura"],
    calificacionIMDB: 8.5
  },
  {
    id: "CD1234568",
    titulo: "El Misterio del Lago",
    director: "Ana GarcIa",
    anioEstreno: 2018,
    paisesDeOrigen: ["Estados Unidos"],
    generos: ["Misterio", "Suspenso"],
    calificacionIMDB: 7.3
  },
  {
    id: "EF1234569",
    titulo: "El Último Viaje",
    director: "Luis FernAndez",
    anioEstreno: 2021,
    paisesDeOrigen: ["México"],
    generos: ["Drama", "Ciencia Ficción"],
    calificacionIMDB: 9.0
  }
];

const peliculas = datosPeliculas.map(datos => new Pelicula(datos));

peliculas.forEach(pelicula => pelicula.objFichaTecnica());

console.info(Pelicula.generosAceptados);
console.info("Fin del programa");


console.info(`fin del programa`);



/**
 * if (objeto.id === undefined || objeto.titulo === undefined || objeto.director === undefined
      || objeto.anioEstreno === undefined || objeto.paisesDeOrigen === undefined
      || objeto.generos === undefined || objeto.calificacionIMDB === undefined
    ) {
      return console.error(`Todos los valores son obligatorios`);
    }
 */