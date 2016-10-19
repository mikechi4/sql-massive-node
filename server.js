var express = require('express');
var bodyParser = require('body-parser');
var massive = require('massive');
var port = 3000;

var app = module.exports = express();

var massiveServer = massive.connectSync({
  connectionString: "postgres://postgres:january17@localhost/massive-afternoon-proj"
});

app.use(bodyParser.json());
app.set('db',massiveServer);
var db = app.get('db')
var controller = require('./controller.js')

app.post('/api/product', controller.create);
app.get('/api/products', controller.get);
app.get('/api/product/:id', controller.getOneProduct);
app.put('/api/product/:id', controller.put);
app.delete('/api/product/:productId', controller.delete);


app.listen(port, function(){
  console.log('Now connected to port ' +port);
})
