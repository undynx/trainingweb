let message: string = 'Jeje aber!';
// create a new heading 1 element
let heading = document.createElement('p');
heading.textContent = message;
// add the heading the document
document.body.appendChild(heading);

function add(a: number, b: number): number {
    return a + b;
}

console.log(add(1, 2));

/* CLASES */
//JS no tiene el concepto de clase como otros lenguajes pero sí se puede usa un constructor para aprovechar la herencia
function Person(ssn: number, firstName: string, lastName: string) { 
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
}

//Se pueden agregar metodos a una clase 
Person.prototype.getFullName = function() { 
    return `${this.firstName} ${this.lastName}`;
}

//Y crear un objeto persona a partir de la clase Person
let pedro = new Person(123, 'Pedro', 'Pascal');
console.log(pedro.getFullName());

//ES6 permite utilizar la palabra reservada class
class Mascota{
    nombre;
    tipo;
    sonido;

    constructor(nombre: string, tipo: string, sonido: string) { 
        this.nombre = nombre;
        this.tipo = tipo;
        this.sonido = sonido;
    }

    getSonido() { 
        return `${this.nombre} el ${this.tipo} hace ${this.sonido}`
    }
}


/* INTERFACES */
//