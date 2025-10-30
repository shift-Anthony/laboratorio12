const media = (...numeros) => {
  if (numeros.length === 0) return 0;
  const suma = numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
  return suma / numeros.length;
};


//Ejecucion del codigo
alert(
  `La media de (5, 10, 15) es: ${media(5, 10, 15)}\n` +
  `La media de (1, 2, 3, 4) es: ${media(1, 2, 3, 4)}\n` +
  `La media de (100) es: ${media(100)}\n` +
  `La media sin números es: ${media()}`
);