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
     await queryInterface.bulkInsert('Usuarios', [{
      id_usuario:1,
      correo: 'taty@espol.edu.ec',
      password: '$2a$10$n.u/7KV6qOhpIbh361hF2ucCAPpZCVnxwIaUgBaeMGv1/OV./bFNe',
      rol: "admin",
    },
    {
      id_usuario:2,
      correo: 'pita@espol.edu.ec',
      password: '$2a$10$n.u/7KV6qOhpIbh361hF2ucCAPpZCVnxwIaUgBaeMGv1/OV./bFNe',
      rol: "admin",
    },
    {
      id_usuario:3,
      correo: 'adriel@espol.edu.ec',
      password: '$2a$10$n.u/7KV6qOhpIbh361hF2ucCAPpZCVnxwIaUgBaeMGv1/OV./bFNe',
      rol: "admin",
    },
    {
      id_usuario:4,
      correo: 'moreano@espol.edu.ec',
      password: '$2a$10$n.u/7KV6qOhpIbh361hF2ucCAPpZCVnxwIaUgBaeMGv1/OV./bFNe',
      rol: "admin",
    },
    {
      id_usuario:5,
      correo: 'cliente@hotmail.com',
      password: '$2a$10$n.u/7KV6qOhpIbh361hF2ucCAPpZCVnxwIaUgBaeMGv1/OV./bFNe',
      rol: "cliente",
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
