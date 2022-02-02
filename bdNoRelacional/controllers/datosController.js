var DatosModel = require('../models/datosModel.js');

/**
 * datosController.js
 *
 * @description :: Server-side logic for managing datoss.
 */
module.exports = {

    /**
     * datosController.list()
     */
    list: function (req, res) {
        DatosModel.find(function (err, datoss) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting datos.',
                    error: err
                });
            }

            return res.json(datoss);
        });
    },

    /**
     * datosController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        DatosModel.findOne({_id: id}, function (err, datos) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting datos.',
                    error: err
                });
            }

            if (!datos) {
                return res.status(404).json({
                    message: 'No such datos'
                });
            }

            return res.json(datos);
        });
    },

    /**
     * datosController.create()
     */
    create: function (req, res) {
        var datos = new DatosModel({
			id_compra : req.body.id_compra
        });

        datos.save(function (err, datos) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating datos',
                    error: err
                });
            }

            return res.status(201).json(datos);
        });
    },

    /**
     * datosController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        DatosModel.findOne({_id: id}, function (err, datos) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting datos',
                    error: err
                });
            }

            if (!datos) {
                return res.status(404).json({
                    message: 'No such datos'
                });
            }

            datos.id_compra = req.body.id_compra ? req.body.id_compra : datos.id_compra;
			
            datos.save(function (err, datos) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating datos.',
                        error: err
                    });
                }

                return res.json(datos);
            });
        });
    },

    /**
     * datosController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        DatosModel.findByIdAndRemove(id, function (err, datos) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the datos.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
