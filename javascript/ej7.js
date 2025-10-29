//funcion expresada para calcular el promedio de tres notas
let promedio = function(n1,n2,n3) {return (n1 + n2 + n3) / 3;}

//Ejecucion del codigo  
let n1 = parseFloat(prompt("Ingrese la nota 1:"));
let n2 = parseFloat(prompt("Ingrese la nota 2:"));
let n3 = parseFloat(prompt("Ingrese la nota 3:"));
alert(`El promedio de las notas ${n1}, ${n2} y ${n3} es: ${promedio(n1,n2,n3)}`);
