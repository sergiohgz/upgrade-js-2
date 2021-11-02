const listaNombres = [];

const anadirNombreALista = (nombre, lista) => new Promise((resolve, reject) => {
    if(!lista) {
        reject(new Error('Lista no está definida'));
    }
    setTimeout(() => {
        const listaV2 = [...lista, nombre];
        resolve(listaV2);
    }, [2000]);
});

anadirNombreALista('Sergio', listaNombres)
    .then((listaNueva) => {
        return anadirNombreALista('Vittorio', listaNueva)
    })
    .then(function(listaNueva2) {
        console.log('+++++++++++++');
        console.log('Checkpoint:', listaNombres, listaNueva2);
        console.log('+++++++++++++');
        return anadirNombreALista('Juan', listaNueva2)
    })
    .then(function(listaNueva3) {
        return anadirNombreALista('Estefania', listaNueva3)
    })
    .then(function(listaFinal) {
        console.log('----------');
        console.log('Lista original:', listaNombres);
        console.log('Lista final', listaFinal);
        console.log('----------');
    });
console.log('Lista inicial', listaNombres);
