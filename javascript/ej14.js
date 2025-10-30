const operacionesMatematicas = () => {
    const sumar = (a, b) => a + b;
    const restar = (a, b) => a - b;
    const multiplicar = (a, b) => a * b;
    const dividir = (a, b) => {
        if (b === 0) return 'Error: No se puede dividir por cero';
        return a / b;
    };
    //Closure
    return {
        suma: sumar,
        resta: restar,
        multiplicacion: multiplicar,
        division: dividir
    };
};

const misOperaciones = operacionesMatematicas();
const num1 = 10;
const num2 = 5;
const resSuma = misOperaciones.suma(num1, num2);
const resResta = misOperaciones.resta(num1, num2);
const resMulti = misOperaciones.multiplicacion(num1, num2);
const resDivi = misOperaciones.division(num1, num2);
const resError = misOperaciones.division(num1, 0);

const mensaje = `Operaciones con ${num1} y ${num2}:\n
Suma: ${resSuma}
Resta: ${resResta}
Multiplicación: ${resMulti}
División: ${resDivi}
\nPrueba de error:
${resError}`;

alert(mensaje);