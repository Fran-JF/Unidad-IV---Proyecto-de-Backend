var express = require('express');
var tecnicosRouter = express.Router();
const checkAutenticacion = require('../midelword/autenticacion');
var tecnicosController =require('../controllers/tecnicos_c')

// Procesamos el cuerpo de la solicitud POST --> (Middleware)
tecnicosRouter.use(express.json());

tecnicosRouter.get(
  '/',     function(req, res, next){
    roles = ["user","admin","tecnico"];
    checkAutenticacion(req, res, next, roles);
  },
  function(req, res, next) {
  tecnicosController.listar()
    .then((resultado)=>{
      res.send(resultado);
    })
    .catch((err)=>{
      res.send(err)
    })
});

tecnicosRouter.get(
  '/:id',     function(req, res, next){
    roles = ["user","admin","tecnico"];
    checkAutenticacion(req, res, next, roles);
  },
  function(req, res, next) {
    let tecnico = req.params.id
  tecnicosController.mostrarTecnico(tecnico)
    .then((resultado)=>{
      res.send(resultado);
    })
    .catch((err)=>{
      res.send(err)
    })
});

tecnicosRouter.post(
  '/',     function(req, res, next){
    roles = ["admin","tecnico"];
    checkAutenticacion(req, res, next, roles);
  },
  function(req, res, next) {
    let tecnico = req.body;
  tecnicosController.crear(tecnico)
    .then((resultado)=>{
      res.send(resultado);
    })
    .catch((err)=>{
      res.send(err)
    })
});

tecnicosRouter.put(
'/',     function(req, res, next){
  roles = ["admin","tecnico"];
  checkAutenticacion(req, res, next, roles);
},
function(req, res, next) {
    let tecnico = req.body;
    tecnicosController.actualizar(tecnico)
    .then((resultado)=>{
    res.send(resultado);
    })
    .catch((err)=>{
    res.send(err)
    })
});

tecnicosRouter.delete(
  '/',     function(req, res, next){
    roles = ["admin","tecnico"];
    checkAutenticacion(req, res, next, roles);
  },
  function(req, res, next) {
    let tecnico = req.body;
  tecnicosController.borrar(tecnico)
    .then((resultado)=>{
      res.send(resultado);
    })
    .catch((err)=>{
      res.send(err)
    })
});

module.exports = tecnicosRouter;