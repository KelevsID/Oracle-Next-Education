export class sistemAutenticacion {
    static login(usuario, clave) {  // interface como metódo y no como atributo
        // return usuario.clave === clave;
        /*
            Se valida si dentro de usuario existe el metódo autenticable implementado 
            haciendo uso del operador in, para el caso de Cliente.
            Y valida si autenticable no es una propiedad de la clase Cliente
        */
        if ('autenticable' in usuario && usuario.autenticable instanceof Function)
            return usuario.autenticable(clave)
        else
            return false
    }
};
