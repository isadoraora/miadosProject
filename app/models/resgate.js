const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const ResgateSchema = mongoose.Schema({
    nome: { type: String, required: true },
    cpf: { type: String, required: true },
    endereco: { type: String, required: true },
    bairro: { type: String, required: true },
    telefonePrincipal: { type: String, required: true },
},
    {
        versionKey: false,
        timestamps: true
    });

const Resgate = new mongoose.model('Resgate', ResgateSchema);

module.exports = Resgate;
