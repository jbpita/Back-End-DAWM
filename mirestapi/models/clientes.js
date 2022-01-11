const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clientes', {
    id_cliente: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cedula: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    nombre: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    apellido: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    correo: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    direccion: {
      type: DataTypes.STRING(400),
      allowNull: true
    },
    telefono: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fechaNacimiento: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'clientes',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_cliente" },
        ]
      },
    ]
  });
};
