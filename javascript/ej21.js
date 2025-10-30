const filtrarArreglo = (arr, callback) => {
  const resultado = [];
  for (const elemento of arr) {
    if (callback(elemento)) resultado.push(elemento);
  }
  return resultado;
};

//Ejecucion del codigo
const numeros = [1, 2, 3, 4, 5, 6, 7, 8];
//Condiciones
const esPar = (num) => num % 2 === 0;
const esMayorQue5 = (num) => num > 5;
alert(
  `Números originales: [${numeros}]\n\n` +
  `Números pares: [${filtrarArreglo(numeros, esPar)}]\n` +
  `Números mayores que 5: [${filtrarArreglo(numeros, esMayorQue5)}]`
);