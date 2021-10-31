require('colors');

const { guardarData, leerData } = require('./helpers/guardarArchivo');
const { inquirerMenu, 
        pausa,
        leerInput } = require('./helpers/inquirer');

const Tareas = require('./models/tareas');


console.clear();

const main = async() => {
    
    let opt = '';
    const tareas = new Tareas();
    const tareasData = leerData()

    if(tareasData){
        //Establecer las tareas
        tareas.cargarTareasFromArray(tareasData);
    }
    do {
        opt = await inquirerMenu();
        switch(opt){
            case '1':
                const desc = await leerInput('Descripción: ');
                tareas.crearTarea(desc)
            break;
            case '2':
                console.log(tareas.listadoCompleto())
            break;
        }

        guardarData(tareas.listadoArr);

        await pausa();
    }while(opt !== '0')

    
    
}

main();