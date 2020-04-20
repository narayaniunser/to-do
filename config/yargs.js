const desc = {
    descripcion: {
        demand : true,
        alias : 'd',
        desc: 'Descripcion tarea por hacer'
    }    
}

const complete = {
    descripcion: {
        demand : true,
        alias : 'd',
        desc: 'Descripcion tarea por hacer'
    } ,
    completado : {
        alias : 'c',
        default : true,
        desc: 'Actualiza una tarea por hacer'
    }
}

const argv = require ('yargs')
                .command('crear','Crea las tareas por hacer',desc)
                .command('actualizar','Actualiza las tareas',complete)
                .command('borrar','Borra la tarea seleccionada',desc)
                .help()
                .argv;

module.exports = {
    argv
}