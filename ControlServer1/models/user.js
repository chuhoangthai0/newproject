var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var user = new Schema({
  id: Number,
  userName: String,
  passWord: String
}, {
  collection: 'user'
});

module.exports = mongoose.model('user', user);
