var mongoose = require('mongoose');
//var options = {user: 'farm',pwd: 'farmuit'};
//mongoose.connect('mongodb://localhost:27017/farm');
mongoose.connect('mongodb://localhost:27017/Data');
var models = {};

models['user'] = require('./user');
models['data'] = require('./data');

module.exports = models;
