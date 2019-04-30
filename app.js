const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado : `,colors.green(` ${archivo.green}`) ))
            .catch(e => console.log(e))
        break;

    default:
        console.log('Comando no Reconocido');
}



// console.log(comando);


// const fs = require('express');
// const fs = require('./fs');

// console.log(multipicar);

// let base = '6';

// let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split("=")[1]

// console.log('base :', argv.base);
// console.log('limite : ', argv.limite);

// console.log(argv2);


