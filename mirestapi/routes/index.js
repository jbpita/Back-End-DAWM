var express = require('express');

var router = express.Router();

const Sequelize = require('../models/index.js').sequelize;

const initModels = require('../models/init-models');
var models= initModels(Sequelize)
const bcrypt = require('bcryptjs')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// Metodo para crear un registrar un usuario puede ser usado mas adelante 
router.post('/register', async(req, res, next) =>{
  req.body.password = bcrypt.hashSync(req.body.password,10)
  const user = await models.usuarios.create(req.body)
  res.json(user)
});

module.exports = router;
