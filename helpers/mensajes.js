require('colors');

const mostrarMenu = () =>{
    return new Promise(resolve => {
        console.clear();
        console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXX'.trap.yellow)
        console.log('  Mis Tareas Por Hacer'.trap.red)
        console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXX'.trap.yellow)
    
        console.log(`${'1.'.green} Crear tarea`);
        console.log(`${'2.'.green} Listar tareas`);
        console.log(`${'3.'.green} Listar tareas completadas`);
        console.log(`${'4.'.green} Listar tareas pendientes`);
        console.log(`${'5.'.green} Completar tarea(s)`);
        console.log(`${'6.'.green} Borrar tarea`);
        console.log(`${'0.'.green} Salir \n`);
        
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readLine.question('Seleccione un opción: ', (answer) =>{
            readLine.close();
            resolve(answer)
        });

    });

}

const pause = () => {
    return new Promise(resolve => {
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readLine.question(`\nPresione ${'ENTER'.green} para continuar`, (answer) =>{
            readLine.close();
            resolve(answer)
        });
    
    })
}


module.exports = {
    mostrarMenu,
    pause
}