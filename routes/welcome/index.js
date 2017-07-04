// sub need express and router
var router = require('express').Router();

// /welcome
router.get('/', function(req, res) {
  res.json({ msg: 'welcome' });
});

module.exports = router;
