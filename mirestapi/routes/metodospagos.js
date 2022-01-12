var express = require('express');

var router = express.Router();

const Sequelize = require('../models/index.js').sequelize;

const initModels = require('../models/init-models');

var models= initModels(Sequelize);

/* GET : consultar compras */

router.get('/' , async (req , res , next) => {
    models.metodospagos.findAll({
        attributes: { exclude: ["updatedAt"] }
    }).then(metodospagos => {
        res.status(200).send(metodospagos)
    }).catch(error => res.status(400).send(error));
});

