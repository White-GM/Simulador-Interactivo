//Calcular el precio total de mi carrito según las cantidad compradas

/* function calcularPrecio() {
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
console.log(precioTotal) */

//--------------------------------------------------------------------------------------------


let productos= [
    {"ID":"0","Nombre":"Mariscos", "Precio": 250 },
    {"ID":"1","Nombre":"Arroz con pollo", "Precio": 130 },
    {"ID":"2","Nombre":"Lomo saltado", "Precio": 320 },
]

const carrito = []

function calcularUnidades(precio,unidades) {
    let resultado = precio*unidades
    return resultado
}
let total = 0

alert ("Hola,por favor elija solo un producto escribiendo su Número identificador correspondiente")
let mensajeProductos = parseInt(prompt("Lista de productos \nN°: 0 Nombre: Mariscos - Precio: $250.00 \nN°: 1 Nombre: Arroz con pollo - Precio: $130.00 \nN°: 2 Nombre: Lomo saltado - Precio: $320.00"))
let unidades = parseInt(prompt("¿Cuántas unidades deseas del producto elegido?"))
let agregar = prompt("¿Deseas agregar otro producto? \nResponda: Si/No")

let productoElegido = productos[mensajeProductos].Precio
let precioPorProducto = calcularUnidades(productoElegido,unidades)
carrito.push(precioPorProducto)


while (agregar !="Si", agregar != "No") {
        if (agregar == "Si") {
            mensajeProductos = parseInt(prompt("Lista de productos \nN°: 0 Nombre: Mariscos - Precio: $250.00 \nN°: 1 Nombre: Arroz con pollo - Precio: $130.00 \nN°: 2 Nombre: Lomo saltado - Precio: $320.00"))
            unidades = parseInt(prompt("¿Cuántas unidades deseas?"))
            agregar = prompt("¿Deseas agregar otro producto? \nResponda: Si/No")

            productoElegido = productos[mensajeProductos].Precio
            precioPorProducto = calcularUnidades(productoElegido,unidades)
            carrito.push(precioPorProducto)
        } else {
            alert ("Por favor responda solo con Si/No")
            agregar = prompt("¿Deseas agregar otro producto? \nResponda: Si/No")
        }
}



for(key of carrito) {
    total = total + key
}
console.log(`El precio total de tu carrito es $${total}.00 incluyendo impuestos \nGracias por su compra`)


alert(`El precio total de tu carrito es $${total}.00 incluyendo impuestos \nGracias por su compra`)

