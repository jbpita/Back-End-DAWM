var express = require('express');

var router = express.Router();

const Sequelize = require('../models/index.js').sequelize;

const initModels = require('../models/init-models');

var models= initModels(Sequelize)

const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, 'uploads')
    },
    filename: (req, file, callBack) => {
        callBack(null, file.originalname)
    }
})
const upload = multer({ storage: storage })

/* GET : consultar marcas */
router.get('/', (req, res, next) => {
    models.marcas.findAll({ 
        attributes: { exclude: ["updatedAt"] }
    })
    .then(marcas => {
            res.status(200).send(marcas)
    })
    .catch(error => res.status(400).send(error))
      
});

router.get('/:id_marca', (req, res, next) => {

    let id_marca = req.params.id_marca;

    models.marcas.findAll({ 
        attributes: { exclude: ["updatedAt"] },
        where : { id_marca : id_marca }
    })
    .then(marcas => {
            res.status(200).send(marcas)
    })
    .catch(error => res.status(400).send(error))
      
});

/* POST : Ingresar marca */

router.post('/', upload.single('file') ,async (req , res , next) => {
    let nombre = req.body.nombre;
    let descripcion = req.body.descripcion;
    let file = req.file;

    console.log(file);

    try{
        let marca = await models.marcas.create({
            nombre : nombre,
            descripcion: descripcion,
            src : file.path
        },
        {   fields : ['nombre' , 'descripcion' , 'src'] }
        );

        console.log('marca: '  , marca);

        res.status(201).json({
            message: "marca creada con exito!",
            content: marca
        });

    }catch(error){
        console.log('Error: ',error);
        res.status(404).send(error)
    }
    
});

/* DELETE: Eliminar marcas de productos */

router.delete('/:id_marca' , async (req , res , next) => {
    let id_marca = req.params.id_marca;

    if(!isNaN(id_marca)){
        id_marca=Number(id_marca);
    }

    try{
        let marca = await models.marcas.destroy({
            where : { id_marca : id_marca }
        })

        if(marca === 0){
            console.log('Error: no se puede eliminar el registro porque no existe');
            res.status(404).send("Error: no se puede eliminara el registro porque no existe")
        }else{
            console.log('Eliminado: ' , marca);
            res.status(200).send("registro " + id_marca + " eliminado");
        }

    }catch(error){
        console.log('Error: ' , error );
        res.status(405).send(error);
    }
}) 

module.exports = router;