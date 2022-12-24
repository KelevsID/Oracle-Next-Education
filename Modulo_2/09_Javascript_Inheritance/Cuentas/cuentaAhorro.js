import { Cuenta } from "./cuenta.js";


export class CuentaAhorro extends Cuenta {
    static cantidadCuentas = 0;

    constructor(cliente, numero, agencia, saldo) {
        super(cliente, numero, agencia, saldo);
        CuentaAhorro.cantidadCuentas++;
    }

    retirarDeCuenta(valor) {
        return super._retirarDeCuenta(valor, 2)
    }
};
