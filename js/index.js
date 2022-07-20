//Calcular el precio total de mi carrito según las cantidad compradas

function calcularPrecio() {
    alert("Hola, hoy calcularemos el precio total de tu carrito")
    let unidades = parseInt(prompt("Ingrese el N° de unidades que desea del producto"))
    let precioUnidad = 250

    while (isNaN(unidades)) {
        alert("Por favor escriba un valor numérico")
        unidades = parseInt(prompt("Ingrese el N° de unidades que desea del producto"))
    }

    let resultado = unidades * precioUnidad

    return resultado.toFixed(2)
}

let precioTotal = "Precio total: " + "$" + calcularPrecio()
alert(precioTotal)
console.log(precioTotal)