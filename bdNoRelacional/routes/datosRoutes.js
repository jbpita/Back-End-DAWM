var express = require('express');
var router = express.Router();
var datosController = require('../controllers/datosController.js');

/*
 * GET
 */
router.get('/', datosController.list);

/*
 * GET
 */
router.get('/:id', datosController.show);

/*
 * POST
 */
router.post('/', datosController.create);

/*
 * PUT
 */
router.put('/:id', datosController.update);

/*
 * DELETE
 */
router.delete('/:id', datosController.remove);

module.exports = router;
