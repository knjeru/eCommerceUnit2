var express = require('express');
var router = express.Router();

// GET Route for About page

router.get('/about', function(req,res,next) {
    res.render('about');
});

module.exports = router;