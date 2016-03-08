var express = require('express');
var router = express.Router();

// GET Route for checkout page
router.get('/', function(req, res, next) {
  res.render('checkout',{ title: 'RAD PEOPLE CHECKOUT' });
});

module.exports = router;