var winston = require('winston');
winston.configure({transports: [new (winston.transports.File)({ filename: 'somefile.log' })]
});
module.exports = winston;
