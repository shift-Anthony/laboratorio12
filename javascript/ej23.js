const potencia = (base, exponente) => {
    if (exponente === 0) return 1;
    if (exponente > 0) return base * potencia(base, exponente - 1);
    if (exponente < 0) return 1 / potencia(base, -exponente);
};

// Ejecucion del codigo
alert(
    `5 elevado a 3 es: ${potencia(5, 3)}\n` +
    `2 elevado a 4 es: ${potencia(2, 8)}\n` +
    `9 elevado a 0 es: ${potencia(9, 0)}\n`
);