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
}