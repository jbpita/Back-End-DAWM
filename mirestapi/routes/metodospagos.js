var express = require('express');

var router = express.Router();

const Sequelize = require('../models/index.js').sequelize;

const initModels = require('../models/init-models');

var models= initModels(Sequelize);

/* GET : consultar compras */

router.get('/' , (req , res , next) => {
    models.metodospagos.findAll({
        attributes: { exclude: ["updatedAt"] }
    }).then(metodospagos => {
        res.status(200).send(metodospagos)
    }).catch(error => res.status(400).send(error));
});

/* POST : Ingresar un metodode pago relacionado a na compra en especifico  */

router.post('/' , async (req , res , next) => {
    let tipo_pago = req.body.tipo_pago;
    let cvv = req.body.cvv;
    let num_tarjeta = req.body.num_tarjeta;
    let tiempo_expiracion = req.body.tiempo_expiracion;

    try{

        let metodo_pago = await models.metodospagos.create(
                {   
                    tipo_pago : tipo_pago,
                    cvv : cvv,
                    num_tarjeta : num_tarjeta,
                    tiempo_expiracion : tiempo_expiracion
                },
                {
                    fields : [ 'tipo_pago' , 'cvv' , 'num_tarjeta' , 'tiempo_expiracion' ]
                }
            );

        console.log("metodo de pago creado con exito: " , metodo_pago);

        res.send(metodo_pago);

    }catch(error){
        res.status(400).send(error);
    }
})

/* DELETE: eliminar un pago y por ende la compra */

router.delete('/:id_metodo' , async (req , res , next) => {
    let id_metodo = req.params.id_metodo;

    try{
        let metodo =  await models.metodospagos({
            where : { id_metodo : id_metodo }
        });

        if(metodo === 0){
            console.log("El pago no pudo ser eliminado");
            res.status(404).send("No se puede eliminar el pago ");
        }else {
            log("El pago no pudo ser eliminado");
            res.status(200).send("No se puede eliminar el pago ");
        }

    }catch(error){
        res.status(404).send(error);
    }

})
module.exports = router;