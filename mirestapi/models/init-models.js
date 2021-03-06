var DataTypes = require("sequelize").DataTypes;
var _clientes = require("./clientes");
var _compras = require("./compras");
var _contactos = require("./contactos");
var _detallecompras = require("./detallecompras");
var _marcas = require("./marcas");
var _metodospagos = require("./metodospagos");
var _productos = require("./productos");
var _usuarios = require("./usuarios");

function initModels(sequelize) {
  var clientes = _clientes(sequelize, DataTypes);
  var compras = _compras(sequelize, DataTypes);
  var contactos = _contactos(sequelize, DataTypes);
  var detallecompras = _detallecompras(sequelize, DataTypes);
  var marcas = _marcas(sequelize, DataTypes);
  var metodospagos = _metodospagos(sequelize, DataTypes);
  var productos = _productos(sequelize, DataTypes);
  var usuarios = _usuarios(sequelize, DataTypes);

  compras.belongsTo(clientes, { as: "id_cliente_cliente", foreignKey: "id_cliente" ,onDelete: 'cascade', hooks: true});
  clientes.hasMany(compras, { as: "compras", foreignKey: "id_cliente" ,onDelete: 'cascade', hooks: true});
  contactos.belongsTo(clientes, { as: "id_cliente_cliente", foreignKey: "id_cliente" ,onDelete: 'cascade', hooks: true});
  clientes.hasMany(contactos, { as: "contactos", foreignKey: "id_cliente" ,onDelete: 'cascade', hooks: true});
  detallecompras.belongsTo(compras, { as: "id_compra_compra", foreignKey: "id_compra" ,onDelete: 'cascade', hooks: true});
  compras.hasMany(detallecompras, { as: "detallecompras", foreignKey: "id_compra" ,onDelete: 'cascade', hooks: true});
  productos.belongsTo(marcas, {foreignKey: "id_marca", targetKey: "id_marca" ,onDelete: 'cascade', hooks: true});
  marcas.hasMany(productos, {foreignKey: "id_marca", targetKey: "id_marca" ,onDelete: 'cascade', hooks: true});
  compras.belongsTo(metodospagos, { as: "id_metodo_metodospago", foreignKey: "id_metodo" ,onDelete: 'cascade', hooks: true});
  metodospagos.hasOne(compras, { as: "compra", foreignKey: "id_metodo" ,onDelete: 'cascade', hooks: true});
  detallecompras.belongsTo(productos, { as: "id_producto_producto", foreignKey: "id_producto" ,onDelete: 'cascade', hooks: true});
  productos.hasMany(detallecompras, { as: "detallecompras", foreignKey: "id_producto" ,onDelete: 'cascade', hooks: true});
  clientes.belongsTo(usuarios, { as: "id_usuario_usuario", foreignKey: "id_usuario" ,onDelete: 'cascade', hooks: true});
  usuarios.hasOne(clientes, { as: "cliente", foreignKey: "id_usuario" ,onDelete: 'cascade', hooks: true});

  return {
    clientes,
    compras,
    contactos,
    detallecompras,
    marcas,
    metodospagos,
    productos,
    usuarios,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
