const personas = [
    {
        nombre: 'Pepe',
        edad: 35,
        introduccion: 'Soy muy proactivo y muy trabajadoro',
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
        introduccion: 'Soy una persona super dinamico, me gustan los juegos',
        cosas: ['Portatil', 'Mesa', 'Silla'],
        decirCosasQueTengo() {
            for(let cosas of this.cosas) {
                console.log(this.nombre + ' tiene ' + cosas);
            }
        }
    },
];

for(let persona of personas) {
    if (!persona.introduccion.includes('persona')) {
        console.log(persona.nombre);
    }
}


// if (!(toy.name).includes("gato"))
