export class sistemAutenticacion {
    login(empleado, clave) {
        if (empleado.clave == clave)
            return true;
        return false;
    }
};
