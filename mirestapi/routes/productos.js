var express = require('express');

var router = express.Router();

const Sequelize = require('../models/index.js').sequelize;

const initModels = require('../models/init-models');


var models= initModels(Sequelize)

/* GET home page. */
router.get('/', function(req, res, next) {
    models.productos.findAll({ 
        attributes: { exclude: ["updatedAt"] }
    })
    .then(productos => {
            res.send(productos)
         })
         .catch(error => res.status(400).send(error))
      
});



module.exports = router;