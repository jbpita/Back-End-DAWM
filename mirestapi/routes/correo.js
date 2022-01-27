var express = require('express');

var router = express.Router();
const nodemailer = require('nodemailer');


router.post('/', (req, res) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
        user: 'batetizate@gmail.com', // Cambialo por tu email
        pass: 'batetizate1234' // Cambialo por tu password
        }
        });
       const mailOptions = {
        from: "tyepezvera@gmail.com",
        to: `<${req.body.correoUser}>`, // Cambia esta parte por el destinatario
        subject: "Confirmacion de compra",
        html: `
         " Su compra ha sido realizada con exito" `
        };
       transporter.sendMail(mailOptions, function (err, info) {
        if (err)
        console.log(err)
        else
        console.log(info);
        });
    res.status(200).send();
   })



   module.exports = router;