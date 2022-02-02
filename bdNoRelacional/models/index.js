const nodbConfig = require("../config/nodb.config.js");
const mongoose = require('mongoose');

const db_path = nodbConfig.dialect + '://' + nodbConfig.HOST + '/' + nodbConfig.noDB;
const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    /*useCreateIndex: true,
    useFindAndModify: false,
    poolSize: 4*/
}


mongoose.connect(db_path, config)
    .then(() => console.log('DB connnection successful!'))
    .catch(err => {
        console.error.bind(console, 'MongoDB connection error:')
    });