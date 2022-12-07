var tecnicosModel = require("../models/tecnicos_m")

class tecnicosController {
    listar(){
        return new Promise ((resolve, reject)=>{
            console.log("a controller")
            tecnicosModel.listar()
            .then((resultado)=>{
                resolve (resultado)
            })
            .catch((err)=>{
              reject(err)
            });
        })
    }

    mostrarTecnico(tecnico){
        return new Promise ((resolve, reject)=>{
            console.log("a controller")
            tecnicosModel.mostrarTecnico(tecnico)
            .then((resultado)=>{
                resolve (resultado)
            })
            .catch((err)=>{
              reject(err)
            });
        })
    }

    crear(tecnico){
        return new Promise ((resolve, reject)=>{
            if (!tecnico.nombre || !tecnico.usuario || !tecnico.profesion) {
                return resolve("No se agregó el tecnico, se requiere del tecnico: nombre, usuario y profesion");
            }
            console.log("a controller")
            tecnicosModel.crear(tecnico)
            .then((resultado)=>{
                resolve (resultado)
            })
            .catch((err)=>{
              reject(err)
            });
        })
    }

    actualizar(tecnico){
        console.log('hola')
        return new Promise ((resolve, reject) => {
            if (!tecnico.nombre || !tecnico.usuario || !tecnico.profesion || !tecnico.id) {
                return resolve("No se actualizo el tecnico, se requiere del tecnico: id, nombre, usuario y profesion");
            }
            console.log('a controller');
            tecnicosModel.actualizar(tecnico)
            .then((resultado)=>{
                resolve (resultado)
            })
            .catch((err)=>{
                reject(err)
            })
        })
    }

    borrar(tecnico){
        console.log('hola')
        return new Promise ((resolve, reject) => {
            if (!tecnico.id) {
                return resolve("Debes Ingresar la propiedad (id) si deseas eliminar un registro de tecnico");
            }
            console.log('a controller');
            tecnicosModel.borrar(tecnico)
            .then((resultado)=>{
                resolve (resultado)
            })
            .catch((err)=>{
                reject(err)
            })
        })
    }
}

const tecnicosC = new tecnicosController();
module.exports = tecnicosC;