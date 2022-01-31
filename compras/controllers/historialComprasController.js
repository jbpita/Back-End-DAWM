var HistorialcomprasModel = require('../models/historialComprasModel.js');

/**
 * historialComprasController.js
 *
 * @description :: Server-side logic for managing historialComprass.
 */
module.exports = {

    /**
     * historialComprasController.list()
     */
    list: function (req, res) {
        HistorialcomprasModel.find(function (err, historialComprass) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting historialCompras.',
                    error: err
                });
            }

            return res.json(historialComprass);
        });
    },

    /**
     * historialComprasController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        HistorialcomprasModel.findOne({_id: id}, function (err, historialCompras) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting historialCompras.',
                    error: err
                });
            }

            if (!historialCompras) {
                return res.status(404).json({
                    message: 'No such historialCompras'
                });
            }

            return res.json(historialCompras);
        });
    },

    /**
     * historialComprasController.create()
     */
    create: function (req, res) {
        var historialCompras = new HistorialcomprasModel({
			id_compra : req.body.id_compra,
			id_producto : req.body.id_producto,
			cantidad : req.body.cantidad,
			total : req.body.total,
			nombre : req.body.nombre,
			fecha_compra : req.body.fecha_compra,
			id_cliente : req.body.id_cliente
        });

        historialCompras.save(function (err, historialCompras) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating historialCompras',
                    error: err
                });
            }

            return res.status(201).json(historialCompras);
        });
    },

    /**
     * historialComprasController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        HistorialcomprasModel.findOne({_id: id}, function (err, historialCompras) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting historialCompras',
                    error: err
                });
            }

            if (!historialCompras) {
                return res.status(404).json({
                    message: 'No such historialCompras'
                });
            }

            historialCompras.id_compra = req.body.id_compra ? req.body.id_compra : historialCompras.id_compra;
			historialCompras.id_producto = req.body.id_producto ? req.body.id_producto : historialCompras.id_producto;
			historialCompras.cantidad = req.body.cantidad ? req.body.cantidad : historialCompras.cantidad;
			historialCompras.total = req.body.total ? req.body.total : historialCompras.total;
			historialCompras.nombre = req.body.nombre ? req.body.nombre : historialCompras.nombre;
			historialCompras.fecha_compra = req.body.fecha_compra ? req.body.fecha_compra : historialCompras.fecha_compra;
			historialCompras.id_cliente = req.body.id_cliente ? req.body.id_cliente : historialCompras.id_cliente;
			
            historialCompras.save(function (err, historialCompras) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating historialCompras.',
                        error: err
                    });
                }

                return res.json(historialCompras);
            });
        });
    },

    /**
     * historialComprasController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        HistorialcomprasModel.findByIdAndRemove(id, function (err, historialCompras) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the historialCompras.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
