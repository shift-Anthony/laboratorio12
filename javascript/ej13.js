function procesarTexto(texto) {

  function limpiarEspacios(cadena) {
    return cadena.replace(/\s+/g, ' ').trim();
  }

  function contarPalabras(cadena) {
    if (cadena === "") {
      return 0;
    }
    return cadena.split(' ').length;
  }

  const textoLimpio = limpiarEspacios(texto);
  const numeroDePalabras = contarPalabras(textoLimpio);

  return {
    texto_original: texto,
    texto_limpio: textoLimpio,
    cantidad_palabras: numeroDePalabras
  };
}


// Ejecucion
const miTexto = "   Hola    mundo,     esto es un   ejemplo.   ";
const resultado = procesarTexto(miTexto);

const mensajeAlerta = `Texto Limpio: ${resultado.texto_limpio}\nCantidad de Palabras: ${resultado.cantidad_palabras}`;

alert(mensajeAlerta);