const express = require('express');
const indexRoute = require('./routes/index.routes')
const {engine} = require('express-handlebars');
const path = require('path')
const app = express();

app.set('views', path.join(__dirname,'views'));
app.engine('.hbs', engine({
    layoutsDir :path.join(app.get('views'), 'layouts') ,
    defaultLayout: 'main',
    extname : '.hbs',
})

);
app.set('view engine', '.hbs');

app.use(indexRoute)

module.exports = app;