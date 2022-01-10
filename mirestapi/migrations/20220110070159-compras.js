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
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        fecha_compra: {
          type: DataTypes.DATE,
          allowNull: true
        },
        total: {
          type: DataTypes.DECIMAL(10,0),
          allowNull: true
        },
        id_cliente: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: 'clientes',
            key: 'id_cliente'
          }
        },
        id_metodo: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: 'metodospagos',
            key: 'id_metodo'
          }
        }
      }, {
        sequelize,
        tableName: 'compras',
        timestamps: false,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [
              { name: "id_compra" },
            ]
          },
          {
            name: "id_cliente",
            using: "BTREE",
            fields: [
              { name: "id_cliente" },
            ]
          },
          {
            name: "id_metodo",
            using: "BTREE",
            fields: [
              { name: "id_metodo" },
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
