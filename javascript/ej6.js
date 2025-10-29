function mayordeTres(a, b, c) {
    const d = 0
    if (a > b) {
        if (a > c) return a;
        else return c;
    }
    else if (a === b && b === c) return d;
    else {
        if (b > c) return b;
        else return c;
    }
}
//Ejecucion del codigo
let numero;
numero = prompt("Ingrese el numero 1");
numero2 = prompt("Ingrese el numero 2");
numero3 = prompt("Ingrese el numero 3");
if (mayordeTres(numero, numero2, numero3) === 0) alert("Los numeros son iguales");
else alert(`El numero mayor entre ${numero}, ${numero2} y ${numero3} es: ${mayordeTres(numero, numero2, numero3)}`);