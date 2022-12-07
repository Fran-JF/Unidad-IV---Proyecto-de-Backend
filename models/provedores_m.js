const connection = require('./conexion');
var conexion = connection

class provedoresModel{
    listar(){
        return new Promise((resolve, reject)=>{
            console.log("a model")
            conexion.query('SELECT * from `proveedores`', function (error, results, fields) {
                if (error) throw error;
                console.log(results);
                resolve(results);
            });

        })
    }

    mostrarProvedor(provedor){
        return new Promise((resolve, reject)=>{
            console.log("a model")
            conexion.query('SELECT * FROM `proveedores` WHERE id_prove = '+provedor, function (error, results, fields) {
                if (error) throw error;
                console.log(results);
                resolve(results);
            });

        })
    }

    crear(provedor){
        let nombre = '"'+provedor.nombre+'"'
        let rif = '"'+provedor.rif+'"'
        let ubicacion = '"'+provedor.ubicacion+'"'
        return new Promise((resolve, reject) => {
            console.log('a model')
            conexion.query('INSERT INTO proveedores (nombre_prove, rif_prove, ubicacion_prove) VALUES (' +nombre+ ', ' +rif+ ', ' +ubicacion+ ')',
            function (error, results, fields){
                if(error) throw error;
                console.log('Se ha guardado el registro');
                console.log(results);
                resolve(provedor)
            }
        );
        })
    }

    actualizar(provedor){
        let id = '"'+provedor.id+'"'
        let nombre = '"'+provedor.nombre+'"'
        let rif = '"'+provedor.rif+'"'
        let ubicacion = '"'+provedor.ubicacion+'"'
        return new Promise((resolve, reject) => {
            console.log('a model')
            conexion.query('UPDATE proveedores SET nombre_prove = '+nombre+', rif_prove = '+rif+', ubicacion_prove = '+ubicacion+' WHERE id_prove = '+id,
            function (error, results, fields){
                if(error) throw error;
                console.log('SE HA ACTUALIZADO EL REGISTRO DE PROVEDOR', results);
                resolve(provedor)
            });
        })
    }

    borrar(provedor){
        let id = provedor.id
        return new Promise((resolve, reject) => {
            console.log('a model');
            conexion.query('DELETE FROM proveedores WHERE id_prove = '+id, 
            function (error, results, fields){
                if(error) throw error;
                console.log('SE HA BORRADO EL REGISTRO', results);
                resolve(provedor)
            })
        })
    }
}

const provedoresM = new provedoresModel();
module.exports = provedoresM; 