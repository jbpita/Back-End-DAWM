'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.createTable('contactos', {
      id_contacto: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      asunto: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
      detalle: {
        type: DataTypes.STRING(500),
        allowNull: true
      },
      fechaNacimiento: {
        type: DataTypes.DATE,
        allowNull: true
      },
      id_cliente: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'clientes',
          key: 'id_cliente'
        }
      }
    }, {
      sequelize,
      tableName: 'contactos',
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [
            { name: "id_contacto" },
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
