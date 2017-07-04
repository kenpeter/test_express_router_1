// require express and exec
var app = require('express')();

// set up 1st level with app.use
app.use('/api', require('./routes/api'));
app.use('/welcome', require('./routes/welcome'));

app.get('/', function(req, res){
  res.json('home page');
});

var port = 3000;
app.listen(port);
console.log(`running at port ${port}`)
