var express = require('express');

var router = express.Router();

const Sequelize = require('../models/index.js').sequelize;

const initModels = require('../models/init-models');
var models= initModels(Sequelize)
const bcrypt = require('bcryptjs')
const moment = require('moment')
const jwt = require('jwt-simple')

/* GET users listing. */

router.post('/', async (req, res, next) => {
  const user = await models.usuarios.findOne({
    where: { correo : req.body.correo}
  })
  if(user){
    const iguales = bcrypt.compareSync(req.body.password, user.password);
    if(iguales){
      const cliente = await models.clientes.findOne({
        where: { id_usuario : user.id_usuario}
      })
      res.json({message:'OK', success:createToken(user),role: user.rol,id_usuario: cliente.id_cliente,correoCliente:user.correo})
    }else{
      res.status(400).json({ error :'Error en usuario y/o contraseña '})
    }
  }else{
    res.status(400).json({ error :'Error en usuario y/o contraseña '})
  }
});

const createToken = (user) => {
  const payload ={
    usuarioId: user.id,
    createdAt: moment().unix(),
    expiredAt: moment().add(5,'minute').unix()
  }
  return jwt.encode(payload,"frase secreta")
}
module.exports = router;
