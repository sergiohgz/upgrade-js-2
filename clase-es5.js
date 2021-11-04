function Persona(nombre, apellido, edad, genero) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.genero = genero;
}
Persona.prototype.decirNombre = function() {
    console.log(this.nombre);
}
Persona.prototype.presentarseA = function(aQuienSaludar) {
    console.log(`Buenas ${aQuienSaludar}, me llamo ${this.nombre} ${this.apellido}`);
}
Persona.prototype.incrementarEdad = function() {
    this.edad++;
}

const pepe = new Persona('Pepe', 'Viyuela', 48, 'varon');
const maria = new Persona('Maria', 'Casas', 50, 'mujer');
pepe.decirNombre();
pepe.presentarseA(maria.nombre);
maria.presentarseA(pepe.nombre);
console.log(pepe);
