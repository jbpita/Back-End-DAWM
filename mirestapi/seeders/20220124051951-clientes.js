'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Clientes', [{
      id_cliente:1,
      cedula: '0953737707',
      nombre: 'Pepe Gustamante',
      apellido: 'Bravo Paz',
      direccion: "Guasmo Sur",
      id_usuario:5,
      telefono: 3082941,
      fechaNacimiento: new Date(1999,8,19)
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Clientes', null, {});
  }
};
