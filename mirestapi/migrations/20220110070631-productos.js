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
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      nombre: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
      precio: {
        type: DataTypes.DECIMAL(10,0),
        allowNull: true
      },
      detalle: {
        type: DataTypes.STRING(500),
        allowNull: true
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      id_marca: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'marcas',
          key: 'id_marca'
        }
      }
    }, {
      sequelize,
      tableName: 'productos',
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [
            { name: "id_producto" },
          ]
        },
        {
          name: "id_marca",
          using: "BTREE",
          fields: [
            { name: "id_marca" },
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
