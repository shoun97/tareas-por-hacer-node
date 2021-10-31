const inquirer = require('inquirer');
require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desa hacer?',
        choices: [
            {
                value: '1',
                name: '1. Crear tarea'
            },
            {
                value: '2',
                name: '2. Listar tareas'
            },
            {
                value: '3',
                name: '3. Listar tareas compleadas'
            },
            {
                value: '4',
                name: '4. Listar tareas pendientes'
            },
            {
                value: '5',
                name: '5. Completas tarea(s)'
            },
            {
                value: '6',
                name: '6. Borrar tarea'
            },
            {
                value: '0',
                name: '0. Salir'
            }
        ]
    }
]


const inquirerMenu = async() => {
    console.clear();
    console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXX'.trap.yellow)
    console.log('  Mis Tareas Por Hacer'.trap.red)
    console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXX'.trap.yellow)
    
    const {opcion} = await inquirer.prompt(preguntas);

    return opcion;
}

const pausa = async() => {
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${'ENTER'.green} para Continuar`
        }
        
    ]
    console.log('\n')
    await inquirer.prompt(question)
}

module.exports = {
    inquirerMenu,
    pausa
}