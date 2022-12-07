var express = require('express');
var provedoresRouter = express.Router();
const checkAutenticacion = require('../midelword/autenticacion');
var provedoresController =require('../controllers/provedores_c')

// Procesamos el cuerpo de la solicitud POST --> (Middleware)
provedoresRouter.use(express.json());

provedoresRouter.get(
  '/',     function(req, res, next){
    roles = ["user","admin","tecnico"];
    checkAutenticacion(req, res, next, roles);
  },
  function(req, res, next) {
  provedoresController.listar()
    .then((resultado)=>{
      res.send(resultado);
    })
    .catch((err)=>{
      res.send(err)
    })
});

provedoresRouter.get(
  '/:id',     function(req, res, next){
    roles = ["user","admin","tecnico"];
    checkAutenticacion(req, res, next, roles);
  },
  function(req, res, next) {
    let provedor = req.params.id
  provedoresController.mostrarProvedor(provedor)
    .then((resultado)=>{
      res.send(resultado);
    })
    .catch((err)=>{
      res.send(err)
    })
});

provedoresRouter.post(
  '/',     function(req, res, next){
    roles = ["admin","tecnico"];
    checkAutenticacion(req, res, next, roles);
  },
  function(req, res, next) {
    let provedor = req.body;
  provedoresController.crear(provedor)
    .then((resultado)=>{
      res.send(resultado);
    })
    .catch((err)=>{
      res.send(err)
    })
});

provedoresRouter.put(
'/',     function(req, res, next){
  roles = ["admin","tecnico"];
  checkAutenticacion(req, res, next, roles);
},
function(req, res, next) {
    let provedor = req.body;
    provedoresController.actualizar(provedor)
    .then((resultado)=>{
    res.send(resultado);
    })
    .catch((err)=>{
    res.send(err)
    })
});

provedoresRouter.delete(
  '/',     function(req, res, next){
    roles = ["admin","tecnico"];
    checkAutenticacion(req, res, next, roles);
  },
  function(req, res, next) {
    let provedor = req.body;
  provedoresController.borrar(provedor)
    .then((resultado)=>{
      res.send(resultado);
    })
    .catch((err)=>{
      res.send(err)
    })
});

module.exports = provedoresRouter;