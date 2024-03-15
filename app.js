const express = require('express'); //built-in node function//
const path = require('path');
const routes = require('./routes/index'); //built-in node function//
const bodyParser = require('body-parser');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.use('/', routes);





module.exports = app;