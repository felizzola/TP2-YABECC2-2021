// UTILIZANDO LECTURA ASYNCRONA (NO SE DEBE UTILIZAR LOS METODOS fs.readFileSync)
const fs = require('fs');
const chalk = require('chalk');
const PATH = './inventors.json';


// 1.- Leer el archivo inventors.json
function getInventors(){
    let data = fs.readFile(PATH, 'utf-8', (error, data)=>{
        if(!error){
            console.log(data);
            let dataInventors = JSON.parse(data);
            return dataInventors.inventors;
        }
        else{
            console.log(chalk.red(error));
        }
    });
}
// 2.- Insertar un nuevo inventor, escribir el archivo
function pushInventor(inventor){
    let inventors = getInventors();
    let datos = '';
    inventors.push(inventor);
    
    fs.writeFile(PATH, JSON.stringify({inventors:inventors}, null, ' ', (error, data)=>{
        if(!error){
            console.log(chalk.greenBright('¡Inventor agregado correctamente!'));
            datos = data;
        }
        else{
            console.log(chalk.bgRed('No se ha podido agregar al inventor.'));
        }
    }));
}
// 3.- Leer nuevamente el archivo, con el nuevo inventor
// 4.- eliminar el inventor que inserté, escribir el archivo
// 5.- Leer nuevamente el archivo, sin el inventor


import fs from 'fs';
const PATH = './inventors.json';

// 1.-
fs.readFile(PATH, 'utf-8', (err, data) => {
  if(!err){
    let inventors = JSON.parse(data);
    let inventor = {
      "_id": 10,
      "first": "Juan",
      "last": "Peres",
      "year": 1879
     }
    // 2.- 
     inventors.push(inventor);
     fs.writeFile(PATH, JSON.stringify(inventors, null, ' '), (err) => {
        if(!err) {
          fs.readFile(PATH, 'utf-8', (err, data) => {
            if(!err){
              let inventors = JSON.parse(data);
              console.log(inventors);
            }
            else {
              console.log(err);
            }
          });
        } else {
          console.log(err);
        }
     });     
  } else {
    console.log(err);
  }
});

