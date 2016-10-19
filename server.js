var express = require('express');
var bodyParser = require('body-parser');
var massive = require('massive');
var port = 3000;
var app = express();

var massiveServer = massive.connectSync({
  connectionString: "postgres://postgres:january17@localhost/massive-afternoon-proj"
});

app.use(bodyParser.json());
app.set('db',massiveServer);
var db = app.get('db')

app.post('/api/product', function(req, res, next) {
  var newProduct = {
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    image_url: req.body.image_url
  }

  db.create_product([newProduct.name, newProduct.description, newProduct.price, newProduct.image_url],function(err, products) {
    console.log(products)
    res.status(200).json(products);
  });
});


app.listen(port, function(){
  console.log('Now connected to port ' +port);
})
