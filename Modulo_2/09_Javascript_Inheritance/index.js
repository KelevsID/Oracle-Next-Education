/*Importación de clases*/
import { Cliente } from './cliente.js'
import { Gerente } from './Empleados/gerente.js';
import { Director } from './Empleados/director.js';
import { Empleado } from './Empleados/empleado.js';
import { sistemAutenticacion } from './sistemAutenticacion.js';

const cliente = new Cliente('Leonardo', '13804050', '123224');
cliente.asignarClave("clave123");
console.log(sistemAutenticacion.login(cliente, "clave123"), " cliente")
// const cliente2 = new Cliente('María', '16979808', '8989');

const empleado = new Empleado("Juan Perez", "1201", 10000)
empleado.asignarClave("qweqw")
console.log(sistemAutenticacion.login(empleado, "qweqw"))

const gerente = new Gerente("Pedro Rivas", "2211", 12000)
gerente.asignarClave("12345")
console.log(sistemAutenticacion.login(gerente, "12345"))

const director = new Director("Elena Moreno", "3322", 15000)
director.asignarClave("ewr21")
console.log(sistemAutenticacion.login(director, "ewr21"))


