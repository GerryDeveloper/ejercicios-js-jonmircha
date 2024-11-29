// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

const aleatorio = () => console.info(Math.round((Math.random() * 100) + 500));

aleatorio();
aleatorio();
aleatorio();
aleatorio();
aleatorio();

console.clear();

// -------------------
// 10) Programa una función que reciba un número y evalúe si es capicúa o no\
//  (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

const capicua = (numero = 0) => { // si numero no ha sido definido, 0 tiende a falso
  if (!numero) return console.warn(`No ingresaste un numero`);

  if (typeof numero !== "number") return console.error(`El valor ${numero} NO es un numero`);

   // javascript es debilmente tipado
   // con parseInt() o parseFloat() para tomar en cuenta las partes decimales

   numero = numero.toString();
   let alReves = numero.split("").reverse().join("");

   return (numero === alReves) 
   ? console.info(`Si es capicua. Numero original ${numero}, numero al reves ${alReves}`)
   : console.info(`No es capicua. Numero original ${numero}, numero al reves ${alReves}`);
  
}

capicua();
capicua("2002");
capicua({});
capicua(1919);
capicua(1991);
capicua(2002);
capicua(18.99);
capicua(212.212);

console.clear();
// -------------------
// 11) Programa una función que calcule el factorial de un \
// número (El factorial de un entero positivo n, se define como el producto de \
//   todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

const factorial = (numero = undefined) => {
  if (numero === undefined) return console.warn(`No ingresaste un numero`);

  if (typeof numero !== "number") return console.error(`El valor ${numero} ingresado, NO es un numero`);

  if (numero === 0) return console.info(`El factorial de ${numero} es 1`);

  if (Math.sign(numero) === -1) return console.error(`El numero no puede ser negativo`);

  let factorial = 1;

  for (let i = numero; i > 1; i--) {
    // factorial = factorial * i;
    factorial *= i;
  }
  return console.info(`El factorial de ${numero} es ${factorial}`);
}

factorial("22");
factorial({});
factorial([]);
factorial(-99);
factorial(-1);
factorial(0);
factorial(1);
factorial(2);
factorial(3);
factorial(4);
factorial(5);
factorial(6);