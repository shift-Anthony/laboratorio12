//funcion expresada para mayusculas
let convertiraMayusculas = function (texto) {
    let mayus = ""
    for (let i in texto) mayus = mayus + texto[i].toUpperCase();
    return mayus;
}

//Ejecucion del codigo  
let minuscula = (prompt("Ingrese el texto :"));
alert(`Texto ingresado: ${minuscula} es ahora : ${convertiraMayusculas(minuscula)}`);