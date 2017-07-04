// this is 3rd level
var router = require('express').Router();

// api/categories
// router get
router.get('/', function(req, res) {
  // func, req, res
  // res.json
  // obj
  res.json({ products: [] });
});

// api/categories/:id
// router.get
router.get('/:id', function(req, res) {
  // func req, res
  // res.json
  // id, req.params.id
  res.json({ id: req.params.id });
});

// always export router
module.exports = router;
