var express = require('express');

var router = express.Router();

const Sequelize = require('../models/index.js').sequelize;

const initModels = require('../models/init-models');


var models= initModels(Sequelize)

/* GET home page. */
router.get('/', (req, res, next) => {
    models.marcas.findAll({ 
        attributes: { exclude: ["updatedAt"] }
    })
    .then(marcas => {
            res.status(200).send(marcas)
    })
    .catch(error => res.status(400).send(error))
      
});

/* POST : Ingresar producto */

router.post('/', async (req , res , next) => {
    let nombre = req.body.nombre;
    let descripcion = req.body.descripcion;
    let src = req.body.src;

    try{
        let marca = await models.marcas.create({
            nombre : nombre,
            descripcion: descripcion,
            src : src,
        },
        {   fields : ['nombre' , 'descripcion' , 'src'] }
        );

        console.log('marca: '  , marca);

        res.status(201).send(marca);

    }catch(error){
        console.log('Error: ',error);
        res.status(404).send(error)
    }
    
});

module.exports = router;