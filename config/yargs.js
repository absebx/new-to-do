const descripcion = {
  demand: true,
  alias: 'd',
  describe: 'Descripcion del elemento'
};

const completado = {
  alias: 'c',
  default: true,
  describe: 'Estado asignado a la tarea'
}

const argv = require('yargs')
  .command('crear', 'Crear una tarea',{
    descripcion
  })
  .command('actualizar', 'Actualiza estado de tarea',{
    descripcion,
    completado
  })
  .command('borrar','borra un elemento de la BD', {
    descripcion
  })
  .command('pedir-perdon','pide perdon',{})
.help()
.argv;

module.exports = {
  argv
}