const express = require('express');
const indexRoute = require('./routes/index.routes');
const {engine} = require('express-handlebars');
const path = require('path');
const { resolveSoa } = require('dns');
const app = express();
const clientesRoute = require('./routes/clientes');
const ventasRoute = require('./routes/venta')
const comprasRoute = require('./routes/compra')



app.set('views', path.join(__dirname,'views'));
app.engine('.hbs', engine({
    layoutsDir :path.join(app.get('views'), 'layouts') ,
    defaultLayout: 'main',
    extname : '.hbs',
})

);
app.set('view engine', '.hbs');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:false}));
app.use(indexRoute);
app.use(clientesRoute);
app.use(ventasRoute);
app.use(comprasRoute);




module.exports = app;