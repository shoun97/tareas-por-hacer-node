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

    borrarTareas( id = ''){
        if(this._listado[id]){
            delete this._listado[id]
        }
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

    listarPendientesCompletas(completadas = true){
        let lista = '';
        if(completadas){
            

            for(let i in this.listadoArr){
                
                if(this.listadoArr[i].completadoEn != null){
                    lista+= `\n${(parseInt(i)+1).toString().green}. ${this.listadoArr[i]['desc']} :: ${'Completada'.green} :: ${this.listadoArr[i]['completadoEn'].green}`
                }
                
            }
            
            
        }else{
            for(let i in this.listadoArr){
                
                if(this.listadoArr[i].completadoEn == null){
                    lista+= `\n${(parseInt(i)+1).toString().green}. ${this.listadoArr[i]['desc']} :: ${'Pendiente'.red}`
                }
                
            }
            
        }
        return lista;
    }
    toggleCompletadas( ids = []){
        ids.forEach(id => {
            const tarea = this._listado[id];
            if(!tarea.completadoEn){
                tarea.completadoEn = new Date().toISOString();

            }
        });

        this.listadoArr.forEach( tarea => {
            if(!ids.includes(tarea.id)){
                this._listado[tarea.id].completadoEn = null;
            }
        })
    }
}

module.exports = Tareas;