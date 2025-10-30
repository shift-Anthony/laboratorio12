//funcion flecha para saber si espositivo
let esPositivo = (num) => {
    if (num > 0) return `${num} es un número positivo.`;
    else if (num === 0) return `El número es cero. ni positivo ni negativo.`;
    return `${num} no es un número positivo.`;
}

//Ejecucion del codigo
let numero = parseInt(prompt("Ingrese un número:"));
alert(esPositivo(numero));