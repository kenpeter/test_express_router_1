// this is 3rd level
var router = require('express').Router();

// api/products
// router get ------ you can also think it is /api/products/#
router.get('/', function(req, res) {
  // func, req, res
  // res.json
  // obj
  res.json({ products: [] });
});

// api/products/:id
// router.get
router.get('/:id', function(req, res) {
  // func req, res
  // res.json
  // id, req.params.id
  res.json({ id: req.params.id });
});

// always export router
module.exports = router;
