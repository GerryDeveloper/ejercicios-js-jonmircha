
/**
las palabras reservadas break y continue no se pueden utilizar en metodos de los arreglos

  sino que estan destinadas para ser usadas en estructuras de control for, while, do-while, 
  if, switch-case, etc.

*/

const array = [1,2,3,4,5,6,7,8,9,0];

for (let i = 0; i < array.length; i++) {

  if (i === 5) //with ; the console line doesn't show off
    break;
  console.log(`array[${i}] = ${array[i]}`);
}

console.log("\n");
for (let i = 0; i < array.length; i++) {

  if (i === 5) //with ; the console line doesn't show off
    continue;
  console.log(`array[${i}] = ${array[i]}`);
}

// functions

function printPairs() {
  let num = 1;
  for (let i = 0; i < 20; i++) {
    if (num % 2 === 0) {
      console.log(num);
      num++;
    } else {
      num++;
      continue;
    }
  }
}
function printEven() {
  let num = 1;
  for (let i = 0; i < 20; i++) {
    if (num % 2 !== 0) {
      console.log(num);
      num++;
    } else {
      num++;
      continue;
    }
  }
}

//printPairs();
printEven();