const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) =>{
    
    console.log('=============================');
    console.log(`Tabla de ${base}`.green);
    console.log('=============================');

    for ( let i = 1; i<=limite; i++){
        let pantalla = `${base} x ${i} = ${base*i}`;
        console.log(pantalla);
    }

}

let crearArchivo =  (base, limite=10) => {
    return new Promise( (resolve,reject)=>{

        if( !Number(base)){
            reject('Tiene que ser un numero')
            return
        }

        let data = ''

        for (let i = 1; i <= limite; i++) {
            let respuesta = `${base} x ${i} = ${base * i}\n`
            data += respuesta;
        }
    
    
        fs.writeFile(`./tablas/tabla-${base}.txt`, data, (err) => {
            if (err){
                reject(err) ;
            } 
            else{
                resolve(`tabla-${base} hasta el ${limite}.txt`) 
            }
        });
    
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}

