const LarTemp = require('../models/larTemp');

//Creating and Saving a new Cadastro
exports.create = (req, res, next) => {
    const larTemp = new LarTemp(req.body);
    larTemp.save()
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

//Returning all cadastros
exports.findAll = (req, res, next) => {
    LarTemp.find()
        .then(larTemp => {
            res.send(larTemp)
        }).catch(err => {
            res.status(500).send({
                mensagem: err.mensagem || 'Ocorreu um erro no carregamento dos cadastros.'
            })
        })
};

//Finding a single cadastro by CPF
exports.getCpf = (req, res, next) => {
    LarTemp.find({ "cpf": req.params.cpf }, (err, larTemp) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(larTemp);
    });
};


//Update cadastro por ID
exports.update = (req, res) => {
    // Validate Request
    if (!req.body.cpf) {
        return res.status(400).send({
            message: "Cadastro não pode estar em branco."
        });
    }
}
//Updating cadastro
exports.update = (req, res) => {
    LarTemp.updateOne(
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

// //Deleting a cadastro by its CPF; 
exports.delete = (req, res) => {
    const cpf = req.params.cpf;

    LarTemp.findOne({ cpf }, function (err, larTemp) {
        if (err) return res.status(500).send(err);

        if (!larTemp) return res.status(200).send({ mensagem: `Infelizmente não localizamos o cpf: ${cpf}` })
        miado.remove(function (err) {
            if (!err) {
                return res.status(200).send({ mensagem: 'Cadastro removido com sucesso.' })
            }
        })
    })

};
