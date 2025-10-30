function crearContador(valorInicial) {
  let contador = valorInicial;
  const incrementar = () => {
    contador++;
    return contador;
  };

  const resetear = () => {
    contador = valorInicial;
    return contador;
  };

  return {
    incrementar,
    resetear
  };
}

// Ejecucion
const miContador = crearContador(5);
alert(
  `Valor inicial: 5\n` +
  `Incremento 1: ${miContador.incrementar()}\n` +
  `Incremento 2: ${miContador.incrementar()}\n` +
  `Reseteo: ${miContador.resetear()}\n` +
  `Incremento 3: ${miContador.incrementar()}`
);