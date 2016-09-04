var account = require('./account');

var router = require('express').Router();

router.use('/api/account', account);

module.exports = router;