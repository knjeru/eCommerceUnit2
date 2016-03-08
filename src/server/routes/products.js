var express = require('express');
var router = express.Router();

// GET Route for product page

router.get('/product', function(req,res,next) {
    res.render('products');
});

module.exports = router;