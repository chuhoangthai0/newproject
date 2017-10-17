var express = require('express');
var Data = require('./models').data;
app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json({
  extended: false
}));
var server = require('http').Server(app);
server.listen(3000);
//require('./init')();

require('./socket')(server);
require('./allow')(app);
require('./routes')(app);



//console.log(b);

module.exports = app;
