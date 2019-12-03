module.exports = (app) => {
    const resgate = require('../controllers/resgateController');

    //Create a new cadastro
    app.post('/resgate', resgate.create);

//     //Retrieving all cadastros
    app.get('/resgate', resgate.findAll);

//     //Retrieve only one specific cadastro by CPF
    app.get('/resgate/:cpf', resgate.getCpf);

//     //Update a cadastri
    app.put('/resgate/:cpf', resgate.update);

//     //Deleting a cadastro
    app.delete('/resgate/:cpf', resgate.delete);
}