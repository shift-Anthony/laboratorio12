//funcion flecha para agregar signo de exclamacion
let agregarSigno = (texto) => texto + "!";
//funcion flecha para convertir a mayusculas
let toMayusculas = (texto) => texto.toUpperCase();
//funcion flecha para que reciba dos funciones
let flechaComponerTransformaciones = (texto, funcion1, funcion2) => {
    return funcion1(funcion2(texto));
}
//Ejecucion del codigo
let entrada = prompt("Ingrese un su palabra o frase:");
alert(`${entrada} se convirtio en ${flechaComponerTransformaciones(entrada, toMayusculas, agregarSigno)}`);