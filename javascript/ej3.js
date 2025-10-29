function esPar(num) {
    if (num % 2 !== 0) {
        return false
    }
    return true;
}
let numero;
numero = prompt("Ingrese el numero");
alert(`El numero ${numero} es par: ${esPar(numero)}`);