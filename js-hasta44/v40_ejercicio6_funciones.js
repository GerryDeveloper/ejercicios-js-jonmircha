

export const decimalBinario = (numero = undefined) => {

  if (numero === undefined) return console.warn(`No ingresaste el primer numero`);

  if (typeof numero !== "number") return console.error(`El valor ingresado es invalido`);

  let binarioStr = "";
  
  while (numero > 0) {
    // console.info(numero%2, numero/2);
    binarioStr = (numero % 2) + "" + binarioStr;
    numero = Math.floor(numero / 2);
  }
  return binarioStr;
}