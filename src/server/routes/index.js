var express = require('express');
var router = express.Router();


// GET Route for homepage
router.get('/', function(req, res, next) {
  res.render('index', { title: 'RAD PEOPLE' });
});





module.exports = router;
