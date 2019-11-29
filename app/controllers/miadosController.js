const Miado = require('../models/miados');

//Creating and Saving a new Cadastro
exports.create = (req, res, next) => {
    const miado = new Miado(req.body);
    miado.save()
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
    Miado.find()
        .then(miados => {
            res.send(miados)
        }).catch(err => {
            res.status(500).send({
                mensagem: err.mensagem || 'Ocorreu um erro no carregamento dos cadastros.'
            })
        })
};

//Finding a single cadastro by CPF
exports.getCpf = (req, res, next) => {
    Miado.find({ "cpf": req.params.cpf }, (err, miados) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(miados);
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

    //Updating cadastro
    exports.update = (req, res, next) => {
        Miado.update(
            { cpf: req.cpf },
            { $set: req.body },
            { upsert: true },
            (err) => {
                if (err) return res.status(500).send(err);
            });
        res.status(200).send({ mensagem: "Cadastro atualizado com sucesso!" });
    };
}

//Deleting a cadastro by its CPF
exports.delete = (req, res, next) => {
    Miado.findOne(req.params.cpf)
        .then(miado => {
            if (!miado) {
                res.status(404).send({
                    mensagem: "Cadastro não localizado pelo CPF informado" + req.params.cpf
                });
            }
            res.send({ mensagem: 'Cadastro deletado com sucesso! ' })
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    mensagem: 'Cadastro não localizado a partir do CPF: ' + req.params.cpf
                });
            }
            return res.status(500).send({
                mensagem: 'Não foi possível deletar o cadastro de acordo com o CPF: ' + req.params.cpf
            });
        });
};
