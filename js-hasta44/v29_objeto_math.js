/**
 * OBJETO MATH
 * 
 * - las calses anteriores vimos objetos que son existentes tanto en el 
 *  javascript de los navegadores como en Node.js como es "console" 
 *  y "date" ambos objetos.
 * 
 *  - objeto Math es un objeto static, osea para utilizarlo tendremos
 *  que llamar al prototipo
 * 
 *  - JavaScript nos provee valores constantes como PI representados en 
 *  mayusculas
 */

console.log(Math);
console.log(Math.PI);
console.log(Math.abs(6.34343434));
console.log(Math.abs(-7.9));
console.log(`Math.ceil(6.6) %d`, Math.ceil(6.6));
console.log(`Math.floor(6.6) %d`, Math.floor(6.6));
console.log(`Math.round(6.499) ${Math.round(6.499)}`);
console.log(Math.sqrt(81));
console.log(Math.pow(2,8));
console.log(Math.sign(-99));
console.log(Math.sign(0));
console.log(Math.sign(100)); // sign indicator
console.log(Math.random());
console.log("Math.floor(Math.random()) = ",Math.floor(Math.random()));
console.log(Math.random() * 1_000);
console.log(Math.floor(Math.random() * 1_000));
console.log(`Math.random() * 1_000 = %d`, Math.random() * 1_000);

