var express = require('express');
var router = express.Router();

// GET Route for checkout page
router.get('/', function(req, res, next) {
  res.render('charge', { title: 'RAD PEOPLE CHECKOUT' });
});

router.post('/charge', function(req, res,next) {
    var stripeToken = req.body.stripeToken;
    var amount =  req.body.stripeAmount;

    stripe.charges.create({
        card: stripeToken,
        currency: 'usd',
        amount: amount
    },
    function(err, charge) {
        if (err) {
            res.send('error');
        } else {
            res.send('success');
        }
    });
    res.redirect('/');
});


module.exports = router;
