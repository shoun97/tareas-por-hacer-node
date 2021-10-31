require('colors');

const { guardarData, leerData } = require('./helpers/guardarArchivo');
const { inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    mostrarListadoChecklist } = require('./helpers/inquirer');

const Tareas = require('./models/tareas');


console.clear();

const main = async () => {

    let opt = '';
    const tareas = new Tareas();
    const tareasData = leerData()

    if (tareasData) {
        //Establecer las tareas
        tareas.cargarTareasFromArray(tareasData);
    }
    do {
        opt = await inquirerMenu();
        switch (opt) {
            case '1':
                const desc = await leerInput('Descripción: ');
                tareas.crearTarea(desc)
                break;
            case '2':
                console.log(tareas.listadoCompleto())
                break;
            case '3':
                console.log(tareas.listarPendientesCompletas(true));
                break;
            case '4':
                console.log(tareas.listarPendientesCompletas(false));
                break;
            case '5':
                const ids = await mostrarListadoChecklist(tareas.listadoArr);
                tareas.toggleCompletadas(ids)
            break;

            case '6':
                const id = await listadoTareasBorrar(tareas.listadoArr);
                const ok = await confirmar('¿Estás seguro?')
                if (id !== '0') {
                    if (ok) {
                        tareas.borrarTareas(id);
                        console.log('Tarea borrada')
                    }
                }
            break;
        }

        guardarData(tareas.listadoArr);

        await pausa();
    } while (opt !== '0')



}

main();