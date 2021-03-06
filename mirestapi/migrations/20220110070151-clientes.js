'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.createTable('clientes', {
      id_cliente: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      cedula: {
        type: Sequelize.STRING(10),
        allowNull: true
      },
      nombre: {
        type: Sequelize.STRING(250),
        allowNull: true
      },
      apellido: {
        type: Sequelize.STRING(250),
        allowNull: true
      },
      id_usuario: {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: true,
        references: {
          model: 'usuarios',
          key: 'id_usuario'
        }
      },
      direccion: {
        type: Sequelize.STRING(400),
        allowNull: true
      },
      telefono: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      fechaNacimiento: {
        type: Sequelize.DATE,
        allowNull: true
      }
    },);
  },

  down: async (queryInterface, Sequelize) => {

    /**
     * 
     * 
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.dropTable('clientes')
  }
};
