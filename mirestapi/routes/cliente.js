var express = require('express');

var router = express.Router();

const Sequelize = require('../models/index.js').sequelize;

const initModels = require('../models/init-models');

var models= initModels(Sequelize);

/* GET : Consultar los clientes registrados */

router.get('/' , (req , res , next) => {
    models.clientes.findAll({
        attributes: { exclude: ["updatedAt"] }
    })
    .then( clientes => {
        res.status(200).send(clientes);
    })
    .catch( error => {
        res.status(400).send(error);
    });
});
// Recuperar cliente por id usuario
router.get('/:id_usuario', (req, res, next) => {
    let id_usuario = req.params.id_usuario;

    models.clientes.findAll({ 
        attributes: { exclude: ["updatedAt"] },
        where : { id_usuario : id_usuario }
    })
    .then(clientes => {
            res.send(clientes)
         })
    .catch(error => res.status(400).send(error));      
});
/* POST : Registrar un cliente */
router.post('/' , async (req , res , next) => {
    let cedula = req.body.cedula;
    let nombre = req.body.nombre;
    let apellido = req.body.correo;
    let correo = req.body.direccion;
    let direccion = req.body.telefono;
    let telefono = req.body.telefono;
    let fechaNacimiento = req.body.fechaNacimiento;

    try{

        let cliente = await models.clientes.create(
            {
                cedula : cedula,
                nombre : nombre,
                apellido : apellido,
                correo : correo,
                direccion : direccion,
                telefono : telefono,
                fechaNacimiento : fechaNacimiento
            },
            { fields : ['cedula' , 'nombre' , 'apellido' , 'correo' , 'direccion' , 'telefono' , 'fechaNacimiento'] }
        );

        console.log('Cliente creado  : ' , cliente);

        res.status(201).json({
            message : 'cliente registrado con exito!',
            content : cliente
        });
    }catch(error){
        res.status(400).send(error);
    }

})

module.exports = router;