var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var productosRouter = require('./routes/productos');
var marcasRouter = require('./routes/marcas');
var cors = require('cors');

var app = express();
app.use(cors());


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/productos', productosRouter);
app.use('/marcas' , marcasRouter); 


module.exports = app;
