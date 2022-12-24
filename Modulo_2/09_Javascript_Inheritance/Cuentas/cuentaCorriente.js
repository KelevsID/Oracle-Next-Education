import { Cuenta } from './cuenta.js';


export class CuentaCorriente extends Cuenta {
    static cantidadCuentas = 0;

    constructor(cliente, numero, agencia) {
        super(cliente, numero, agencia, 0)
        CuentaCorriente.cantidadCuentas++;
    }

    // prueba() {
    //     // super.prueba();
    //     console.log("Método hijo", )
    // }

    // retirarDeCuenta(valor) {
    //     valor = valor * 1.05;
    //     return super.retirarDeCuenta(valor)
    // }
    // retirarDeCuenta(valor) {
    //     return super.retirarDeCuenta(valor, 5)
    // }

    retirarDeCuenta(valor) {
        return super._retirarDeCuenta(valor, 5)
    }
};
