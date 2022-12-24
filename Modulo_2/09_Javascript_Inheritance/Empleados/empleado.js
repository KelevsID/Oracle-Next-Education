export class Empleado {
    #nombre;
    #dni;
    #salario;
    #clave;

    constructor(nombre, dni, salario) {
        this.#nombre = nombre;
        this.#dni = dni;
        this.#salario = salario;
        this.#clave = '';
    }

    asignarClave(clave) {
        this.#clave = clave
    }

    // get clave(){
    //     return this.#clave
    // }    // => en lugar de tener un getter llamado clave, tenemos un método llamado autenticable, 
            // que va a recibir una clave y que nos va a retornar si esa clave es igual a lo que tenemos almacenado. 
    autenticable(clave) {
        return this.#clave === clave
    }

    verBonificacion() {
        // return this._verBonificacion(0)
        return this.#salario
    }

    _verBonificacion(bono) {
        return this.#salario + ((this.#salario * bono) / 100)
    }
};
