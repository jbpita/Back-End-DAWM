const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('metodospagos', {
    id_metodo: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tipo_pago: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    cvv: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    num_tarjeta: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    tiempo_expiracion: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'metodospagos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_metodo" },
        ]
      },
    ]
  });
};
