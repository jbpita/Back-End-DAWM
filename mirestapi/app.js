var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var productosRouter = require('./routes/productos');
var marcasRouter = require('./routes/marcas');
var loginRouter = require('./routes/login');
var comprasRouter = require('./routes/compras');
var detalleComprasRouter = require('./routes/detallecompra');
var clienteRouter = require('./routes/cliente');
var metodosPagosRouter = require('./routes/metodospagos');
var correoRouter = require('./routes/correo')

var cors = require('cors');
var cookieSession = require('cookie-session');


var app = express();
app.use(cors());
app.use(cookieSession({
    name: 'session',
    keys: ['DAWM'],
    
    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
    }))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/productos', productosRouter);
app.use('/marcas' , marcasRouter); 
app.use('/login' , loginRouter); 
app.use('/compras' , comprasRouter);
app.use('/clientes' , clienteRouter);
app.use('/detallecompras' , detalleComprasRouter);
app.use('/metodospagos' , metodosPagosRouter);
app.use('/correo', correoRouter);


module.exports = app;
