const listadoDeConsolas = ['PS4', 'Switch'];

const anadirConsola = (listadoDeConsolas, consolaAAnadir) => {
    return new Promise((resolve, reject) => {
        if (!listadoDeConsolas) {
            reject('No hay lista de consolas');
            return;
        }

        if (!listadoDeConsolas instanceof Array) {
            reject('No es un listado de consolas');
            return;
        }

        setTimeout(() => {
            listadoDeConsolas.push(consolaAAnadir)
            resolve(listadoDeConsolas);
        }, 3000);
    });
};

//// CASO PROMESA VA BIEN

// anadirConsola(listadoDeConsolas, 'PS5')
//     .then((nuevoListado) => { // ESTO SE EJECUTA 3 segundos DESPUES DE LA PROMESA QUE NOS DEVUELVE ANADIRCONSOLA
//         console.log(`Este es despues de ejecutar la promesa: ${nuevoListado}`);
//     });

// console.log(`Listado de consolas despues de invocar la promesa, pero no se ha completado aun: ${listadoDeConsolas}`);

//// CASO PROMESA FALLA

anadirConsola(null, 'PS5')
    .then((nuevoListado) => {
        console.log(`Este es despues de ejecutar la promesa: ${nuevoListado}`);
    })
    .catch((error) => {
        console.error(`Error al anadirConsola: ${error}`)
    });
