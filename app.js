// imprimir la tabla de 5 en la consola.
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();


// console.log(process.argv);
//console.log(process.argv);
//console.log('base: yargs', argv.b);
//console.log(argv);
// const [, , arg3 = 'base=5']= process.argv;
// const [, base = 5] = arg3.split('=');
// console.log(base);
//const base = 5;


  crearArchivo(argv.b, argv.l, argv.h)
      .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
      .catch(err => console.log(err));







