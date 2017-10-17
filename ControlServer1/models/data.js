var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var data = new Schema({
  id: Number,
  date: String,
  flat: String,
  sc: String,
  scPort: String,
  des: String,
  desPort: String,
  pro: String,
  link: String,
  td: String,
  msg: String,
  detail: String
}, {
  collection: 'data'
});

module.exports = mongoose.model('data', data);
