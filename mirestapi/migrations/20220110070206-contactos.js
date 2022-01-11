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
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      asunto: {
        type: Sequelize.STRING(50),
        allowNull: true
      },
      detalle: {
        type: Sequelize.STRING(500),
        allowNull: true
      },
      fechaNacimiento: {
        type: Sequelize.DATE,
        allowNull: true
      },
      id_cliente: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'clientes',
          key: 'id_cliente'
        }
      }
    },);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.dropTable('contactos');
  }
};
