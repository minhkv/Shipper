var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var routes = require('./routes/routes');

app.use(bodyParser.json());

app.use('/', routes);

app.listen(3000);