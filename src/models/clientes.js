const {Schema, model} = require('mongoose')

const cliente = new Schema({
    name:String,
    number:String,
    debe:Number
})

 module.exports = model('Cliente', cliente)