'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.createTable('metodospagos', {
      id_metodo: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      tipo_pago: {
        type: Sequelize.STRING(50),
        allowNull: true
      },
      cvv: {
        type: Sequelize.STRING(3),
        allowNull: true
      },
      num_tarjeta: {
        type: Sequelize.STRING(20),
        allowNull: true
      },
      tiempo_expiracion: {
        type: Sequelize.DATEONLY,
        allowNull: true
      }
    }, );
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
