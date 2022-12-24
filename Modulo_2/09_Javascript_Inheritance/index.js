/*Importación de clases*/
import { Cliente } from './cliente.js'
import { Cuenta } from './Cuentas/cuenta.js';
import { CuentaCorriente } from './Cuentas/cuentaCorriente.js';
import { CuentaAhorro } from './Cuentas/cuentaAhorro.js';
import { CuentaNomina } from './Cuentas/cuentaNomina.js';
import { Gerente } from './Empleados/gerente.js';
import { Director } from './Empleados/director.js';
import { Empleado } from './Empleados/empleado.js';


const cliente1 = new Cliente('Leonardo', '13804050', '123224');
const cliente2 = new Cliente('María', '16979808', '8989');

/*

const cuentaDeLeonardo = new CuentaCorriente(cliente1, '1', '001');
const cuentaDeMaria = new CuentaCorriente(cliente2, '2', '002');
const cuentaAhorroLeonardo = new CuentaAhorro(cliente1, '9985', '001', 0);
const cuentaNominaLeonardo = new CuentaNomina(cliente1,'3', '03', 100)
// console.log(cuentaDeLeonardo.prueba())
// const cuentasimple = new Cuenta()

cuentaDeLeonardo.depositoEnCuenta(1000);
cuentaDeLeonardo.retirarDeCuenta(500);
// console.log(cuentaDeLeonardo.verSaldo())
cuentaAhorroLeonardo.depositoEnCuenta(1000);
cuentaAhorroLeonardo.retirarDeCuenta(500);
// console.log(cuentaAhorroLeonardo.verSaldo())
cuentaNominaLeonardo.depositoEnCuenta(150)
cuentaNominaLeonardo.retirarDeCuenta(50)
console.log(cuentaNominaLeonardo.verSaldo())

console.log("Cantidad de cuentas corriente ",CuentaCorriente.cantidadCuentas)
console.log("Cantidad de cuentas ahorro ",CuentaAhorro.cantidadCuentas)
console.log("total cuentas", Cuenta.cantidadCuentas)
*/

const empleado = new Empleado("Juan Perez", "1201", 10000)
const gerente = new Gerente("Pedro Rivas", "2211", 12000)
const director = new Director("Elena Moreno", "3322", 15000)

console.log(empleado.verBonificacion(), gerente.verBonificacion(), director.verBonificacion())


