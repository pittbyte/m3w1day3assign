const express = require('express'); //built-in node function//
const routes = require('./routes/index'); //built-in node function//

const app = express();
app.use('/', routes);

module.exports = app;