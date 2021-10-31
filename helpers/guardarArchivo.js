const fs = require('fs')
const archivo = './data/data.json'

const guardarData = (data) => {
    
   
    fs.writeFileSync(archivo, JSON.stringify(data))
}

const leerData = () => {
    if(!fs.existsSync(archivo)){
        return null;
    }
    const info = fs.readFileSync(archivo, {encoding: 'utf-8'});
    const data = JSON.parse(info)
    
    return data;
}

module.exports = {
    guardarData,
    leerData
}