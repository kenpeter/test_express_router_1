// this is 3rd level
var router = require('express').Router();

router.post('/', function(req, res) {
  var username = req.body.username;
  var password = req.body.password;
  console.log(req);
  res.json({ msg: 'hi' });
});

// always export router
module.exports = router;
