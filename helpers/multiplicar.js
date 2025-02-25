console.clear();
const fs = require('node:fs');
const colors = require('colors');

//const fs = require('node:fs/promises');

const crearArchivo = async (base = 5, listar, hasta = 10) => {

    try{
        let salida = '';
        let consola = '';

        console.log(colors.cyan('===================='));
        console.log('    TABLA DEL '.blue, colors.magenta(base));
        console.log(colors.green('===================='));

        for(let i = 1; i <= hasta; i++){
        salida += `${ base } x ${ i } = ${ base * i }\n`;
        consola += `${base} ${'x'.green} ${i} ${'='.cyan} ${ base * i }\n`;
    }

    if(listar){
        console.log(consola);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return(`tabla-${base}.txt`);
    }catch(error){
        throw error;
    }
}


// const crearArchivo = (base = 5) => {
//     return new Promise((resolve,reject) => {
//         let salida = '';

//     console.log('====================');
//     console.log(`    TABLA DEL ${base}`);
//     console.log('====================');

//     for(let i = 1; i <= 10; i++){
//         salida += (`${base} x ${i} = ${ base * i }\n`);
//     }

//     console.log(salida);

//     fs.writeFileSync(`tabla-${base}.txt`, salida);

//     resolve(`tabla-${base}.txt creado`);
//     });
// }

module.exports = {
    crearArchivo: crearArchivo
}