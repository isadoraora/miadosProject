const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const LarTempSchema = mongoose.Schema({
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

const LarTemp = new mongoose.model('LarTemp', LarTempSchema);

module.exports = LarTemp;
