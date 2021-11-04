class Persona {
    #nombre;
    #apellido;

    constructor(nombre, apellido, edad, genero) {
        this.#nombre = nombre;
        this.#apellido = apellido;
        this.edad = edad;
        this.genero = genero;
    }

    get nombre() {
        return this.#nombre;
    }
    get apellido() {
        return this.#apellido;
    }

    get nombreCompleto() {
        return this.#nombre + ' ' + this.#apellido
    }

    set nombreCompleto(nuevoNombre) {
        const [nombre, apellido] = nuevoNombre.split(' ');
        this.#nombre = nombre;
        this.#apellido = apellido;
    }

    decirNombre() {
        console.log(this.#nombre);
    }
    presentarseA(aQuienSaludar) {
        console.log(`Buenas ${aQuienSaludar}, me llamo ${this.#nombre} ${this.#apellido}`);
    }
    incrementarEdad() {
        this.edad++;
    }
}

const pepe = new Persona('Pepe', 'Viyuela', 48, 'varon');
const maria = new Persona('Maria', 'Casas', 50, 'mujer');
pepe.decirNombre();
// pepe.presentarseA(maria.nombre);
// maria.presentarseA(pepe.#nombre);
console.log(pepe);
console.log(pepe.nombreCompleto)
pepe.nombreCompleto = 'Juan Castanas'
console.log(pepe);
