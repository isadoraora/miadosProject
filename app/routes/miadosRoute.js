module.exports = (app) => {
    const miados = require('../controllers/miadosController');

    //Create a new cadastro
    app.post('/cadastro', miados.create);

    //Retrieving all cadastros
    app.get('/cadastro', miados.findAll);

    //Retrieve only one specific cadastro by CPF
    app.get('/cadastro/:cpf', miados.getCpf);

    //Update a cadastri
    app.put('/cadastro/:cpf', miados.update);

    //Deleting a cadastro
    app.delete('/cadastro/:cpf', miados.delete);
}