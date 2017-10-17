var express = require('express'),
	app = express(),
	router = express.Router(),
	jwt = require('jsonwebtoken'),
	User = require('./../models').user,
	Data = require('./../models').data,
	winston = require('./../log/log'),
	cors = require('cors');


app.use(cors({
	origin: '*'
}));

router.post('/login', (req, res) => {
	let userName = req.body.userName;
	let passWord = req.body.passWord;
	//console.log(userName, passWord);
	User.find({
		userName: userName,
		passWord: passWord
	}, function(err, result) {
		if (err) {
			winston.info('err to data');
			res.json({
				status: 400,
				message: 'err to content user'
			});

		}
		if (result != '') {
			//console.log(result);
			var token = jwt.sign(result[0], 'shhhhh', {
				expiresIn: '1h'
			});
			res.status(200);
			res.json({
				status: 200,
				message: 'login success!',
				token: token
			});
		} else {
			res.status(500);
			res.json({
				status: 500,
				message: 'wrong userName or passWord'
			});
		}

	});
});

function checktoken(req, res, next) {

	// check header or url parameters or post parameters for token
	var token = req.body.token || req.query.token || req.headers['x-access-token'];

	// decode token
	if (token) {

		// verifies secret and checks exp
		jwt.verify(token, 'shhhhh', function(err, decoded) {
			if (err) {
				return res.json({
					success: false,
					message: 'Failed to authenticate token.'
				});
			} else {
				// if everything is good, save to request for use in other routes

				req.decoded = decoded;
				//console.log(decoded);
				next();
			}
		});

	} else {

		// if there is no token
		// return an error
		res.status(403).send({
			success: false,
			message: 'No token provided.'
		});

	}
};

router.post('/data', checktoken, (req, res) => {
	let id = req.decoded._doc._id;

	User.find({
		_id: id
	}, (err, result) => {
		if (err) {
			winston.info('err');
			res.status(400).send({
				status: 400,
				message: 'Erro to find user'
			});
		}
		console.log(result[0].id);
		Data.find({
			id: result[0].id
		}, (err, results) => {
			if (err) {
				console.log('err');
				res.status(400).send({
					status: 400,
					message: 'err to find data user'
				});
			}
			console.log(results);
			res.status(200).send({
				status: 200,
				message: 'get data success!',
				result: results,
				user: result[0].userName
			});

		});


	});
});

module.exports = router;
