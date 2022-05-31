const {Schema, model} = require('mongoose')

const compra = new Schema({
    
    proveedor:{
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

 module.exports = model('compra', compra)