const App = require('./app')
const db = require('./database');
App.listen(3000);

console.log('server ready', 3000)

db();