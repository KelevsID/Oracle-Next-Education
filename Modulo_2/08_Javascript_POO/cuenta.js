import { Cliente } from "./cliente.js";

export class CuentaCorriente {
    #cliente;
    numero;
    agencia;
    #saldo;
    static count = 0;   // =>   contador estatico de cuentas creadas

    // constructor() {
    //     this.#cliente = null;
    //     this.numero = '';
    //     this.agencia = '';
    //     this.#saldo = 0;
    // }    //  => constructor sin parametros
    constructor(cliente, numero, agencia) {
        // this.setCliente = cliente;
        this.cliente = cliente;
        this.numero = numero;
        this.agencia = agencia;
        this.#saldo = 0;
        CuentaCorriente.count++;
    }

    depositoEnCuenta(valor) {
        if (valor > 0) this.#saldo += valor
        return this.#saldo
    }

    retirarDeCuenta(valor) {
        // valor = valor + (valor * 4) / 1000
        if (valor <= this.#saldo) this.#saldo -= valor
        return this.#saldo
    }

    verSaldo() {
        return this.#saldo
    }

    transferenciaParaCuenta(valor, cuentaDestino) {
        this.retirarDeCuenta(valor)
        cuentaDestino.depositoEnCuenta(valor)
    }

    // set setCliente(valor) {
    set cliente(valor) {
        if (valor instanceof Cliente) this.#cliente = valor
    }

    // get getCliente() {
    get cliente() {
        return this.#cliente
    }
}
