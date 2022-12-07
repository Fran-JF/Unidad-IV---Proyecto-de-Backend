const connection = require('./conexion');
var conexion = connection

class perifericosModel{
    listar(){
        return new Promise((resolve, reject)=>{
            console.log("a model")
            conexion.query('SELECT * from `perifericos`', function (error, results, fields) {
                if (error) throw error;
                console.log(results);
                resolve(results);
            });

        })
    }

    mostrarPeriferico(periferico){
        return new Promise((resolve, reject)=>{
            console.log("a model")
            conexion.query('SELECT * FROM `perifericos` WHERE id_per = '+periferico, function (error, results, fields) {
                if (error) throw error;
                console.log(results);
                resolve('Este es el periferico solicitado: ', results);
            });

        })
    }

    crear(periferico){
        let nombre = '"'+periferico.nombre+'"'
        let modelo = '"'+periferico.modelo+'"'
        let marca = '"'+periferico.marca+'"'
        let equipo_al_que_pertenece = '"'+periferico.equipo_al_que_pertenece+'"'
        let precio = '"'+periferico.precio+'"'
        return new Promise((resolve, reject) => {
            console.log('a model')
            conexion.query('INSERT INTO perifericos (nombre_per, modelo_per, marca_per, equipo_perteneciente_per, precio_per) VALUES (' +nombre+ ', ' +modelo+ ', ' +marca+ ', ' +equipo_al_que_pertenece+ ', ' +precio+ ')',
            function (error, results, fields){
                if(error) throw error;
                console.log('Se ha guardado el registro en perifericos');
                console.log(results);
                resolve(periferico)
            }
        );
        })
    }

    actualizar(periferico){
        let id = '"'+periferico.id+'"'
        let nombre = '"'+periferico.nombre+'"'
        let modelo = '"'+periferico.modelo+'"'
        let marca = '"'+periferico.marca+'"'
        let equipo_al_que_pertenece = '"'+periferico.equipo_al_que_pertenece+'"'
        let precio = '"'+periferico.precio+'"'
        return new Promise((resolve, reject) => {
            console.log('a model')
            conexion.query('UPDATE perifericos SET nombre_per = '+nombre+', modelo_per = '+modelo+', marca_per = '+marca+', equipo_perteneciente_per = '+equipo_al_que_pertenece+', precio_per = '+precio+' WHERE id_per = '+id,
            function (error, results, fields){
                if(error) throw error;
                console.log('SE HA ACTUALIZADO EL REGISTRO DE PERIFERICOS', results);
                resolve(periferico)
            });
        })
    }

    borrar(periferico){
        let id = periferico.id
        return new Promise((resolve, reject) => {
            console.log('a model');
            conexion.query('DELETE FROM perifericos WHERE id_per = '+id, 
            function (error, results, fields){
                if(error) throw error;
                console.log('SE HA BORRADO EL REGISTRO DE PERIFERICOS', results);
                resolve(periferico)
            })
        })
    }
}

const perifericosM = new perifericosModel();
module.exports = perifericosM; 