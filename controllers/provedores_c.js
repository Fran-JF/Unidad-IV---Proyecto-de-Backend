var provedoresModel = require("../models/provedores_m")

class provedoresController {
    listar(){
        return new Promise ((resolve, reject)=>{
            console.log("a controller")
            provedoresModel.listar()
            .then((resultado)=>{
                resolve (resultado)
            })
            .catch((err)=>{
              reject(err)
            });
        })
    }

    mostrarProvedor(provedor){
        return new Promise ((resolve, reject)=>{
            console.log("a controller")
            provedoresModel.mostrarProvedor(provedor)
            .then((resultado)=>{
                resolve (resultado)
            })
            .catch((err)=>{
              reject(err)
            });
        })
    }

    crear(provedor){
        return new Promise ((resolve, reject)=>{
            if (!provedor.nombre || !provedor.rif || !provedor.ubicacion) {
                return resolve("No se agregó el provedor, se requiere del provedor: nombre, rif y ubicacion");
            }
            console.log("a controller")
            provedoresModel.crear(provedor)
            .then((resultado)=>{
                resolve (resultado)
            })
            .catch((err)=>{
              reject(err)
            });
        })
    }

    actualizar(provedor){
        console.log('hola')
        return new Promise ((resolve, reject) => {
            if (!provedor.nombre || !provedor.rif || !provedor.ubicacion || !provedor.id) {
                return resolve("No se actualizo el provedor, se requiere del provedor: id, nombre, rif y ubicacion");
            }
            console.log('a controller');
            provedoresModel.actualizar(provedor)
            .then((resultado)=>{
                resolve (resultado)
            })
            .catch((err)=>{
                reject(err)
            })
        })
    }

    borrar(provedor){
        console.log('hola')
        return new Promise ((resolve, reject) => {
            if (!provedor.id) {
                return resolve("Debes Ingresar la propiedad (id) si deseas eliminar un registro de provedor");
            }
            console.log('a controller');
            provedoresModel.borrar(provedor)
            .then((resultado)=>{
                resolve (resultado)
            })
            .catch((err)=>{
                reject(err)
            })
        })
    }
}

const provedoresC = new provedoresController();
module.exports = provedoresC;