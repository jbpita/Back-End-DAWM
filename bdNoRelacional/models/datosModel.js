var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var datosSchema = new Schema({
	'id_compra' : String,
	'id_producto': String,
	'cantidad_compra' : String,
	'precio_producto' : String,
	'total' : String,
	'fecha_compra' : String,
	'id_cliente' : String,
	'nombre_cliente' : String
});

module.exports = mongoose.model('datos', datosSchema);
