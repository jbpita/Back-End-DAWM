'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.createTable('productos',{
      id_producto: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      nombre: {
        type: Sequelize.STRING(200),
        allowNull: true
      },
      precio: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      detalle: {
        type: Sequelize.STRING,
        allowNull: true
      },
      stock: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      src:{
        type: Sequelize.STRING,
        allowNull: true
      },
      id_marca: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'marcas',
          key: 'id_marca'
        }
      }
    },);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     */
     await queryInterface.dropTable('productos');    
  }
};
