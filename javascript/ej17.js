const saludo = (nombre = "Amigo") => `¡Hola, ${nombre}!`;


//Ejecucion del codigo
const nombreIngresado = prompt("¿Cuál es tu nombre?");
if (nombreIngresado) alert(saludo(nombreIngresado));
//Si no ingresa nada por defecto sale amigo
else alert(saludo());