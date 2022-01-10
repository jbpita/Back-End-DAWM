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
      cantidad: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      total: {
        type: DataTypes.DECIMAL(10,0),
        allowNull: true
      },
      id_compra: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'compras',
          key: 'id_compra'
        }
      },
      id_producto: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'productos',
          key: 'id_producto'
        }
      }
    }, {
      sequelize,
      tableName: 'detallecompras',
      timestamps: false,
      indexes: [
        {
          name: "id_compra",
          using: "BTREE",
          fields: [
            { name: "id_compra" },
          ]
        },
        {
          name: "id_producto",
          using: "BTREE",
          fields: [
            { name: "id_producto" },
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
