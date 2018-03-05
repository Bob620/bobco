var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { bundle: 'index.js' });
});

router.get('/waifu', (req, res) => {
	res.redirect('https://waifubot.moe');
});

module.exports = router;
