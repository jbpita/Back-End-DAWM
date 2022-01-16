'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
      await queryInterface.createTable('compras', { 
        id_compra: {
          autoIncrement: true,
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        fecha_compra: {
          type: Sequelize.DATE,
          allowNull: true
        },
        total: {
          type: Sequelize.FLOAT,
          allowNull: true
        },
        id_cliente: {
          type: Sequelize.INTEGER,
          allowNull: true,
          onDelete: "CASCADE",
          references: {
            model: 'clientes',
            key: 'id_cliente'
          }
        },
        id_metodo: {
          type: Sequelize.INTEGER,
          allowNull: true,
          unique:true,
          onDelete: "CASCADE",
          references: {
            model: 'metodospagos',
            key: 'id_metodo'
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
     await queryInterface.dropTable('compras');
  }
};
