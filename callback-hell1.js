const listaNombres = [];

const anadirNombreALista = (nombre, lista, callback) => {
    if(!lista) {
        throw new Error('Lista no está definida')
    }
    setTimeout(() => {
        const listaV2 = [...lista, nombre];
        callback(listaV2);
    }, [2000]);
};

anadirNombreALista('Sergio', listaNombres, function(listaNueva) {
    anadirNombreALista('Vittorio', listaNueva, function(listaNueva2) {
        console.log('+++++++++++++');
        console.log('Checkpoint:', listaNombres, listaNueva2);
        console.log('+++++++++++++');
        anadirNombreALista('Juan', listaNueva2, function(listaNueva3) {
            anadirNombreALista('Estefania', listaNueva3, function(listaFinal) {
                console.log('----------');
                console.log('Lista original:', listaNombres);
                console.log('Lista final', listaFinal);
                console.log('----------');
            })
        })
    })
});
console.log('Lista inicial', listaNombres);
