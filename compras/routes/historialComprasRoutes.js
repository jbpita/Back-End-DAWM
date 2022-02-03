var express = require('express');
var router = express.Router();
var historialComprasController = require('../controllers/historialComprasController.js');

/*
 * GET
 */
router.get('/', historialComprasController.list);

/*
 * GET
 */
router.get('/:id', historialComprasController.show);

/*
 * POST
 */
router.post('/', historialComprasController.create);

/*
 * PUT
 */
router.put('/:id', historialComprasController.update);

/*
 * DELETE
 */
router.delete('/:id', historialComprasController.remove);

module.exports = router;
