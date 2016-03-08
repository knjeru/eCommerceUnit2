var express = require('express');
var router = express.Router();

// GET Route for homepage

router.get('/', function(req, res, next) {
  res.render('index', { title: 'RAD PEOPLE' });
});

router.get('/index.html', function(req, res, next) {
  res.redirect('/');
});

router.get('/checkout.html', function(req, res, next) {
  res.redirect('/checkout');
});






module.exports = router;
