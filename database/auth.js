const { default: mongoose, Schema, model } = require("mongoose");
const login = new Schema({
    nome :{type:String},
    email:{type:String},
    data: {type:String},
    senha:{type:String}
})
const login_model = new model("auth", login)
module.exports = login_model