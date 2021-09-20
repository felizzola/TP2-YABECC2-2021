// CRUD de iventores
const fs = require('fs');
const PATH = './data/inventors.json';

// Lectura
function getInventors(){
    // return fs.readFileSync(PATH, 'utf-8');
    let data = fs.readFileSync(PATH, 'utf-8');
    let dataInventors = JSON.parse(data);
    return dataInventors.inventors;
}

function getInventor(id){
    return getInventors()
        .filter(inventor => inventor._id === id);
}

// Alta
function pushInventor(inventor){
    let inventors = getInventors();
    inventors.push(inventor);
    
    fs.writeFileSync(PATH, JSON.stringify({inventors:inventors}, null, ' '));
}

// Modificacion 
function updateIventor(id, inventor){
    //TODO: Se los dejo como ejercicio
    // findIndex
    let inventors = getInventors();
    let inventorIndex = inventors.findIndex((inventor => inventor._id == id));
    inventors[inventorIndex].first = inventor.first;
    inventors[inventorIndex].last = inventor.last;
    inventors[inventorIndex].year = inventor.year;
    fs.writeFileSync(PATH, JSON.stringify({inventors:inventors}, null, ' '));
}

// Eliminacion
function deleteInventor(id){
    //TODO: Se los dejo como ejercicio
    // slice, filter
    let inventors = getInventors();
    inventors = inventors.filter((inventor => inventor._id != id));
    fs.writeFileSync(PATH, JSON.stringify({inventors:inventors}, null, ' '));
}

module.exports = {getInventor, getInventors, pushInventor, deleteInventor, updateIventor};

