/**
 * OBJETO DATE
 * 
 *  - todos los metodos de Date te daran la hora local de donde se este ejecutando
 *  - y los metodos UTC te daran la hora cero (London)
 * 
 */

console.log(Date);
console.log(Date()); // es una uncion de codigo nativo y debe ejecutarse asi

let fecha = new Date();
console.log(fecha);
console.log(fecha.getDate()); // day of month
// dias de la semana JavaScript: D L M M J V S -> 0 1 2 3 4 5 6
console.log(fecha.getDay()); // day
console.log(fecha.getMonth()); // month
console.log(fecha.getHours()); // hour
console.log(fecha.getFullYear());
console.log(fecha.getYear()); // years since 1900 ... today
console.log("\nHoras, minutos y segundos");
console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log(fecha.getSeconds());
console.log(fecha.getMilliseconds()); // millisecconds before reach the next second (its not shown in console)
console.log(fecha.toString());
console.log(fecha.toDateString());
console.log("\nHora toLocaleString()");
console.log(fecha.toLocaleString());
console.log(fecha.toLocaleDateString());
console.log(fecha.toLocaleTimeString());
console.log("\ngetTimeZoneOffset");
console.log(fecha.getTimezoneOffset());
console.log("\nObtener los datos de la hora zero (London)");
console.log(fecha.getUTCDate()); // dia del mes, probablemente dia siguiente, dif -6 horas mex to london
console.log(fecha.getUTCHours());
console.log(Date.now()); // te da el instnte que esta sucediendo ahora, un numero largo
// significa cuantos segundos han pasado desde el primero de enero de 1970
// la famosa fecha TIME-STAMP
let compaCumple = new Date(1984, 4, 23); // mes y anio son formato index-array 0,1,2,3...
console.log(compaCumple);
// Date() acepta distintas entradas