var express = require('express');

var router = express.Router();

const Sequelize = require('../models/index.js').sequelize;

const initModels = require('../models/init-models');

var models= initModels(Sequelize);

/* GET : consultar compras */

router.get('/' , async (req , res , next) => {
    models.compras.findAll({
        attributes: { exclude: ["updatedAt"] }
    }).then(compras => {
        res.status(200).send(compras)
    }).catch(error => res.status(400).send(error));
});

router.get('/:id_compra' , async (req , res , next) => {

    let id_compra = req.params.id_compra;

    models.compras.findAll({
        attributes: { exclude: ["updatedAt"] },
        where: {id_compra : id_compra}
    }).then(compras => {
        res.status(200).send(compras)
    }).catch(error => res.status(400).send(error));
});

/* POST : ingresar compras */

router.post('/' , async (req , res , next) => {
    let fecha_compra = req.body.fecha_compra;
    let total = req.body.total;
    let id_cliente = req.body.id_cliente;
    let id_metodo = req.body.id_metodo;

    try{
        let cliente = await models.clientes.findAll({
            attributes: { exclude: ["updatedAt"] },
            where: {id_cliente : id_cliente}
        });

        let metodo = await models.metodospagos.findAll({
            attributes: { exclude: ["updatedAt"] },
            where: {id_metodo : id_metodo}
        });

        if(cliente && metodo ){
            let compra = await models.compras.create({
                fecha_compra : fecha_compra,
                total : total,
                id_cliente : id_cliente,
                id_metodo : id_metodo
            },
            {   fields : ['fecha_compra' , 'total' , 'id_cliente' , 'id_metodo'] }
            );

            console.log('compra: ' , compra);

            res.send(compra);
        }else{
            res.status(404).send('Error: recurso no existe');
        }

    }catch(error){
        res.status(400).send(error);
    }
});

module.exports = router;