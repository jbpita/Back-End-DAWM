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
     await queryInterface.bulkInsert('Productos', [{
         id_producto:1,
         nombre: 'Bosch S3 30H FE',
         precio: 130.00,
         detalle:"12 Voltios / 15 Placas / 82 Ah | CCA(-18ºC) : 630 A Cap.Reserva: 182 min | Largo 33.8 cm – Ancho 16.2 cm – Alto 24.1 cm ",
         stock: 5,
         src:"./assets/img/tiposBaterias/Bosch/BoschS330HFE.jpg",
         id_marca: 1,
       },{
        id_producto:2,
        nombre: 'Bosch S3 N150 HD',
        precio: 200.00,
        detalle:"12 Voltios / 24 Placas / 150 Ah | CCA(-18ºC) : 880 A Cap.Reserva: 250 min | Largo 39 cm – Ancho 17 cm – Alto 23.2 cm ",
        stock: 6,
        src:"./assets/img/tiposBaterias/Bosch/BoschS3N150HD.jpg",
        id_marca: 1,
      },
      {
        id_producto:3,
        nombre: 'Bosch S4 24 HP',
        precio: 105.00,
        detalle:"12 Voltios / 13 Placas / 64 Ah | CCA(-18ºC): 550 A Cap.Reserva: 127 min | Largo 25.5 cm – Ancho 17 cm – Alto 22.4 cm ",
        stock: 2,
        src:"./assets/img/tiposBaterias/Bosch/BoschS424HP.jpg",
        id_marca: 1,
      },
      {
        id_producto:4,
        nombre: 'Dacar BP 25-70',
        precio: 104.00,
        detalle:"12 Voltios / 14 Placas / 70 Ah | CCA(-18ºC): 520 A Cap.Reserva: 110 min | Largo 23 cm – Ancho 17.5 cm – Alto 21.5 cm ",
        stock: 1,
        src:"./assets/img/tiposBaterias/Dacar/DacarBP25-70.png",
        id_marca: 2,
      },
      {
        id_producto:5,
        nombre: 'Dacar ECO 42-40',
        precio: 50.00,
        detalle:"12 Voltios / 11 Placas / 40 Ah | CCA(-18ºC): 350 A Cap.Reserva: 60 min | Largo 23.3 cm – Ancho 17.5 cm – Alto 17.5 cm ",
        stock: 2,
        src:"./assets/img/tiposBaterias/Dacar/DacarECO42-40.png",
        id_marca: 2,
      },
      {
        id_producto:6,
        nombre: 'Dacar TAXI 42-60',
        precio: 75.00,
        detalle:"12 Voltios / 13 Placas / 60 Ah | CCA(-18ºC): 500 A Cap.Reserva: 92 min | Largo 23.3 cm – Ancho 17.5 cm – Alto 17.5 cm ",
        stock: 7,
        src:"./assets/img/tiposBaterias/Dacar/DacarTAXI42-60.png",
        id_marca: 2,
      },
      {
        id_producto:7,
        nombre: 'Mac AGM LN4',
        precio: 300.00,
        detalle:"12 Voltios / 17 Placas / 100 Ah | CCA(-18ºC): 800 A Cap.Reserva: 140 min | Largo 31.5 cm – Ancho 17.5 cm – Alto 19 cm ",
        stock: 8,
        src:"./assets/img/tiposBaterias/Mac/MacAGMLN4.png",
        id_marca: 3,
      }
      ,
      {
        id_producto:8,
        nombre: 'Mac GOLD PLUS 24 950',
        precio: 110.00,
        detalle:"12 Voltios / 15 Placas / 95 Ah | CCA(-18ºC): 650 A Cap.Reserva: 135 min | Largo 26 cm – Ancho 17.3 cm – Alto 20.2 cm ",
        stock: 8,
        src:"./assets/img/tiposBaterias/Mac/MacAGMLN4.png",
        id_marca: 3,
      },
      {
        id_producto:9,
        nombre: 'Mac SILVER PLUS 31T 852',
        precio: 120.00,
        detalle:"12 Voltios / 19 Placas / 100 Ah | CCA(-18ºC): 800 A Cap.Reserva: 185 min | Largo 32.9 cm – Ancho 17.1 cm – Alto 23.8 cm",
        stock: 5,
        src:"./assets/img/tiposBaterias/Mac/MacSILVERPLUS31T852.png",
        id_marca: 3,
      }], {});
      },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Productos', null, {});
  }
};
