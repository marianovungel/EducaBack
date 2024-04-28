const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    tema:String,    
    datai:String,
    dataf:String,
    local:String,
    link:String,
    capa:String,
},
    {timestamps: true}
);

module.exports = mongoose.model("Event", EventSchema);