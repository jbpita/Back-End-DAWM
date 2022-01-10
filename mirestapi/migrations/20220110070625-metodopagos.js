'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.createTable('metodopagos', {
      id_metodo: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      tipo_pago: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
      cvv: {
        type: DataTypes.STRING(3),
        allowNull: true
      },
      num_tarjeta: {
        type: DataTypes.STRING(20),
        allowNull: true
      },
      tiempo_expiracion: {
        type: DataTypes.DATEONLY,
        allowNull: true
      }
    }, {
      sequelize,
      tableName: 'metodospagos',
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
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
