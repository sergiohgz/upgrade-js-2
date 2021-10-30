const persona = {
    nombre: 'Pepe',
    edad: 35,
    cosas: ['Portatil', 'Mesa', 'Silla'],
    decirCosas() {
        for(let cosa of this.cosas) {
            console.log(`${this.nombre} tiene ${cosa.toLowerCase()}`);
        }
    }
}

const personas = [
    {
        nombre: 'Pepe',
        edad: 35,
        cosas: ['Portatil', 'Mesa', 'Silla'],
        decirCosasQueTengo() {
            for(let cosa of this.cosas) {
                console.log(this.nombre + ' tiene ' + cosa);
            }
        }
    },
    {
        nombre: 'Juan',
        edad: 35,
        cosas: ['Portatil', 'Mesa', 'Silla'],
        decirCosasQueTengo() {
            for(let cosas of this.cosas) {
                console.log(this.nombre + ' tiene ' + cosas);
            }
        }
    },
]

/////////////// ANTIPATRON - NO USAR
const persona2 = {
    nombre: 'Pepe',
    edad: 35,
    objetos: ['Portatil', 'Mesa', 'Silla'],
    decirObjetos() {
        for(let objeto of persona2.objetos) {
            console.log(persona2.nombre + ' tiene ' + objeto);
        }
    }
}

function crearPersona(nombre, edad, cosas) {
    const persona = {
        nombre,
        edad,
        cosas,
        decirCosasQueTengo() {
            for(let cosa of persona.cosas) {
                console.log(persona.nombre + ' tiene ' + cosa);
            }
        }
    };
    return persona;
}

const pepe = crearPersona('Pepe', 35, ['Portatil', 'Mesa', 'Silla']);
const maria = crearPersona('Maria', 30, ['PC', 'Camara']);
pepe.decirCosasQueTengo();
maria.decirCosasQueTengo();

//////////////////

const personaConMochila = {
    nombre: 'Mario',
    edad: 25,
    cosas: {
        mochila: ['Portatil', 'Camara'],
        riñonera: ['Llaves de casa'],
        cartera: ['Tarjeta del banco', 'Monedas']
    },
    decirCosas() {
        for(let contenedor in this.cosas) {
            for (let cosa of this.cosas[contenedor]) {
                console.log(this.nombre + ' tiene en ' + contenedor + ' un ' + cosa);
            }
            console.log('-----');
        }
    },
    decirSoloLoQueTieneLaCartera() {
        for (let cosa of this.cosas.cartera) {
            console.log(this.nombre + ' tiene en cartera un ' + cosa);
        }
    }
}
