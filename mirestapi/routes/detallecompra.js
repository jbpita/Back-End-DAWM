var express = require('express');

var router = express.Router();

const Sequelize = require('../models/index.js').sequelize;

const initModels = require('../models/init-models');

var models = initModels(Sequelize);


/* GET : Consultar detalle de compra */

router.get('/' , (req, res , next) => {
    models.detallecompras.findAll({
        attributes: { exclude: ["updatedAt"] }
    }).then(detallecompras => {
        res.status(200).send(detallecompras);
    }).catch(error => res.status(400).send(error));
})

/* GET : consultar el detalle de una compra por su id */

router.get('/:id_compra' , async (req , res , next) => {
    let id_compra = req.params.id_compra;

    if(!isNaN(id_compra)){
        id_compra = Number(id_compra);
    }

    try{

        let detallecompra = await models.detallecompras.findAll({
            attributes : { exclude: ["updatedAt"] },
            where : { id_compra : id_compra }
        });
    
        if(detallecompra.length > 0) {
            console.log("no existe dicha compra!");
            res.status(404).send("No se encontro la compra ");
        } else{
            console.log("detalles de compra " , id_compra , " : " , detallecompra);
            res.status(200).send(detallecompra);
        }

    }catch(error){
        res.status(400).send(error);
    }
    
})

/* POST : registro de producto de la compra , detalle de compra */

router.post('/' , async (req , re , next) => {
    let cantidad = req.body.cantidad;
    let total = req.body.total;
    let id_compra = req.body.id_compra;
    let id_producto =  req.body.id_producto;
    
    if(!isNaN(id_compra)){
        id_compra = Number(id_compra);
    }

    if(!isNaN(id_producto)){
        id_producto = Number(id_producto);
    }

    if(!isNaN(cantidad)){
        cantidad = Number(cantidad);
    }

    if(!isNaN(total)){
        total = Number(total);
    }

    try{

        let producto = await models.productos.findAll({
            attributes : { exclude: ["updatedAt"] },
            where : { id_producto : id_producto }
        });

        let compra = await models.compras.findAll({
            attributes : { exclude: ["updatedAt"] },
            where : { id_compra : id_compra }
        });

        if(producto.length === 0 && compra.length === 0){
            console.log("la compra y/o el producto no estan registrado ");
            res.status(400).send("la compra y/o el producto no estan registrado");
        }else{
            let detalleCompra = await models.detallecompras.create(
                {
                    cantidad ,
                    total ,
                    id_compra ,
                    id_producto 
                },
                { fields : [ "cantidad" , "total" , "id_compra" , "id_producto" ] }
                ) 

            console.log("se registro correptamente el producto en la compra ");
            res.status(400).json({
                message : "se registro correptamente el producto en la compra",
                content : detalleCompra
            });
        }


    }catch(error){
        res.status(400).send(error);
    }

})

/* DELETE : ELIMINAR DETALLEDE LA COMPRA */

router.delete('/:id_compra/:id_producto?' , async (req , res , next) => {
    let id_compra = req.params.id_compra;
    let id_producto = req.params.id_producto;

    try{
        let compra = await models.compras.findAll({
            attributes : { exclude: ["updatedAt"] },
            where : { id_compra : id_compra }
        });

        let detalleCompra = null;
        let message = ''
    
        if( compra.length !== 0){
            if( id_producto === undefined ){
                detalleCompra = await models.detallecompras.destroy({
                    where : { id_compra : id_compra }
                });
                
                message = 'Se eliminaron todos los productos de la compra';
            }else{
                let producto = await models.productos.findAll({
                    attributes : { exclude: ["updatedAt"] },
                    where : { id_producto : id_producto }
                });
                
                if( producto.length !== 0){
                    detalleCompra = await models.detallecompras.destroy({
                        where : { 
                            id_compra : id_compra,
                            id_producto : id_producto
                        }
                    });
                    
                    message = `Se eliminaron el producto ${id_producto} de la compra`;
                }else{
                    console.log("No se puede eiminar este producto de la compra porque no existe");
                    res
                        .status(404)
                        .send("Error: No se puede eiminar este producto de la compra porque no existe")
                        .end();
                }
            }

            console.log(message);
            res.status(200).send(message);
        } else{
            console.log("Nose puede eliminar los productos de la compra  porque esta no existe");
            res.status(404).send("Nose puede eliminar los productos de la compra  porque esta no existe");
        }
        
    }catch(error){
        res.status(400).send(error);
    }

} );

module.exports = router;