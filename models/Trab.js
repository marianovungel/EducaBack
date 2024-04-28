const mongoose = require('mongoose');

const TrabSchema = new mongoose.Schema({
    tipo:String, //resumo, artigo
    title:String,
    desc:String,
    capa:String,
    link:String,
},
    {timestamps: true}
);

module.exports = mongoose.model("Trab", TrabSchema);