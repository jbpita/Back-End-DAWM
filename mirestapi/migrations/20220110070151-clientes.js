'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.createTable('clientes', {
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
        type: DataTypes.STRING(50),
        allowNull: true
      },
      apellido: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
      correo: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      direccion: {
        type: DataTypes.STRING(10),
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
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
