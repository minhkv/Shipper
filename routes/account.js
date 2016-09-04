var router = require('express').Router();

router.get('/', function(req, res) {
	res.send('GET account');
	res.end();
});

router.post('/', function(req, res) {
	res.send('POST account');
	console.log(req.body);
	res.end();
});

module.exports = router;