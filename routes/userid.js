var express = require('express');
var router = express.Router({mergeParams: true});

router.get('/', function(req, res, next){
    res.send(`Page name: userid(${req.params.userid})`)
})

module.exports = router;