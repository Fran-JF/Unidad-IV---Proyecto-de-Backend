const connection = require('./conexion');
var conexion = connection

class tecnicosModel{
    listar(){
        return new Promise((resolve, reject)=>{
            console.log("a model")
            conexion.query('SELECT * from `tecnicos`', function (error, results, fields) {
                if (error) throw error;
                console.log(results);
                resolve(results);
            });

        })
    }

    mostrarTecnico(tecnico){
        return new Promise((resolve, reject)=>{
            console.log("a model")
            conexion.query('SELECT * FROM `tecnicos` WHERE id_tec = '+tecnico, function (error, results, fields) {
                if (error) throw error;
                console.log(results);
                resolve(results);
            });

        })
    }

    crear(tecnico){
        let nombre = '"'+tecnico.nombre+'"'
        let usuario = '"'+tecnico.usuario+'"'
        let profesion = '"'+tecnico.profesion+'"'
        return new Promise((resolve, reject) => {
            console.log('a model')
            conexion.query('INSERT INTO tecnicos (nombre_tec, usuario_tec, profesion_tec) VALUES (' +nombre+ ', ' +usuario+ ', ' +profesion+ ')',
            function (error, results, fields){
                if(error) throw error;
                console.log('Se ha guardado el registro en tecnicos');
                console.log(results);
                resolve(tecnico)
            }
        );
        })
    }

    actualizar(tecnico){
        let id = '"'+tecnico.id+'"'
        let nombre = '"'+tecnico.nombre+'"'
        let usuario = '"'+tecnico.usuario+'"'
        let profesion = '"'+tecnico.profesion+'"'
        return new Promise((resolve, reject) => {
            console.log('a model')
            conexion.query('UPDATE tecnicos SET nombre_tec = '+nombre+', usuario_tec = '+usuario+', profesion_tec = '+profesion+' WHERE id_tec = '+id,
            function (error, results, fields){
                if(error) throw error;
                console.log('SE HA ACTUALIZADO EL REGISTRO DE tecnico', results);
                resolve(tecnico)
            });
        })
    }

    borrar(tecnico){
        let id = tecnico.id
        return new Promise((resolve, reject) => {
            console.log('a model');
            conexion.query('DELETE FROM tecnicos WHERE id_tec = '+id, 
            function (error, results, fields){
                if(error) throw error;
                console.log('SE HA BORRADO EL REGISTRO DE TECNICOS', results);
                resolve(tecnico)
            })
        })
    }
}

const tecnicosM = new tecnicosModel();
module.exports = tecnicosM; 