const mongoose = require('mongoose');

const DocSchema = new mongoose.Schema({
    tipo:String, //livro, slide, video
    title:String,
    desc:String,
    capa:String,
    link:String,
    classe:String,
    disciplina:String,
},
    {timestamps: true}
);

module.exports = mongoose.model("Doc", DocSchema);