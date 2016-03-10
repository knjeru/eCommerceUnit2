var express = require('express');
var router = express.Router();

// GET Route for checkout page
router.get('/', function(req, res, next) {
  res.render('checkout',{ title: 'RAD PEOPLE CHECKOUT' });
});

router.post('/', function(req,res,next) {
  knex('products').insert({
    'price': req.body.price,
    'size': req.body.size
  })
});


module.exports = router;
