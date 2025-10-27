function esPar(num) {
    if (num % 2 !== 0) {
        return false
    }
    return true;
}
do {
    let numero;
    numero = prompt("Ingrese el numero");
    if (isNaN(numero)) alert("Formato Invalido Ingrese de nuevo");
    else if (numero === null) break;
    else alert(`El numero ${numero} es par: ${esPar(numero)}`);

} while (true);