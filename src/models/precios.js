
const {Schema, model} = require('mongoose')

const precio = new Schema({
    name:String,
    price:String,
  
    
    
})

 module.exports = model('madera-precio', precio)