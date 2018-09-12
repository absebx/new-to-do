const fs = require('fs');
let listadoTareas = [];

const guardarDB = () => {
  let data = JSON.stringify(listadoTareas);
  fs.writeFile('./db/data.json',data,err => {
    if(err)
      throw new Error('No se pudo guardar en el archivo', err);
  });
}

const cargarDB = () => {
  try{
    listadoTareas = require('../db/data.json'); //hay que volver ya que está haciendo el require por dentro
  }catch(err){
    listadoTareas = [];
  }
}

const crear = (descripcion) => {

  cargarDB();

  let tarea = {
    descripcion,
    completado: false
  };

  listadoTareas.push(tarea);
  guardarDB();

  return tarea;
}

const getTareas = () => {
  cargarDB();
  return listadoTareas;
}

const actualizar = (descripcion, completado = true)=>{
  cargarDB();
  let index = listadoTareas.findIndex(tarea => tarea.descripcion === descripcion); //si no existe es un -1
  if (index >= 0){
    listadoTareas[index].completado = completado;
    guardarDB();
    return true;
  }else{
    return false;
  }
}

const borrar = (descripcion) => {
  cargarDB();
  let cantAntiguo = listadoTareas.length;
  listadoTareas = listadoTareas.filter((tarea)=> tarea.descripcion !== descripcion);
  guardarDB();
  return cantAntiguo !== listadoTareas.length;
}

module.exports = {
  crear,
  getTareas,
  actualizar,
  borrar
}