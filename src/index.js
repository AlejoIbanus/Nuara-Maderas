const App = require('./app')
const db = require('./database');
App.listen(8080);

console.log('server ready', 8080)

db();