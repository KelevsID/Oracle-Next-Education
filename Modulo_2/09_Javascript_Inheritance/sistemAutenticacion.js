export class sistemAutenticacion {
    static login(usuario, clave) {  // interface como metódo y no como atributo
        return usuario.autenticable(clave)
        // return usuario.clave === clave;
    }
};
