const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('detallecompras', {
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    id_compra: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'compras',
        key: 'id_compra'
      }
    },
    id_producto: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'productos',
        key: 'id_producto'
      }
    }
  }, {
    sequelize,
    tableName: 'detallecompras',
    timestamps: false,
    indexes: [
      {
        name: "id_compra",
        using: "BTREE",
        fields: [
          { name: "id_compra" },
        ]
      },
      {
        name: "id_producto",
        using: "BTREE",
        fields: [
          { name: "id_producto" },
        ]
      },
    ]
  });
};
