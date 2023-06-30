const { default: mongoose, Schema, model } = require("mongoose");
const cadastro = new Schema({
    nome :{type:String},
    email:{type:String},
    data: {type:String},
    senha:{type:String}
    
})
const cadastro_model = new model("cadastro", cadastro)
module.exports = cadastro_model