const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const MiadosSchema = mongoose.Schema({
    nome: { type: String, required: true },
    cpf: { type: String, required: true },
    endereco: { type: String, required: true },
    bairro: { type: String, required: true },
    cep: { type: String, required: true },
    telefonePrincipal: { type: String, required: true },
    possuiGato: { type: Boolean, required: true }
},
    {
        versionKey: false,
        timestamps: true
    });

const Miados = new mongoose.model('Miados', MiadosSchema);

module.exports = Miados;
