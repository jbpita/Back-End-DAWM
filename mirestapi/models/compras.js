const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('compras', {
    id_compra: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fecha_compra: {
      type: DataTypes.DATE,
      allowNull: true
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    id_cliente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'clientes',
        key: 'id_cliente'
      }
    },
    id_metodo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'metodospagos',
        key: 'id_metodo'
      },
      unique: "compras_ibfk_2"
    }
  }, {
    sequelize,
    tableName: 'compras',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_compra" },
        ]
      },
      {
        name: "id_metodo",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_metodo" },
        ]
      },
      {
        name: "id_cliente",
        using: "BTREE",
        fields: [
          { name: "id_cliente" },
        ]
      },
    ]
  });
};
