// require express and exec
var app = require('express')();
const bodyParser  = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// set up 1st level with app.use
app.use('/api', require('./routes/api'));
app.use('/welcome', require('./routes/welcome'));

app.get('/', function(req, res){
  res.json('home page');
});

var port = 3000;
app.listen(port);
console.log(`running at port ${port}`)
