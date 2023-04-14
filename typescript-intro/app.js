var message = 'Jeje aber!';
// create a new heading 1 element
var heading = document.createElement('h1');
heading.textContent = message;
// add the heading the document
document.body.appendChild(heading);
function add(a, b) {
    return a + b;
}
console.log(add(1, 2));
/* CLASES */
//JS no tiene el concepto de clase como otros lenguajes pero sí se puede usa un constructor para aprovechar la herencia
function Person(ssn, firstName, lastName) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
}
//Se pueden agregar metodos a una clase 
Person.prototype.getFullName = function () {
    return "".concat(this.firstName, " ").concat(this.lastName);
};
//Y crear un objeto persona a partir de la clase Person
var pedro = new Person(123, 'Pedro', 'Pascal');
console.log(pedro.getFullName());
//ES6 permite utilizar la palabra reservada class
var Mascota = /** @class */ (function () {
    function Mascota(nombre, tipo, sonido) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.sonido = sonido;
    }
    Mascota.prototype.getSonido = function () {
        return "".concat(this.nombre, " el ").concat(this.tipo, " hace ").concat(this.sonido);
    };
    return Mascota;
}());
