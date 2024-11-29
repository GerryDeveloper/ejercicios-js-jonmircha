

const set = new Set([1,2,3,4,5,true, false, false,
  {}, {},
  "hola", "HOLA"
  // los [] indican que es una estructura de datos
]);

console.log(set); // indica que es un elemento de 11 posiciones
console.log(set.size);

const set2 = new Set();

// metodo add para agredar elementos
set2.add(1);
set2.add(2);
set2.add(2);
set2.add(3);
set2.add(true);
set2.add(false);
set2.add(true);
set2.add({});

console.log(set2);
console.log(set2.size);
// recorrer elementos

console.log("Recorriendo Set");
for (item of set) {
  console.log(item);
}

console.log("\nRecorrendo Set2");
set2.forEach(item => console.log(item));

// acceder a propiedaddes
// console.log(set[1]); // esto no esta implementado: undefined

let arr = Array.from(set);
console.log( arr[0]);
console.log( Array.from(set)[5]);
// esto vuelve un objeto en un iterable de tipo array y se comporta como uno

// C:\Users\HP\Documents\programacion\javascript\curso-js-mircha\v51_sets.js