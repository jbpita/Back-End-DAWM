var express = require('express');

var router = express.Router();

const Sequelize = require('../models/index.js').sequelize;

const initModels = require('../models/init-models');


var models= initModels(Sequelize)
const middlewares = require('../midleware/midleware')
const multer = require('multer');


var models= initModels(Sequelize)
const storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, 'uploads')
    },
    filename: (req, file, callBack) => {
        callBack(null, file.originalname)
    }
})
const upload = multer({ storage: storage })

/* GET home page. */
router.get('/', (req, res, next) => {
    models.productos.findAll({ 
        include: { model: models.marcas },
        attributes: { exclude: ["updatedAt"] }
    })
    .then(productos => {
            res.send(productos)
         })
    .catch(error => res.status(400).send(error));      
});

router.get('/:id_producto', (req, res, next) => {

    let id_producto = req.params.id_producto;

    models.productos.findAll({ 
        attributes: { exclude: ["updatedAt"] },
        where : { id_producto : id_producto }
    })
    .then(productos => {
            res.send(productos)
         })
    .catch(error => res.status(400).send(error));      
});
//busqueda de producto por marca
router.get('/marca/:id_marca', (req, res, next) => {
    let id_marca = req.params.id_marca;

    models.productos.findAll({ 
        include: { model: models.marcas },
        attributes: { exclude: ["updatedAt"] },
        where : { id_marca : id_marca }
    })
    .then(productos => {
            res.send(productos)
         })
    .catch(error => res.status(400).send(error));      
});


/* POST : Ingresar producto */

router.post('/', upload.single('file'), async (req , res , next) => {
    let nombre = req.body.nombre;
    let precio = req.body.precio;
    let detalle = req.body.detalle;
    let stock = req.body.stock;
    let file = req.file;
    let id_marca = req.body.id_marca;

    if(!isNaN(id_marca)){
        id_marca = Number(id_marca)
    }

    try{
        let marca = await models.marcas.findAll({
            attributes: { exclude: ["updatedAt"] },
            where: {id_marca : id_marca}
        });

        if(!marca){
            console.log("marca no existe");
            res.status(404).send("Error: recurso no existe");

        }else{
            console.log('marca:' , marca);

            let producto = await models.productos.create({
                nombre : nombre,
                precio : precio,
                detalle: detalle,
                stock : stock,
                src : file.path,
                id_marca : id_marca
            },
            {   fields : ['nombre' , 'precio' , 'detalle' , 'stock' , 'src' , 'id_marca'] }
            );

            console.log('producto: '  , producto);

            res.status(201).json({
                message: 'producto creado correctamente!',
                content: producto
            });
        }

    }catch(error){
        console.log('Error: ',error);
        res.status(404).send(error)
    }
    
});
/* PUT :  Actualizar el registro de un producto */
router.put('/:id_producto' , async (req , res , next) => {
    let id_producto = req.params.id_producto;
    let stock = req.body.stock;
    try{
        
        let producto = await models.productos.update(
                {   
                    stock : stock,
                },
                {   where : {   id_producto : id_producto   }   }
            );


        if(producto){
            console.log("producto actualizado : " , producto);
            res.send(producto);
        } else {
            console.log("producto no puedo ser actualizado " , producto);
            res.status(401).json({
                message: 'producto no puedo ser actualizado!',
                content: producto
            });
        }

        

    }catch(error){
        res.status(400).send(error);
    }
})
/* PUT :  Actualizar el registro de un producto */
router.put('/' , async (req , res , next) => {
    let id_producto = req.body.id_producto;
    let nombre = req.body.nombre;
    let precio = req.body.precio;
    let detalle = req.body.detalle;
    let stock = req.body.stock;
    let src = req.body.src;
    let id_marca = req.body.id_marca;



    if(!isNaN(id_marca)){
        id_marca = Number(id_marca)
    }
    
    if(!isNaN(id_producto)){
        id_producto = Number(id_producto);
    }

    let pdt = {
        nombre : nombre,
        precio : precio,
        detalle: detalle,
        stock : stock,
        src : src,
        id_marca : id_marca
    }

    if(src == null || src == "" || src == undefined){
        pdt = {
            nombre : nombre,
            precio : precio,
            detalle: detalle,
            stock : stock,
            id_marca : id_marca
        }
    }

    try{
        
        let producto = await models.productos.update(
                pdt,
                {   where : {   id_producto : id_producto   }   }
            );

        console.log(producto);

        if(producto[0] !== 0){
            console.log("producto actualizado : " , producto);
            res.status(201).json({
                message: 'producto actualizado correctamente!',
                content: producto
            });
        } else {
            console.log("producto no puedo ser actualizado " , producto);
            res.status(401).json({
                message: 'producto no puedo ser actualizado!',
                content: producto
            });
        }

        

    }catch(error){
        res.status(400).send(error);
    }
})

/* DELETE :  eliminar algun producto  */
router.delete('/:id_producto', async (req , res , next) => {
    let id_producto = req.params.id_producto;

    if(!isNaN(id_producto)){
        id_producto=Number(id_producto);
    }

    try{

        let producto = await models.productos.destroy({
            where : { id_producto : id_producto }
        })
        
        if(producto === 0){
            console.log('Error: no se puede eliminar el registro porque no existe');
            res.status(404).send("Error: no se puede eliminara el registro porque no existe")
        }else{
            console.log('Eliminado: ' , producto);
            res.status(200).send("registro " + id_producto + " eliminado");
        }

    }catch(error){
        console.log('Error: ' , error );
        res.sendStatus(405).send(error);
    }
});

module.exports = router;