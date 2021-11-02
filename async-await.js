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

/*
async function() {
    // ...
}
*/

const anadirVariosNombresALista = async () => {
    try {
        console.log('Iniciando funcion asincrona');
        const listav1 = await anadirNombreALista('Pepe', listaNombres);
        const listav2 = await anadirNombreALista('Maria', listav1);
        const listav3 = await anadirNombreALista('Luis', listav2);
        const listav4 = await anadirNombreALista('Alfredo', listav3);
        const listaFinal = await anadirNombreALista('Lucia', listav4);
        console.log('Lista final de nombres', listaFinal)
        return listaFinal;
    } catch(errorSucedido) {
        console.warn('Ha petado', errorSucedido)
    }
};

anadirVariosNombresALista();

console.log('Suma 3 + 5 = ', 3 + 5);

console.log('Lista inicial de nombres', listaNombres)
