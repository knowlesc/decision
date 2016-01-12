var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var api = require('./server/api');

var publicPath = path.resolve(__dirname, 'public');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(publicPath));

app.use('/api', api);

module.exports = app;