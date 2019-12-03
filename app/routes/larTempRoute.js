module.exports = (app) => {
    const larTemp = require('../controllers/larTempController');

    //Create a new cadastro
    app.post('/lar', larTemp.create);

    //Retrieving all cadastros
    app.get('/lar', larTemp.findAll);

    //Retrieve only one specific cadastro by CPF
    app.get('/lar/:cpf', larTemp.getCpf);

    //Update a cadastri
    app.put('/lar/:cpf', larTemp.update);

    //Deleting a cadastro
    app.delete('/lar/:cpf', larTemp.delete);
}