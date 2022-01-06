var DataTypes = require("sequelize").DataTypes;
var _clientes = require("./clientes");
var _compras = require("./compras");
var _contactos = require("./contactos");
var _detallecompras = require("./detallecompras");
var _marcas = require("./marcas");
var _metodospagos = require("./metodospagos");
var _productos = require("./productos");

function initModels(sequelize) {
  var clientes = _clientes(sequelize, DataTypes);
  var compras = _compras(sequelize, DataTypes);
  var contactos = _contactos(sequelize, DataTypes);
  var detallecompras = _detallecompras(sequelize, DataTypes);
  var marcas = _marcas(sequelize, DataTypes);
  var metodospagos = _metodospagos(sequelize, DataTypes);
  var productos = _productos(sequelize, DataTypes);

  compras.belongsTo(clientes, { as: "id_cliente_cliente", foreignKey: "id_cliente"});
  clientes.hasMany(compras, { as: "compras", foreignKey: "id_cliente"});
  contactos.belongsTo(clientes, { as: "id_cliente_cliente", foreignKey: "id_cliente"});
  clientes.hasMany(contactos, { as: "contactos", foreignKey: "id_cliente"});
  detallecompras.belongsTo(compras, { as: "id_compra_compra", foreignKey: "id_compra"});
  compras.hasMany(detallecompras, { as: "detallecompras", foreignKey: "id_compra"});
  productos.belongsTo(marcas, { as: "id_marca_marca", foreignKey: "id_marca"});
  marcas.hasMany(productos, { as: "productos", foreignKey: "id_marca"});
  compras.belongsTo(metodospagos, { as: "id_metodo_metodospago", foreignKey: "id_metodo"});
  metodospagos.hasMany(compras, { as: "compras", foreignKey: "id_metodo"});
  detallecompras.belongsTo(productos, { as: "id_producto_producto", foreignKey: "id_producto"});
  productos.hasMany(detallecompras, { as: "detallecompras", foreignKey: "id_producto"});

  return {
    clientes,
    compras,
    contactos,
    detallecompras,
    marcas,
    metodospagos,
    productos,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
