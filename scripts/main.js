class Producto {
    constructor(nombre, stock, precioUnitario, precioTotal){
        this.nombre = nombre;
        this.stock = stock;
        this.precioUnitario = precioUnitario;
        this.precioTotal = precioTotal;
    }

    static verProductos(listaDeProductos) {
        if (listaDeProductos.length === 0) {
            alert("Lista vacia");
        } else {
            console.table(listaDeProductos);
        }
    }
    static agregarProducto(listaDeProductos){
        const nombreProducto = prompt("Nombre del producto: ").toLowerCase();

        const stockProducto = parseInt(prompt(`Stock de ${nombreProducto}`));
        if (isNaN(stockProducto) || stockProducto < 0){
            alert("Stock invalido");
            return;
        }
        const precioUnitario = parseFloat(prompt("Precio Unitario: "));
        if (isNaN(precioUnitario) || precioUnitario < 0){
            alert("Precio invalido");
            return;
        }
        const precioTotal = precioUnitario + (precioUnitario * 0.25);

        const nuevoProducto = new Producto (nombreProducto, stockProducto, precioUnitario, precioTotal);
        listaDeProductos.push(nuevoProducto);
        alert("Producto agregado exitosamente")
    }
    static verificarExistencia(index){
        return index !== -1;
    }
    static quitaProducto(listaDeProductos){
        const productoAEliminar = prompt("Que producto desea eliminar?").toLowerCase();
        let index = listaDeProductos.findIndex(producto => producto.nombre === productoAEliminar);
        if(this.verificarExistencia(index)){
            listaDeProductos.splice(index, 1);
            alert(`Se borro el producto: ${productoAEliminar}`);
        } else {
            alert("Este producto no existe.")
        }
    }
    static modificarProducto(listaDeProductos){
        const productoAModificar = prompt("Que producto desea modificar?").toLowerCase();
        let index = listaDeProductos.findIndex(producto => producto.nombre === productoAModificar);
        if(this.verificarExistencia(index)){
            let nuevoStock = parseInt(prompt(`Stock de ${productoAModificar}: (Stock actual: ${listaDeProductos[index].stock})`));
            if(isNaN(nuevoStock) || nuevoStock < 0){
                alert("Stock ingresado invalido");
                return;
            } else {
                listaDeProductos[index].stock = nuevoStock;
            }
            let nuevoPrecio = parseFloat(prompt(`Precio de ${productoAModificar}: (Precio actual: $${listaDeProductos[index].precioUnitario})`));
            if (isNaN(nuevoPrecio) || nuevoPrecio < 0){
                alert("Precio ingresado invalido");
                return;
            } else {
                listaDeProductos[index].precioUnitario = nuevoPrecio;
            }
        } else { alert("No se encontro producto.")}
    }
    static filtrarProductos(listaDeProductos){
        let opcionesFiltro = parseInt(prompt("Desea filtrar por: (1: Precio) (2: Stock)"));
        if (opcionesFiltro == 1){
            let precioFiltrar = parseFloat(prompt("Ingrese el precio a filtrar: (Ej: 5000)"));
            let mayorMenor = parseInt(prompt(`Filtrar productos por precio:
                                                1: Mayor 0 igual a ${precioFiltrar}
                                                2: Menor a ${precioFiltrar}`));
            if (mayorMenor == 1) {
                console.table(listaDeProductos.filter((prod) => prod.precioUnitario >= precioFiltrar));
            } else if (mayorMenor == 2) {
                console.table(listaDeProductos.filter((prod) => prod.precioUnitario < precioFiltrar));
            } else {alert("Numero incorrecto")}
        } else if ( opcionesFiltro == 2) {
            let stockFiltrar = parseInt(prompt("Ingrese el stock a filtrar: (Ej: 50)"));
            let mayorMenor = parseInt(prompt(`Filtrar productos por stock:
                1: Mayor 0 igual a ${stockFiltrar}
                2: Menor a ${stockFiltrar}`));
            if (mayorMenor == 1) {
                console.table(listaDeProductos.filter((prod) => prod.stock >= stockFiltrar));
            } else if (mayorMenor == 2) {
                console.table(listaDeProductos.filter((prod) => prod.stock < stockFiltrar));
            } else {alert("Numero incorrecto")}
        }

    }
}
const listaDeProductos = []

let respuesta;

do {
    respuesta = parseInt(prompt("Que operacion desea realizar: (1-Ver productos) (2-Agregar producto) (3-Quitar producto) (4-Modificar producto) (5-Filtrar productos) (0-Salir)"));

    switch(respuesta){
        case 1:
            Producto.verProductos(listaDeProductos);
            break;
        case 2:
            Producto.agregarProducto(listaDeProductos);
            break;
        case 3:
            Producto.quitaProducto(listaDeProductos);
            break;
        case 4:
            Producto.modificarProducto(listaDeProductos);
            break;
        case 5:
            Producto.filtrarProductos(listaDeProductos);
            break;
    }
}
while (respuesta !== 0);
