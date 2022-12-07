var perifericosModel = require("../models/perifericos_m")

class perifericosController {
    listar(){
        return new Promise ((resolve, reject)=>{
            console.log("a controller")
            perifericosModel.listar()
            .then((resultado)=>{
                resolve (resultado)
            })
            .catch((err)=>{
              reject(err)
            });
        })
    }

    mostrarPeriferico(periferico){
        return new Promise ((resolve, reject)=>{
            console.log("a controller")
            perifericosModel.mostrarPeriferico(periferico)
            .then((resultado)=>{
                resolve (resultado)
            })
            .catch((err)=>{
              reject(err)
            });
        })
    }

    crear(periferico){
        return new Promise ((resolve, reject)=>{
            if (!periferico.nombre || !periferico.modelo || !periferico.marca || !periferico.equipo_al_que_pertenece || !periferico.precio) {
                return resolve("No se agregó el periferico, se requiere del periferico: nombre, modelo, marca, equipo_al_que_pertenece y precio");
            }
            console.log("a controller")
            perifericosModel.crear(periferico)
            .then((resultado)=>{
                resolve (resultado)
            })
            .catch((err)=>{
              reject(err)
            });
        })
    }

    actualizar(periferico){
        console.log('hola')
        return new Promise ((resolve, reject) => {
            if (!periferico.nombre || !periferico.modelo || !periferico.marca || !periferico.equipo_al_que_pertenece || !periferico.precio || !periferico.id) {
                return resolve("No se actualizo el periferico, se requiere del periferico: id, nombre, modelo, marca, equipo_al_que_pertenece y precio");
            }
            console.log('a controller');
            perifericosModel.actualizar(periferico)
            .then((resultado)=>{
                resolve (resultado)
            })
            .catch((err)=>{
                reject(err)
            })
        })
    }

    borrar(periferico){
        console.log('hola')
        return new Promise ((resolve, reject) => {
            if (!periferico.id) {
                return resolve("Debes Ingresar la propiedad (id) si deseas eliminar un registro de periferico");
            }
            console.log('a controller');
            perifericosModel.borrar(periferico)
            .then((resultado)=>{
                resolve (resultado)
            })
            .catch((err)=>{
                reject(err)
            })
        })
    }
}

const perifericosC = new perifericosController();
module.exports = perifericosC;