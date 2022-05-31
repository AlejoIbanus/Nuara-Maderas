const App = require('./app')
const db = require('./database');
App.listen(process.env.PORT || 8080);

console.log('server ready', 8080)

db();