var fs = require('fs');
var express = require('express');
var router = express.Router();
var mysql = require('../modules/dbService');

var pvCount = 1;

/* GET home page. */
router.get('/', function(req, res, next) {
    pvCount++;
    res.render('index', { title: '首页', pvCount: pvCount });
    // mysql.query('select * from myusers;', function(err, rlt) {
    //     console.log(JSON.stringify(rlt));
    //     res.render('login');
    // });
});

router.get('/flyme', function(req, res, next) {
    pvCount++;
    res.render('flyme', { title: 'About Me' });
});

router.get('/album', function(req, res, next) {
    pvCount++;
    res.render('album', { title: 'Album' });
});

router.get('/:username', function(req, res, next) {
    res.send('Hello :' + req.params.username);
});

var readFile = function(fileName) {
    return new Promise(function(resolve, reject) {
        fs.readFile(fileName, function(error, data) {
            if (error) return reject(error);
            console.log('readFile:data');
            return resolve(data);
        });
    });
};


var asyncReadFile = async function() {
    var f1 = await readFile();
    console.log(f1 + ' world');
};

module.exports = router;