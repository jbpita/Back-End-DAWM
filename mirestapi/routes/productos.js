var express = require('express');

var router = express.Router();

const Sequelize = require('../models/index.js').sequelize;

const initModels = require('../models/init-models');


var models= initModels(Sequelize)

/* GET home page. */
router.get('/', (req, res, next) => {
    models.productos.findAll({ 
        attributes: { exclude: ["updatedAt"] }
    })
    .then(productos => {
            res.send(productos)
         })
         .catch(error => res.status(400).send(error))
      
});

/* POST : Ingresar producto */

router.post('/', async (req , res , next) => {
    let nombre = req.body.nombre;
    let precio = req.body.precio;
    let detalle = req.body.detalle;
    let stock = req.body.stock;
    let src = req.body.src;
    let id_marca = req.body.id_marca;

    try{
        let marca = await models.marcas.findAll({
            attributes: { exclude: ["updatedAt"] },
            where: {id_marca : id_marca}
        });

        console.log('marca:' , marca);

        let producto = await models.productos.create({
            nombre : nombre,
            precio : precio,
            detalle: detalle,
            stock : stock,
            src : src,
            id_marca : id_marca
        },
        {   fields : ['nombre' , 'precio' , 'detalle' , 'stock' , 'src' , 'id_marca'] }
        );

        console.log('producto: '  , producto);

        res.status(201).send(producto);

    }catch(error){
        console.log('Error: ',error);
        res.status(404).send(error)
    }
    
});

module.exports = router;