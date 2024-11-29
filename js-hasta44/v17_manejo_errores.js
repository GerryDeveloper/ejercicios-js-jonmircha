
/**manejo de errores en javascript
 * 
 *  -usaremos el try-catch-finally
 *  -nos permite evauluar fragmentos de codigo
 * 
 */
// console.log("hola mundo");

function usoTryCatch() {
  
  try {
    console.log(`En el try se agrega el codigo a evaluar.`);
    variableIenxistente;
    console.log(`Segundo mensaaje en el try.`);
  } catch (error) {
    console.log(`catch, captura cualquier error surgido o lanzado en el try`);
    console.log(`Imprime informacion del error = ${error}`);
    console.log(error);
  } finally {
    console.log(`El bloque finally se ejecutara siempre al final de un bloque try-catch`);
  }

}

function exampleTryCatch1() {

  try {
    let number = 10;
    number = "ABC";
    number = 10;
    if (isNaN(number)) {// if isNaN() return not a number = true
      throw new Error("*****El caracter introducido no es un numero.*****");
    }

    console.log(`Multiplicamos al numero ${number} por si mismo: ${number * number}`);
  } catch (error) {
    console.log(`Se produjo el siguiente error: ${error}`);

  } finally {
    console.log("Este codigo esta en el finally, se ejecuta siempre");
    
  }
}

// funciton calls
//usoTryCatch();
exampleTryCatch1();

