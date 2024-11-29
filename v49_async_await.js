/**
 * FUNCIONES ASINCRONAS
 * 
 * - van a esperar a que algo se cumpla para poder seguir ejecutando 
 *  el proceso que estemos trabajando en ese momento
 * 
 * - las funciones asincronas NO vienen a reemplazar las promesas
 *  sino a trabajar con ellas
 * - las Promisses si vinieron a reemplazar las callbacks() (hasta
 *  cierto punto), pues se podria decir que es una mejora de las mismas
 * 
 * - las funciones asyncronas generalmente SON DADAS DE UNA PROMISE
 * 
 * - recuerda que hay dos maneras de crear funciones en javascript
 *    FUNCION DECLARADA
 *    FUNCION EXPRESADA
 * 
 * - el motivo del "await" es que espere a que la funcin asyncrona
 *  devuelva el valor, pues como vimos en el ejemplo
 *  retornaba undefined, lo que da lugar a errores.
 * 
 * - el EVENT-LOOP de javascript es 100% asyncrono
 * 
 */


// funcion elevado al cuadrado construida a manera de promesa
// funcion asincrona
function cuadradoPromise (value) {
  if (typeof value !== "number")
    return Promise.reject(`Error, el valor ${value} ingresado no es un numero`);

  return new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve({
        value,
        result: value * value
      })
    }, 0 | Math.random() * 1000);
  });
}

// como es una funcion asincrona?

// funciona asyncrona declarada
async function funcionAsyncronaDeclarada () {
  try {
    console.log( "Inicio de Async Function");
    let obj = await cuadradoPromise(0);
    console.log(`Async Function: ${obj.value} ${obj.result}`);

    obj = await cuadradoPromise(1);
    console.log(`Async Function: ${obj.value} ${obj.result}`);

    
    obj = await cuadradoPromise(2);
    console.log(`Async Function: ${obj.value} ${obj.result}`);

    
    obj = await cuadradoPromise("3");
    console.log(`Async Function: ${obj.value} ${obj.result}`);

    
    obj = await cuadradoPromise(4);
    console.log(`Async Function: ${obj.value} ${obj.result}`);

    
    // obj = await cuadradoPromise("5");
    obj = await cuadradoPromise(5);
    console.log(`Async Function: ${obj.value} ${obj.result}`);
  } catch (err) {
    // console.error(`Este fue el error: ${err}`);
    console.error(err);
  }
}

funcionAsyncronaDeclarada();


// funcion expresada: arrow function
const funcionAsyncronaExpresada = async () => {
  try {
    console.log( "Inicio de Async Function");
    let obj = await cuadradoPromise(6);
    console.log(`Async Function: ${obj.value} ${obj.result}`);

    obj = await cuadradoPromise(7);
    console.log(`Async Function: ${obj.value} ${obj.result}`);

    
    obj = await cuadradoPromise(8);
    console.log(`Async Function: ${obj.value} ${obj.result}`);

    
    obj = await cuadradoPromise(8);
    console.log(`Async Function: ${obj.value} ${obj.result}`);

    
    obj = await cuadradoPromise("9");
    console.log(`Async Function: ${obj.value} ${obj.result}`);

    obj = await cuadradoPromise(10);
    console.log(`Async Function: ${obj.value} ${obj.result}`);
  } catch (err) {
    console.error(err);
  }
}

funcionAsyncronaExpresada();