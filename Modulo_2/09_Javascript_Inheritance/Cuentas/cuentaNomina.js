import { Cuenta } from "./cuenta.js";


export class CuentaNomina extends Cuenta {
    static cantidadCuentas = 0;

    constructor(cliente, numero, agencia, saldo){
        super(cliente, numero, agencia, saldo)
        CuentaNomina.cantidadCuentas++
    }

    retirarDeCuenta(valor){
        return super._retirarDeCuenta(valor, 1)
    }
};
