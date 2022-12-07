var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config({path: ('./.env')});

var indexRouter = require('./routes/index');
var equiposRouter = require('./routes/equipos');
var trabajosRouter = require('./routes/trabajos');
var usuariosRouter = require('./routes/usuarios');
var provedoresRouter = require('./routes/provedores');
var perifericosRouter = require('./routes/perifericos');
var tecnicosRouter = require('./routes/tecnicos');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/equipos', equiposRouter);
app.use('/trabajos', trabajosRouter);
app.use('/usuarios', usuariosRouter);
app.use('/provedores', provedoresRouter);
app.use('/perifericos', perifericosRouter);
app.use('/tecnicos', tecnicosRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
