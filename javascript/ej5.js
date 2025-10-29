function esMultiplo(a, b) {
    if (a % b === 0) return true
    else return false;
}
//Ejecucion del codigo
let numero;
numero = prompt("Ingrese el numero");
numero2 = prompt("Ingrese el numero 2");
if (esMultiplo(numero, numero2) !== true) alert(`El numero ${numero} no es multiplo de ${numero2}`);
else alert(`El numero ${numero} es multiplo de ${numero2}`);