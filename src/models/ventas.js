
const {Schema, model} = require('mongoose')

const venta = new Schema({
    
    cliente:{
        type:String
    },
    cuil:{
        type:String
    },
    monto:{
        type:String
    },
    fecha:{
        type:String
    }
}


)

 module.exports = model('venta', venta)