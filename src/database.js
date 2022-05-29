const mongo = require('mongoose');

const connect = ()=>{ 
    
    mongo.connect('mongodb+srv://alejoibanus:alejo123@cluster0.gvg3s.mongodb.net/?retryWrites=true&w=majority',
    {
        keepAlive:true,
        useNewUrlParser:true,
        useUnifiedTopology:true
    },
    (err)=>{
        if(err){
            console.log('error')
        }else{
            console.log('Conexion a la base de datos ready')
        }
    }
    
    )}


module.exports = connect;