export class sistemAutenticacion {
    static login(usuario, clave) {
        return usuario.clave === clave;
    }
};
