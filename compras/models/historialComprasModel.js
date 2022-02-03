var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var historialComprasSchema = new Schema({
	'id_compra' : Number,
	'id_producto' : String,
	'cantidad' : Number,
	'total' : Number,
	'nombre' : String,
	'fecha_compra' : Date,
	'id_cliente' : Number
});

module.exports = mongoose.model('historialCompras', historialComprasSchema);
