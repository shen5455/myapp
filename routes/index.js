// var express = require('express');
// var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
// 	res.render('index', {
// 		title: 'Express'
// 	});
// });
// router.get('/home', function(req, res, next) {
// 	res.render('home');
// });

// module.exports = router;

var nodemailer = require("nodemailer");
// var user = '1595552404@qq.com',
// 	pass = 'sjl010102';

//user, pass, to, title, article
var sendEmail = function(email) {
	// console.log('hello');
	var smtpTransport = nodemailer.createTransport("SMTP", {
		service: "QQ",
		auth: {
			user: email.user,
			pass: email.pass
		}
	});
	smtpTransport.sendMail({
		from: 'Kris<' + email.user + '>',
		to: email.to,
		subject: email.title,
		html: email.article
	}, function(err, res) {
		console.log(err, res);
	});
}

module.exports = function(app) {
	app.get('/', function(req, res) {
		res.render('index');
	});
	app.get('/home', function(req, res) {
		res.render('home');
	});
	app.get('/test', function(req, res) {
		res.render('example');
	});

	app.get('/person', function(req, res) {
		res.render('person');
	});
	app.get('/question', function(req, res) {
		res.render('question');
	});
	app.get('/email', function(req, res) {

		res.render('email');
	});
	app.post('/email', function(req, res, next) {
		sendEmail({
			user: req.body.email_addr,
			pass: req.body.password,
			to: req.body.to_who,
			title: req.body.title,
			article: req.body.article
		});
	});
}