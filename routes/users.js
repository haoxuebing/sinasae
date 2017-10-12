var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:username', function(req, res, next) {
    res.send('Hello :' + req.params.username);
});

router.get('/uploadPic', function(req, res, next) {
    res.render('uploadPic');
});

module.exports = router;