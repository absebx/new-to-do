// const argv = require('yargs').argv;
const {argv} = require('./config/yargs');
const tarea = require('./tarea/tarea');
const colors = require('colors');

let comando = argv._[0];

switch (comando){
  case 'crear':
    console.log('crear tarea');
    let tareaNueva = tarea.crear(argv.descripcion);
    console.log(tareaNueva)
    break;
  case 'listar':
    console.log('Mostrar todas las tareas');
    let listado = tarea.getTareas();
    for (let tarea of listado){
      console.log("=======TAREA=========".green);
      console.log(tarea.descripcion);
      console.log('Estado:',tarea.completado);
    }
    console.log("=====================".green);
    break;
  case 'actualizar':
    console.log('actualizar tarea por hacer');
    let actualizado = tarea.actualizar(argv.descripcion,argv.completado);
    if(actualizado){
      console.log('Tarea actualizada correctamente');
    }
    break;
  case 'borrar':
    console.log('Borrar una tarea');
    let res = tarea.borrar(argv.descripcion);
    console.log(res);
    break;
  case 'pedir-perdon':
    console.log('     ISSA  ')
    setTimeout(() => {
      console.log('     Perdoname, eres una de las partes mas importantes');
    }, 1000);
    setTimeout(() => {
      console.log('       de'.green.bold)
    }, 2000);
    setTimeout(() => {
      console.log('      mi'.yellow.bold)
    }, 3000);
    setTimeout(() => {
      console.log('     VIDA'.rainbow.bold)
    }, 4000);
    setTimeout(() => {
      console.log('    Te quiero mucho  '.bgBlue.white);
    }, 5000);
    setTimeout(() => {
      console.log('    Desde el fondo de '.bgGreen.white);
    }, 6000);
    setTimeout(() => {
      console.log('    MI CORAZON <3'.bgRed.white);
    }, 7000);
    setTimeout(() => {
      console.log('     /ᐠ｡ꞈ｡ᐟ\\'.red)
    }, 8000);
    break;
  default:
    console.log('Comando no reconocido');
}
