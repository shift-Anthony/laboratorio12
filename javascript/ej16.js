const acumulador = (valorInicial) => {
  let sumaActual = valorInicial;
  return (nuevoValor) => {
    sumaActual += nuevoValor;
    return sumaActual;
  };
};

// ejecucion del codigo
const miAcumulador = acumulador(10);
alert(
  `Valor inicial: 10\n` +
  `Sumo 5 ahora es: ${miAcumulador(5)}\n` +
  `Sumo 3 ahora es: ${miAcumulador(3)}\n` +
  `Sumo 10 ahora es: ${miAcumulador(10)}`
);