var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function(req,res) {
    res.redirect('/burgers')
});

router.get('/burgers', function(req, res){
    burger.all(function (data){ 
        var hbsObject = { burgers:data}
        res.render ('index', hbsObject);
    });
});

router.put('/')