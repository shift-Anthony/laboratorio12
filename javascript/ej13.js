function procesarTexto(texto) {
    function limpiarEspacios(cadena) {
        return cadena.replace(/\s+/g, '');
    }
    function contarPalabras(cadena) {
        const textoLimpioParaConteo = cadena.replace(/\s+/g, ' ').trim();
        if (textoLimpioParaConteo === "") return 0;
        return textoLimpioParaConteo.split(' ').length;
    }

    const textoTotalmenteLimpio = limpiarEspacios(texto);
    const numeroDePalabras = contarPalabras(texto);
    return {
        texto_sin_espacios: textoTotalmenteLimpio,
        cantidad_palabras: numeroDePalabras
    };
}


// Ejecucion 
const miTexto = "   Hola    mundo,     esto es un   ejemplo.   ";
const resultado = procesarTexto(miTexto);
const mensajeAlerta = `Texto Sin Espacios: ${resultado.texto_sin_espacios}\nCantidad de Palabras: ${resultado.cantidad_palabras}`;
alert(mensajeAlerta);