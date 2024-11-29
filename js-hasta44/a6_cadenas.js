

/**
 * un OBJETO
 *  -es una coleccion de informacion en JS
 *  -tiene PROPIEDADES/atributos
 *  son propiedades, caracteristicas o atributos que definen al objeto.
 * 
 *  -los METODOS son acciones que realiza el objetos hace.
 * 
 *  -los metodos terminan con (), los atributos no
 *  -los metodos pueden o no recivir parametros
 * 
 * 
 * NEW 
 *  -permite crear un objeto nuevo de un cierto tipo de dato
 * 
 * 
 * TIPOS DE DATOS
 *  cada tipo de dato tiene sus 
 * 
 *  -propiedades: caracteristicas
 *  -metodos: accioens que puede realizar
 */

// cadenas de texto aka Strings

let nombre = "jhon";
let apellido = 'mircha';
let saludo = new String("hola Mundo");
let lorem = "          Lorem ipsum dolor sit am             "

console.log(nombre.length, apellido.length, 
    saludo.length,
    nombre.toLocaleLowerCase(),
    apellido.toUpperCase(),
    lorem.includes("Lorem"),
    lorem.includes("luis"),
    lorem,
    lorem.trim() // quita espacios en blanco al inicio y al final
    );

console.log(lorem.trim().split(" ") )

