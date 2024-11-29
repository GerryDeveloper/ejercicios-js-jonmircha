/**
 * FUNCIONES
 * 
 *  -es un bloque de codigo autocontenido independiente al scope global
 *  -se define una sola vez
 *  -se puede ejecutar en cualquier momento
 * 
 *  -puede o no recivir parametros
 *  
 *  -puede devolver o no valores
 * 
 *  -las funciones en javascript tambien se consideran objetos
 * 
 *  -en el argot de las cuestiones tecnicas de javascript se dice que 
 *  las funciones son "ciudadanos de primera clase"
 * 
 *  -las funciones son muy poderosas en javascript
 *  
 *  -puedes asignarlas como valor
 * 
 *  -puedes retornar la ejecucion de una funcion adicional
 *  -se pueden retornar como argumentos
 * 
 *  -se pueden retornar como valores
 * 
 *  -desde EcmaScript 2015
 *      -las arrow => functions son añadidas (?
 *  -dos maneras de declarar una funcion:
 *      -FUNCIONES DELCARADAS ***
 *      -FUNCIONES EXPRESADAS ***
 * 
 *  +Una funcion es un bloque de codigo,
 *  autocontenido, que se puede definir una
 *  vez y ejecutar en cualquier momento.
 *  Opcionalmente, una funcion puede aceptar
 *  parametros y devolver un valor.
 * 
 *  Las funciones en JavaScript son objetos,
 *  un tipo especial de objetos:
 * 
 *  Se dice que las funciones son ciudadanos de
 *  primera clase porque pueden asignarse a un
 *  valor, y pueden pasarse como argumentos y
 *  usarse como un valor de retorno.
 * 
 *  -se pueden añadir valores por defecto a los 
 *  PARAMETROS de una funcion
 * 
 *  **JAVASCRIPT es un lenguaje INTERPRETADO
 * 
 *  -HOISTING
 *  -cuando declaras una varialbe "var" la sube al siguiente
 *  hambito de variables, hasta 2015 era global del archivo
 *  o por funciones.
 *  -esto pasa igualmente con las "FUNCIOENS DECLARADAS"
 *  del tipo function nombreFuncion() {}
 *  el hoisting aplica a este tipo de funciones.
 * 
 *  FUNCIONES COMO VARIABLES (F. EXPRESADA)
 * 
 *  FUNCIONES ANÓNIMAS
 *      
 *  -funcioens sin nombre
 *  -ademas son asignadas a una variable o const
 * 
 *  BUENAS PRACTICAS
 *  -declarar las funciones de maera expresada, hace que evites justamente
 *  errores de compilacion por tener mal acomodado tu codigo
 *  -al tener todas las funciones expresadas, te fuerzas a 
 *  no utilizarlsa hasta que previamente hayan sido inicializadas.
 *  
 */

// Funcion Declarada

function estoEsUnaFuncion() {
    console.log("uno");
    console.log("dos");
    console.log("tres");
}

//Invocacion de funcion

    // estoEsUnaFuncion();
    // estoEsUnaFuncion();
    // estoEsUnaFuncion();
    // estoEsUnaFuncion();

function unaFuncionQueDevuelveValor() {
    console.log("uno");
    // return 19; // se corta hasta aqui
    console.log("dos");
    console.log("tres");
    return "La funcion ha retornado una cadena de texto"
}

// let valorDeFuncion = unaFuncionQueDevuelveValor();
// console.log(valorDeFuncion)

// como hacer que una vuncioan reciva valores

function saludar(nombre = "desconocido", edad = 0) { // parametros, = valores por defecto
    console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años.`);
}

// saludar("Mocchi", 7);
// saludar();

funcionDeclarada();

// funciones DECLARADAS *** VS funciones EXPRESADAS ***
function funcionDeclarada() {
    console.log("Esto es una funcion declarada, puede invocarse en \
        cualquier parte de nuestro código, incluso antes de que la \
        cuncion sea declarada.");
}

funcionDeclarada();

// funciones ANÓNIMAS
// funcioens EXPRESADAS utilizar "const" de preferencia

// funcionExpresada();

// no es necesario poner el nombre de la funcion nombreFuncion()...
// puesto que el nombre es el que le dimos a la variable
const funcionExpresada = function () {
    console.log("Esto es una funcion EXPRESADA *** es decir,\
        una funcion que se le ha asignado como valor\
        a una variable, si invocamos esta función antes de\
        su definición JS nos dirá... (Cannot access 'funcionExpresada' before initialization)");
}

funcionExpresada();

