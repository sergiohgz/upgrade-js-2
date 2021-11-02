const anadirNombreALista = (nombre, lista) => new Promise((resolve, reject) => {
    if(lista.length === 3) {
        // lista = null;
        setTimeout(() => {
            reject(new Error('Lista ha alcanzado el limite de capacidad, hagan cola'));
        }, [1200]);
    }
    setTimeout(() => {
        lista.push(nombre)
        resolve(lista);
    }, [2000]);
});

let listaNombres = [];


anadirNombreALista('Pepe', listaNombres)
    .then((lista) => anadirNombreALista('Maria', lista))
    .then((lista) => anadirNombreALista('Luis', lista))
    .then((lista) => anadirNombreALista('Alfredo', lista))
    .then((lista) => anadirNombreALista('Lucia', lista))
    .then((listaFinal) => console.log('Lista final de nombres', listaFinal))
    .catch((errorSucedido) => {
        console.warn('Algo ha pasado', errorSucedido);
    });

console.log('Suma 3 + 5 = ', 3 + 5);

console.log('Lista inicial de nombres', listaNombres)
