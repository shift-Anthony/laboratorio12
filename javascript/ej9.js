//funcion expresada para descuento
let calcularDescuento = function (precio, porcentaje) {
    let precio_Descuento = precio - ((precio * porcentaje) / 100);
    return precio_Descuento;
}

//Ejecucion del codigo  
let precioTotal = (prompt("Ingrese el precio del producto:"));
let descuento = (prompt("Ingrese el porcentaje de descuento:"));
alert(`El precio final del producto que costaba ${precioTotal}, con un descuento del ${descuento}% es ahora: ${calcularDescuento(precioTotal, descuento)}`);