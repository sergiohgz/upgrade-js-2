class Vehiculo {
    constructor(numeroRuedas, potencia) {
        this.numeroRuedas = numeroRuedas;
        this.potencia = potencia;
    }
    desplazarse() {
        console.log('Nos vamos');
    }
}

class Coche extends Vehiculo {
    constructor(marca, modelo, potencia) {
        super(4, potencia);
        this.marca = marca;
        this.modelo = modelo;
    }

    decirCoche() {
        console.log(`El coche es un ${this.marca} modelo ${this.modelo}`)
        this.desplazarse(); // "Marca Modelo"
        super.desplazarse(); // "Nos vamos"
    }
    desplazarse() {
        console.log(this.marca + ' ' + this.modelo)
    }
}

class Moto extends Vehiculo {
    constructor(marca, numeroRuedas, potencia) {
        super(numeroRuedas, potencia);
        this.marca = marca;
    }

    hacerCaballito() {
        if(this.numeroRuedas === 2) {
            console.log('Yiiiiiii')
        } else {
            console.log('No puedo hacer caballitos')
        }
    }
}

const mercedesA = new Coche('Mercedes-Benz', 'A', 150);
const daciaSandero = new Coche('Dacia', 'Sandero', 90);
const fordFocus = new Coche('Ford', 'Focus', 115);
const kawaNinja = new Moto('Kawasaki', 2, '250cc');
const metropolis = new Moto('Peugeot Metropolis', 3, '400cc');

mercedesA.decirCoche();
mercedesA.desplazarse();

// kawaNinja.decirCoche();
kawaNinja.desplazarse();
metropolis.hacerCaballito();
// mercedesA.hacerCaballito()
