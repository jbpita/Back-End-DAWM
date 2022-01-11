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
     await queryInterface.bulkInsert('Marcas', [{
      id_marca:1,
      nombre: 'BOSCH',
      descripcion: 'Ofrece S3, S4, S5 y S6, estás 4 líneas de productos a medida para diferentes necesidades y tipos de vehículos',
      src: "https://www.boschecuador.com/productos_gallery/img/f29515d5b49f7851fef86e63b2d27e6c.jpg",
    },{
      id_marca:2,
      nombre: 'DACAR',
      descripcion: 'Tecnologías de punta, actuales en el ámbito de las baterías, con lo que se producen mayores cantidades de energía',
      src: "https://static.frecuento.com//medias/40367188-02-BASEIMAGE-Midres?context=bWFzdGVyfGZyZWN1ZW50b3w2MjYzNDB8aW1hZ2UvanBlZ3xmcmVjdWVudG8vaGIwL2g2MC85MTAzOTExNjE2NTQyLmpwZ3wyMmNkYmQ1MTc5OTZiNDEyMzA4NGY1NzFjOGZhMTMwZTA1NjM4Mjk5YzU5N2YwOWQ4MDVmYmMyZTUwMWNlMTY2",
    },
    {
      id_marca:3,
      nombre: 'MAC',
      descripcion: 'Es confiable, duradera y poderosa, asegurando un mejor desempeño para soportar las altas demandas eléctricas',
      src: "https://napaecuador.com/wp-content/uploads/MAC78950-2.jpg",
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Marcas', null, {});
  }
};
