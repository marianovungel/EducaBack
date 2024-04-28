const mongoose = require('mongoose');

const DiscSchema = new mongoose.Schema({
    nome: String,
    classe: String,
},
    {timestamps: true}
);

module.exports = mongoose.model("Disc", DiscSchema);