const ejecutarOperacion = (fn, x, y) => {
    return fn(x, y);
};
//Ejecucion del codigo
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;

alert(
    `Resultado de Suma (10, 5): ${ejecutarOperacion(sumar, 10, 5)}\n` +
    `Resultado de Resta (100, 30): ${ejecutarOperacion(restar, 100, 30)}\n` +
    `Resultado de Multiplicar (8, 7): ${ejecutarOperacion(multiplicar, 8, 7)}`
);