// sub need express and router
var router = require('express').Router();

// set up 2nd level with router.use
// api/products
// api/cat
router.use('/products', require('./products'));
router.use('/categories', require('./categories'));

router.get('/', function(req, res){
  res.json("api page");
});

module.exports = router;
