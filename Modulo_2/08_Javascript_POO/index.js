import { Cliente } from './cliente.js'
import { CuentaCorriente } from './cuenta.js'


// const cliente1 = new Cliente()
// cliente1.nombreCliente = 'Leonardo'
// cliente1.dniCliente = '13804050'
// cliente1.rutCliente = 'v13804050'
const cliente1 = new Cliente('Leonardo', '13804050', 'v13804050')
// const cliente2 = new Cliente()
// cliente2.nombreCliente = 'Maria'
// cliente2.dniCliente = '9021342'
// cliente2.rutCliente = 'v9021342'
const cliente2 = new Cliente('Maria', '9021342', 'v9021342')


// const cuentaDeLeonardo = new CuentaCorriente()
// cuentaDeLeonardo.numero = '1'
// cuentaDeLeonardo.agencia = '01'
// cuentaDeLeonardo.setCliente = cliente1   
// console.log(cuentaDeLeonardo, cuentaDeLeonardo.setCliente)   //  => Se cambia setCliente a cliente para tener semantica y legibilidad
const cuentaDeLeonardo = new CuentaCorriente(cliente1, '1', '01')
console.log(cuentaDeLeonardo, cuentaDeLeonardo.cliente)
// const cuentaDeMaria = new CuentaCorriente()
// cuentaDeMaria.numero = '2'
// cuentaDeMaria.agencia = '02'
// cuentaDeMaria.setCliente = cliente2
// console.log(cuentaDeMaria, cuentaDeMaria.setCliente) //  => Se cambia setCliente a cliente para tener semantica y legibilidad
const cuentaDeMaria = new CuentaCorriente(cliente2, '2', '02')
console.log(cuentaDeMaria, cuentaDeMaria.cliente)

// let saldo = cuentaDeLeonardo.verSaldo();
// console.log(`El saldo actual es ${saldo}`)
// saldo = cuentaDeLeonardo.depositoEnCuenta(10000)
// console.log(`El saldo actual es ${saldo}`)
// console.log()

// cuentaDeLeonardo.transferenciaParaCuenta(5000, cuentaDeMaria)
// console.log(saldo, "saldo despues de la transferencia sin actualizar")
// saldo = cuentaDeLeonardo.verSaldo();
// console.log(`El saldo actual despues de la transferencia es ${saldo}`)


// console.log(`El saldo de Maria es ${cuentaDeMaria.verSaldo()}`)
// cuentaDeMaria.transferenciaParaCuenta(1000, cuentaDeLeonardo)
// console.log(cuentaDeMaria.verSaldo(), "saldo maria")
// console.log(cuentaDeLeonardo.verSaldo(), "saldo leonardo")


new CuentaCorriente()
new CuentaCorriente()
new CuentaCorriente()
new CuentaCorriente()
console.log(CuentaCorriente.count)