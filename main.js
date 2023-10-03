//Se solicita el precio bruto
let precio = Number(prompt("Ingrese el precio de costo del producto en $"));
while(true){
    if (!isNaN(precio) && precio!="" && precio !=null){
        break;
    }
    else{
        alert('No es número, ingrese el precio por favor');
        precio = Number(prompt("Ingrese el precio de costo del producto en $"));
    } 

}
alert(`El precio de costo del producto a calcular es: $${precio}`)  

//Se calcula el iva del producto

function calcularIva (precio){
    return (precio * 0.21)
}

let iva= calcularIva(precio);
alert (`El iva del producto seleccionado es: $${iva}`)

//sumamos el iva y obtenemos el precio neto

function sumarIva(precio){
    return(precio + (precio*0.21));
}

let precioConIva = sumarIva(precio);
alert(`El precio del producto con iva incluido es: $${precioConIva}`)

//precio sugerido de venta

function calcularPrecioVenta(precioConIva){
    return(precioConIva * 1.25);
}
let precioVenta = calcularPrecioVenta(precioConIva);
precioVenta= precioVenta.toFixed(2);

alert(`El precio de venta sugerido es: $${precioVenta}`);
alert('¿Desea ingresar el costo de otro producto?')
let respuesta= prompt('Ingrese SI para continuar o NO para terminar').toLowerCase ();
// while (true){
//     if (respuesta === 'si'){
//     precio = Number(prompt("Ingrese el precio de costo del producto en $"));
// }
//     else (respuesta==='no'){
//     alert('Un gusto servirlo, esperamos verlo pronto');
// }
// }



