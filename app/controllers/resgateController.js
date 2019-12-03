const Resgate = require('../models/resgate');

//Creating and Saving a new Cadastro
exports.create = (req, res, next) => {
    const resgate = new Resgate(req.body);
    resgate.save()
        .then(data => {
            res.status(201).send({
                mensagem: 'Cadastro efetuado com sucesso!'
            });
        }).catch(err => {
            res.status(500).send({
                mensagem: err.mensagem || 'Ocorreu um erro no cadastro, tente novamente.'
            })


        })
};

// //Returning all cadastros
exports.findAll = (req, res, next) => {
    Resgate.find()
        .then(resgate => {
            res.send(resgate)
        }).catch(err => {
            res.status(500).send({
                mensagem: err.mensagem || 'Ocorreu um erro no carregamento dos cadastros.'
            })
        })
};

// //Finding a single cadastro by CPF
exports.getCpf = (req, res, next) => {
    Resgate.find({ "cpf": req.params.cpf }, (err, resgate) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(resgate);
    });
};


// //Update cadastro por ID
exports.update = (req, res) => {
    // Validate Request
    if (!req.body.cpf) {
        return res.status(400).send({
            message: "Cadastro não pode estar em branco."
        });
    }
}
// //Updating cadastro
exports.update = (req, res) => {
    Resgate.updateOne(
        { cpf: req.params.cpf },
        { $set: req.body },
        { upsert: true },
    )
        .then(() => {
            return res.status(200).send({ mensagem: 'Cadastro atualizado com sucesso!' })
        })
        .catch((err) => {
            return res.status(400).send({ mensagem: err })
        })

};

// // //Deleting a cadastro by its CPF; 
exports.delete = (req, res) => {
    const cpf = req.params.cpf;

    Resgate.findOne({ cpf }, function (err, resgate) {
        if (err) return res.status(500).send(err);

        if (!resgate) return res.status(200).send({ mensagem: `Infelizmente não localizamos o cpf: ${cpf}` })
        resgate.remove(function (err) {
            if (!err) {
                return res.status(200).send({ mensagem: 'Cadastro removido com sucesso.' })
            }
        })
    })

};