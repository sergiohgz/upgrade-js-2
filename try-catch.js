const anadirNombreALista = (nombre, lista) => {
    if(lista.length === 3) {
        // lista = null;
        throw new Error('Lista ha alcanzado el limite de capacidad, hagan cola');
    }
    lista.push(nombre);
}

let listaNombres = [];

try {
    anadirNombreALista('Pepe', listaNombres);
    anadirNombreALista('Maria', listaNombres);
    anadirNombreALista('Luis', listaNombres);
    anadirNombreALista('Alfredo', listaNombres);
    anadirNombreALista('Lucia', listaNombres);
} catch(errorSucedido) {
    console.warn('Algo ha pasado', errorSucedido);
}

console.log('Suma 3 + 5 = ', 3 + 5);

console.log('Lista final de nombres', listaNombres)
