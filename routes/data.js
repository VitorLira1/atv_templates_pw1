var express = require('express')
var router = express.Router()

router.get('/', function(req, res, next){
    res.send(`Page name: data`)
})

module.exports = router