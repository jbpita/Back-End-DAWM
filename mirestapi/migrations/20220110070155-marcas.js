'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.createTable('marcas', {
      id_marca: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      nombre: {
        type: Sequelize.STRING(200),
        allowNull: true
      },
      descripcion: {
        type: Sequelize.STRING,
        allowNull: true
      },
      src: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('marcas');
  }
};
