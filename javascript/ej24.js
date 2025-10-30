const crearSecuencia = (inicio, paso) => {
  let valorActual = inicio;
  return () => {
    const valorADevolver = valorActual;
    valorActual += paso;
    return valorADevolver;
  };
};

// Ejecuccion del codigo
const secuencia = crearSecuencia(2, 3);
alert(
  `Secuencia (inicio 2, paso 3):\n\n` +
  `Llamada 1: ${secuencia()}\n` +
  `Llamada 2: ${secuencia()}\n` +
  `Llamada 3: ${secuencia()}\n` +
  `Llamada 4: ${secuencia()}`
);
const secuencia2 = crearSecuencia(10, 5);
alert(
  `Secuencia (inicio 10, paso 5):\n\n` +
  `Llamada 1: ${secuencia2()}\n` +
  `Llamada 2: ${secuencia2()}\n` +
  `Llamada 3: ${secuencia2()}`
);