var express = require('express');
var perifericosRouter = express.Router();
const checkAutenticacion = require('../midelword/autenticacion');
var perifericosController =require('../controllers/perifericos_c')

// Procesamos el cuerpo de la solicitud POST --> (Middleware)
perifericosRouter.use(express.json());

perifericosRouter.get(
  '/',     function(req, res, next){
    roles = ["user","admin","tecnico"];
    checkAutenticacion(req, res, next, roles);
  }, 
  function(req, res, next) {
    perifericosController.listar()
    .then((resultado)=>{
      res.send(resultado);
    })
    .catch((err)=>{
      res.send(err)
    })
});

perifericosRouter.get(
  '/:id',     function(req, res, next){
    roles = ["user","admin","tecnico"];
    checkAutenticacion(req, res, next, roles);
  },
  function(req, res, next) {
    let periferico = req.params.id
  perifericosController.mostrarperiferico(periferico)
    .then((resultado)=>{
      res.send(resultado);
    })
    .catch((err)=>{
      res.send(err)
    })
});

perifericosRouter.post(
  '/',     function(req, res, next){
    roles = ["admin","tecnico"];
    checkAutenticacion(req, res, next, roles);
  },
  function(req, res, next) {
    let periferico = req.body;
  perifericosController.crear(periferico)
    .then((resultado)=>{
      res.send(resultado);
    })
    .catch((err)=>{
      res.send(err)
    })
});

perifericosRouter.put(
'/',     function(req, res, next){
  roles = ["admin","tecnico"];
  checkAutenticacion(req, res, next, roles);
},
function(req, res, next) {
    let periferico = req.body;
    perifericosController.actualizar(periferico)
    .then((resultado)=>{
    res.send(resultado);
    })
    .catch((err)=>{
    res.send(err)
    })
});

perifericosRouter.delete(
  '/',     function(req, res, next){
    roles = ["admin","tecnico"];
    checkAutenticacion(req, res, next, roles);
  },
  function(req, res, next) {
    let periferico = req.body;
  perifericosController.borrar(periferico)
    .then((resultado)=>{
      res.send(resultado);
    })
    .catch((err)=>{
      res.send(err)
    })
});

module.exports = perifericosRouter;