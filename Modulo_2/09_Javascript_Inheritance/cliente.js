export class Cliente {
    nombreCliente;
    dniCliente;
    rutCliente;
    #clave;

    constructor(nombreCliente, dniCliente, rutCliente) {
        this.nombreCliente = nombreCliente;
        this.dniCliente = dniCliente;
        this.rutCliente = rutCliente;
        this.#clave = '';
    }

    asignarClave(clave) {
        this.#clave = clave
    }

    // autenticable(clave) {
    //     return this.#clave === clave
    // }   
    /*
        Vamos a comentar acá, y ejecuto, me aparece el error. ¿Cómo proteger que una implementación 
        de polimorfismo no nos dé un error de esa forma? Entonces eso debemos hacerlo en el punto donde 
        hacemos la llamada de la interfaz. 
    */
}
