'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.createTable('detallecompras', {
      id_detalleCompra: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      cantidad: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      total: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      id_compra: {
        type: Sequelize.INTEGER,
        allowNull: true,
        onDelete: "CASCADE",
        references: {
          model: 'compras',
          key: 'id_compra'
        }
      },
      id_producto: {
        type: Sequelize.INTEGER,
        allowNull: true,
        onDelete: "CASCADE",
        references: {
          model: 'productos',
          key: 'id_producto'
        }
      }
    },);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     */ await queryInterface.dropTable('detallecompras');

  }
};
