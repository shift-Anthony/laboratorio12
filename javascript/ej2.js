function areaRectangulo(a, b) {
    return (a * b);
}
let altura = parseFloat(prompt("Ingrese la altura del rectangulo:"));
let base = parseFloat(prompt("Ingrese la base del rectangulo:"));
alert(`Altura: ${altura},Base: ${base}\n
    El area del rectangulo es: ${areaRectangulo(altura, base)}`);
