function calcularPrecioProducto() {
    let continuar = true;

//Se solicita el precio bruto

while (continuar) {
    let precio = Number(prompt("Ingrese el precio de costo del producto en $"));

    if (!isNaN(precio) && precio !== "" && precio !== null) {
        alert(`El precio de costo del producto a calcular es: $${precio}`);
        function calcularIva(precio) {
          return (precio * 0.21);
        }
//Se calcula el iva del producto

    let iva = calcularIva(precio);
    iva =iva.toFixed(2)
    alert(`El iva del producto seleccionado es: $${iva}`); 

    function sumarIva(precio) {
    return (precio + (precio * 0.21));
    }

//sumamos el iva y obtenemos el precio neto
    let precioConIva = sumarIva(precio);
    precioConIva = precioConIva.toFixed(2);
    alert(`El precio del producto con iva incluido es: $${precioConIva}`);

//se sugiere precio de venta
    function calcularPrecioVenta(precioConIva) {
      return (precioConIva * 1.25);
    }
    let precioVenta = calcularPrecioVenta(precioConIva);
    precioVenta = precioVenta.toFixed(2);
    alert(`El precio de venta sugerido es: $${precioVenta}`);

    let respuesta = prompt('¿Desea ingresar el costo de otro producto? Ingrese SI para continuar o NO para terminar').toLowerCase();
    if (respuesta === 'si') {
        continuar = true;  // Continuar con el proceso
        } else {
        continuar = false;  // Detener el proceso
        alert('Un gusto servirlo, esperamos verlo pronto');
        }
    } else {
        alert('No es un número válido. Ingrese el precio por favor');
        }
    }
}
calcularPrecioProducto();  // Llama a la función por primera vez


