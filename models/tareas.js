const { v4: uuidv4 } = require('uuid');
const Tarea = require('./tarea');

class Tareas {

    _listado = {}

    get listadoArr() {
        const listado = [];
        Object.keys(this._listado).forEach( key => {
            const tarea = this._listado[key];
            listado.push(tarea)
        })
        return listado;
    }

    constructor(desc) {

        this._listado = {}

    }

    cargarTareasFromArray( tareas = []){
        tareas.forEach(t =>{
            this._listado[t.id] = t
        })
    }

    crearTarea(desc = ''){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea; 
    }
    listadoCompleto(){
        //console.log(this._listado);
        let lista = '';
        let estado = 'Pendiente'.red;

        for(let i in this.listadoArr){
            
            if(this.listadoArr[i].completadoEn != null){estado='Completada'.green;}
            
            lista+= `\n${(parseInt(i)+1).toString().green}. ${this.listadoArr[i]['desc']} :: ${estado}`

            estado = 'Pendiente'.red
        }
        
        return lista;
    }
}

module.exports = Tareas;