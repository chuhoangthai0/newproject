var Data = require('./../models').data;
var User = require('./../models').user;
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

module.exports = function(server) {

  var SSH = require('simple-ssh');

  var ssh = new SSH({
    host: '192.168.1.5',
    user: 'theosis',
    pass: 'toico2giacmo'
  });

  let log = (stdout) => {
    return new Promise((resolve, reject) => {
      return resolve(stdout);
    });
  };

  var a = [];

  let pushlog = (stdout) => {

    return new Promise((resolve, reject) => {

      a.push(stdout);
      let re = /(-Z--)/,
        myArray = re.exec(stdout);
      if (myArray != null && a.length >= 13) {
        //console.log(a);
        let b = analyzelog(a);
        //console.log(a);
        a = [];


        return resolve(b);

      }
    });
  };

  let analyzelog = (stdout) => {

    return new Promise((resolve, reject) => {
      //console.log(stdout);
      let data = new Data();
      data.id = 1;
      let re = /[0-9]{2}:[0-9]{2}:[0-9]{2}\s/,
        myArray = re.exec(stdout);
      if (myArray != null) {
        data.date = myArray[0];
      };
      let re1 =
        /([a-zA-Z]{2}\s)([0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3})\s([0-9]*)\s([0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3})\s([0-9]*)/,
        myArray1 = re1.exec(stdout);
      //console.log(myArray1);
      if (myArray1 != null) {
        data.flat = myArray1[1];
        data.sc = myArray1[2];
        data.scPort = myArray1[3];
        data.des = myArray1[4];
        data.desPort = myArray1[5];
      };

      let re2 = /(GET)(.*)( )/,
        myArray2 = re2.exec(stdout);
      //console.log(myArray2);
      if (myArray2 != null) {
        data.pro = myArray2[1];
        data.link = myArray2[2];
      };
      let re3 = /(HTTP)(.*)(\r\n|\r|\n)/,
        myArray3 = re3.exec(stdout);
      if (myArray3 != null) {
        data.td = myArray3[1] + myArray3[2];

      };

      let re4 = /\s(User-Agent:\s)(.*)(\r\n|\r|\n)/,
        myArray4 = re4.exec(stdout);
      if (myArray4 != null) {
        data.agent = myArray4[2]
      }

      let re5 = /(\[msg)(.*?)(\"\])/,
        myArray5 = re5.exec(stdout);
      if (myArray5 != null) {
        data.msg = myArray5[2];
      }

      let re6 = /(Message:)(.*)( Pattern)/,
        myArray6 = re6.exec(stdout);
      if (myArray6 != null) {
        data.detail = myArray6[2];

      }
      //console.log(data);

      //socket.emit('message', data);
      Data.find({
        date: myArray[0]
      }, (err, result) => {
        if (err) console.log(err);
        //console.log(result);
        if (result != '') {
          //console.log('data was exist');

        } else {

          //console.log(result);
          data.save((err, results) => {
            if (err) console.log("err");
            myEmitter.emit('thai', results);
          });
          return resolve(data);

        }
      })
    });
  };
  //
  ssh.exec('sudo tail -f /var/log/modsec_audit.log', {
      pty: true,
      out: async(stdout) => {

        await pushlog(stdout)
          .then((result) => {

          })
      }

    })
    .start();



  var io = require('socket.io')(server);


  io.on("connection", function(socket) {
    myEmitter.on('thai', (data) => {
      socket.emit('message', data);
    });
  });

};
