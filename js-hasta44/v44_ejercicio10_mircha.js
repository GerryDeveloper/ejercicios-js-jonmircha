// 27) Programa una clase llamada Pelicula.

//   La clase recibirá un objeto al momento de instanciarse con \
//   los siguentes datos: id de la película en IMDB, titulo, \
// director, año de estreno, país o países de origen, géneros y calificación en IMBD.
    //  * - Todos los datos del objeto son obligatorios. XX
    //  * - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
    //      7 restantes números. XX
    //  * - Valida que el título no rebase los 100 caracteres. XX
    //  * - Valida que el director no rebase los 50 caracteres. XX
    //  * - Valida que el año de estreno sea un número entero de 4 dígitos. XX
    //  * - Valida que el país o paises sea introducidos en forma de arreglo. XX
    //  *  - Valida que los géneros sean introducidos en forma de arreglo. XX
    //  * - Valida que los géneros introducidos esten dentro de los géneros 
    //      aceptados*. XX
    //  * - Crea un método estático que devuelva los géneros aceptados*. XX
    //  * - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    //     decimal de una posición. XX
    //  * - Crea un método que devuelva toda la ficha técnica de la película. XX
        //   - Apartir de un arreglo con la información de 3 películas genera 3 
        //     instancias de la clase de forma automatizada e imprime la ficha técnica 
        //     de cada película.

// * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, \
// Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, \
// Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, \
// Sport, Talk-Show, Thriller, War, Western.


class Pelicula {
  constructor( {id, titulo, director, estreno, pais, generos, calificacion}) {
    // cuando instancio le digo, creare un atributo de mi clase this.id que sera igual a loque
    // el usuario me manda en el parametro id de este objeto destructurado, y asi con todos
    this.id = id;
    this.titulo = titulo;
    this.director = director;
    this.estreno = estreno;
    this.pais = pais;
    this.generos = generos;
    this.calificacion = calificacion;

    this.validarIMDB(this.id);
    this.validarTitulo(this.titulo);
    this.validarDirector(director);
    this.validarEstreno(estreno);
    this.validarPais(pais);
    this.validarGeneros(generos);
    this.validarCalificacion(calificacion);
  }

  // get y set se consideraran atributos static aunque sean metodos
  // da este erros si se manda llamar asi: listaGeneros()
  // TypeError: Pelicula.listaGeneros is not a function

  static get listaGeneros() {
    
    return [
      "Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", 
      "Crime", "Documentary", "Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", 
      "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", 
      "Sport", "Talk-Show", "Thriller", "War", "Western"
    ];
  }
  // metodos

  static generosAceptados () {
    return console.info(`Los generos aceptados son: ${Pelicula.listaGeneros.join(", ")}`);
  }

  // metodos genericos
  validarCadena (propiedad, valor) { // recive nombre propiedad y valor
    if ( !valor ) return console.warn(`${propiedad} "${propiedad}" esta vacio`);

    if ( typeof valor !== "string") return console.error(`${propiedad} "${valor} ingresado,\
      NO es una cadena de texto`);

    return true; // si las dos validaciones cumplen
  }

  validarLongitudCadena (propiedad, valor, longitud) {
    if ( valor.length > longitud) 
      return console.error(`${propiedad} "${valor}" excede el numero de caracteres \
    permitidos (${longitud})`);

    // si NO se cumple manda return true
    return true;
  }

  validarNumero (propiedad, valor) {
    if (!valor)
      return console.warn(`${propiedad} "${valor}" esta vacio`);

    if (typeof valor !== "number")
      return console.error(`${propiedad} ${valor} ingresado, NO es un numero`);

    return true; // si todo es correcto
  }

  validarArreglo (propiedad, valor) {
    if (!valor ) return console.warn(`${propiedad} "${valor}" esta vacio`); // no introduce array

    if ( !(valor instanceof Array))
      return console.error(`${propiedad} ${valor} ingresado, NO es un arreglo`);

    if (valor.length === 0) return console.error(`${propiedad} ${valor} no tiene datos`);

    for (let cadena of valor) {
      if (typeof cadena !== "string")
        return console.error(`El valor ${cadena} ingresado, NO es una cadena de texto`);
    }

    return true;
  }


  // metodos especificos
  // id peli reocky: tt0075148
  // the man who laughs: tt0019130
  // end game: tt4154796
  // mr. Robot: tt4158110
  validarIMDB (id) {
  if (this.validarCadena("IMDB id", id))
    if ( !(/^([a-z]){2}([0-9]){7}$/.test(id))) // cuando no cumpla la expression retorna true, y entra en el return, osea sale
      return console.error(`IMDB id "${id}" no es valido, debe tener 9 catacteres, los dos primeros\
        letras minusculas, los 7 restantes numeros`);   
  }

  validarTitulo (titulo) {
    if (this.validarCadena("Titulo", titulo))
      if (this.validarLongitudCadena("Titulo",titulo, 100));
  }
  validarDirector (director) {
    if (this.validarCadena("Director", director))
      if (this.validarLongitudCadena("Director",director, 50));
  }

  validarEstreno(estreno) {
    if (this.validarNumero("Anio de estreno", estreno))
      if ( !(/^([0-9]{4})$/.test(estreno))) 
        return console.error(`Anio de estreno "${estreno}" no es valido, debe ser un numero de 4 digitos`);  
  }

  validarPais(pais) {
    this.validarArreglo("Pais", pais);
  }

  validarGeneros(generos) {
    if (this.validarArreglo("Generos", generos)) {
      for (let genero of generos ) { // let iterator of object
        // console.log( genero, Pelicula.listaGeneros.includes(genero) );
        if ( !Pelicula.listaGeneros.includes(genero)) {
          console.error(`Genero(s) incorrecto(s): ${generos.join(", ")}`);
          Pelicula.generosAceptados();
        }
      }
    }
  } // validar generos

  validarCalificacion(calificacion) {
    if (this.validarNumero("Calificacion", calificacion))
      return (calificacion < 0 || calificacion > 10) 
        ? console.error(`La calificacion tiene que estar en un rango entre 0 y 10`)
        : this.calificacion = calificacion.toFixed(1); // redondemos a 1
  }

  fichaTecnica() {
    console.info(
      `Ficha Tecnica:
      Titulo:${this.titulo}
      Director: ${this.director}
      Anio: ${this.estreno}
      Pais: ${this.pais.join("-")}
      Generos: ${this.generos.join(", ")}
      Calificacion: ${this.calificacion}
      IMBD id: ${this.id}`);
  }

} // end of class Pelicula


// Pelicula.generosAceptados();

// const peli = new Pelicula({
//   id: "tt1234567",
//   titulo: "Titulo de la Peli",
//   director: "Director de la Peli",
//   estreno: 2022,
//   pais: ["Mexico", "Francia"],
//   generos: ["Comedy", "Sport"],
//   calificacion: 7.789
  
// });

// peli.fichaTecnica();

// ------------------------------ ultimo inciso
const misPelis = [
  {
    id: "tt1234567",
    titulo: "Into the Wild",
    director: "Sean Penn",
    estreno: 2007,
    pais: ["USA"],
    generos: ["Adventure", "Biography", "Drama"],
    calificacion: 8.1
  },
  {
    id: "tt1234568",
    titulo: "Rochy Balboa",
    director: "Sylvester Stallone",
    estreno: 2006,
    pais: ["USA"],
    generos: ["Action", "Drama", "Sport"],
    calificacion: 7.1
  },
  {
    id: "tt1234569",
    titulo: "The Dark Knight",
    director: "Christofer Nolan",
    estreno: 2008,
    pais: ["USA", "UK"],
    generos: ["Action", "Crime", "Drama"],
    calificacion: 9.0
  }
];

// misPelis.forEach( el => new Pelicula(el).fichaTecnica() );

misPelis.forEach( function (el) {
  new Pelicula(el).fichaTecnica();
})

/** 
 * comentarios de mircha
 * 
 * - title, director, IMDB codigo, estos 3 datos son cadenas de texto
 *  - validar que no se valla vacio
 *  - que lo que el usuario introduzca sea tipo stirng
 *  - validar que no valla vacia se hara con un metodo(), se mandara llamar
 *  cada que querramos evaluar si una cadena esta vacia
 * 
 *  - la clase recivira un objeto
 *  - recordar que al momento de instanciar, la clase debe recivir un objeto
 * 
 *  - como el constructor recive un objeto de datos
 *  en el constructor, lo que nos conviene es hacer una destructuracion de esos valores
 * 
 *  - ningun campo debe irse vacio
 *  - el IMDB es un string
 * 
 *  - primero van los metodos mas genericos, luego los metodos mas especificos
 * 
 *  - GET & SET
 *  - los metodos getters y setters javascript los trabaja como si fueran atributos
 *  - si se declara el arreglo con los generos ya preestablecidos en el constructor de 
 *  la clase, estos solo estarian disponibles en el momento que se genera una instancia
 *  por tal motivo se creara el metodo get estatico de la clase Pelicula.
 *  - este metodo contendra los valores de los generso y javascript considera a estos
 *  metodos (getters y setters) javascript los trabaja como si fueran atributos
 * 
 *  - no necesitan ser static, pero para este caso particular si
 * 
 *  - ojo, se consideran atributos al usar la palabra SET o GET, sino solo son metodos
 *  static de la clase
 * 
 * 
 *  - atributos de prueba en instancia Peli:
 * 
 * // id: 23,
  // id: "hola"
 * // calificacion: 23.789
  // calificacion: "23.789" // not a number
  // generos: ["Comedia", "Humor Negro", "Sport"]
  // pais: ["Mexico",8]
  // pais: []
  // pais: 23
  // estreno: 20201
  // estreno: "2020"
  // director: "12345678901234567890123456789012345678901234567890z" // 50 limit for director
  // titulo: "1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890"
  // titulo: {} // Titulo "[object Object] ingresado,      NO es una cadena de texto
  // titulo: "el Resplandor",
  // director: "Nombre Director"
 */
