const mongoose = require('mongoose');

const CategSchema = new mongoose.Schema({
     
    nome:String
  
},
    {timestamps: true}
);

module.exports = mongoose.model("Categ", CategSchema);