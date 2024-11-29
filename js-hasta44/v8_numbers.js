
/**
 * NUMBERS in JAVASCRIPT
 * 
 * METODOS CLASE NUMBER
 * 
 *  -parseInt()
 *  -parseFloat() -> Number.parseFloat()
 * 
 * CONSIDERACIONES
 *  -se recomienda usar librerias que ya tengan mas optimizado el asunto
 *  de los numeros, como son los Float
 */

let a = 2;
let b = new Number(1);
let c = 7.19;
let d = "5.6";

console.log(typeof c, typeof d);
console.log(a,b);
console.log( c.toFixed(1) ); // typeof -> string
console.log(c.toFixed(5) );
console.log(parseInt(c) );
console.log(parseFloat(c) );

console.log(a + b);
console.log(c + parseInt(d) ); // d es cadena, por tanto concatenara como Strings
console.log(c + parseFloat(d) ); 
console.log( (c + Number.parseFloat(d)).toFixed(6) ); 
console.log("***")
console.log(c + Number.parseInt(d) );
console.log(c + Number.parseFloat(d) );


