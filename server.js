const express = require('express');
const bodyParser = require('body-parser');
//create express app
const app = express();

//parse request of type content - app
app.use(bodyParser.urlencoded({ extended: true }))

//parse request of type content - app/json
app.use(bodyParser.json())

//Configuring Mongo DB
const dbConfig = require('./config/database.config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//Connecting to our database
mongoose.connect('mongodb://localhost:27017/Miados', {
    useNewUrlParser: true
}).then(() => {
    console.log("Conectado ao banco de dados com sucessso!");
}).catch(err => {
    console.log("Não foi possível conectar ao banco de dados. Saindo da aplicação...", err);
    process.exit();
});

//defining a route, a simple one
app.get('/', (req, res) => {
    res.json({ 'message': 'Olá, seja-bem vindo ao Miados - Lares Amigos!' });
});

require('./app/routes/miadosRoute')(app);

//port
app.listen(8000, () => {
    console.log(`Server is listening on port 8000`);
});



