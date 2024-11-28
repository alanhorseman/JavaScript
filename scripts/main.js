let stockRemeras = 10;
let stockBuzos = 10;
let stockPantalones = 10;

const precioRemera = 15000;
const precioBuzo = 32000;
const precioPantalon = 23000;

let totalRemeras = 0;
let totalBuzos = 0;
let totalPantalones = 0;

let opcionElegida = parseInt(prompt("Que desea comprar: (1: Remeras) (2: Buzos) (3: Pantalones) (4: Total) (0: Salir)"));
while (opcionElegida !== 0) {
    

    if (opcionElegida == 1 && stockRemeras > 0){
        let cantidadRemerasElegidas = parseInt(prompt("Cuantas remeras desea comprar: (maximo: " + stockRemeras + ")"));
        
        if (cantidadRemerasElegidas < stockRemeras) {
            stockRemeras -= cantidadRemerasElegidas;
            totalRemeras += cantidadRemerasElegidas * precioRemera;
            alert("Se agrego remeras al carrito");
            opcionElegida = parseInt(prompt("Que desea comprar: (1: Remeras) (2: Buzos) (3: Pantalones) (4: Total) (0: Salir)"));
        }
        else {
            alert("No hay tantas remeras en stock. (maximo: " + stockRemeras + ")");
            opcionElegida = parseInt(prompt("Que desea comprar: (1: Remeras) (2: Buzos) (3: Pantalones) (4: Total) (0: Salir)"));
        }
    }
    else if (opcionElegida == 2 && stockBuzos > 0){
        let cantidadBuzosElegidos = parseInt(prompt("Cuantos buzos desea comprar: (maximo: " + stockBuzos + ")"));

        if (cantidadBuzosElegidos < stockBuzos){
            stockBuzos -= cantidadBuzosElegidos;
            totalBuzos += cantidadBuzosElegidos * precioBuzo;
            alert("Se agrego buzos al carrito");
            opcionElegida = parseInt(prompt("Que desea comprar: (1: Remeras) (2: Buzos) (3: Pantalones) (4: Total) (0: Salir)"));
        }
        else {
            alert ("No hay tantos buzos en stock. (maximo: )" + stockBuzos + ")")
            opcionElegida = parseInt(prompt("Que desea comprar: (1: Remeras) (2: Buzos) (3: Pantalones) (4: Total) (0: Salir)"));
        }
    }
    else if (opcionElegida == 3 && stockPantalones > 0){
        let cantidadPantalonesElegidos = parseInt(prompt("Cuantos pantalones desea comprar: (maximo: " + stockPantalones + ")"));

        if (cantidadPantalonesElegidos < stockPantalones){
            stockPantalones -= cantidadPantalonesElegidos;
            totalPantalones += cantidadPantalonesElegidos * precioPantalon;
            alert("Se agrego pantalones al carrito");
            opcionElegida = parseInt(prompt("Que desea comprar: (1: Remeras) (2: Buzos) (3: Pantalones) (4: Total) (0: Salir)"));
        }
        else {
            alert("No hay tantos pantalones en stock. (maximo: )" + stockPantalones + ")")
            opcionElegida = parseInt(prompt("Que desea comprar: (1: Remeras) (2: Buzos) (3: Pantalones) (4: Total) (0: Salir)"));
        }
    }
    else if (opcionElegida == 4){
        let totalCarrito = totalRemeras + totalBuzos + totalPantalones;
        alert("Su total es de: " + totalCarrito)
        break;
    }
    else if (opcionElegida == 0){
        alert("Adios!");
        break;
    }
    else {
        alert("No eligio una opcion correcta, vuelva a intentar...")
        opcionElegida = parseInt(prompt("Que desea comprar: (1: Remeras) (2: Buzos) (3: Pantalones) (4: Total) (0: Salir)"));
    }
}