var express = require('express');
var router = express.Router({mergeParams: true});

router.get('/', function(req, res, next){
    res.render('userid', {userid: req.params.userid})
})

module.exports = router;