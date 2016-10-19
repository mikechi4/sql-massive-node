var app = require('./server.js');
var db = app.get('db');

module.exports = {
  create: function(req, res, next) {
    var newProduct = {
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      image_url: req.body.image_url
    }

    db.create_product([newProduct.name, newProduct.description, newProduct.price,
      newProduct.image_url],function(err, products) {
      console.log(products)
      res.status(200).json(products);
    })
  },
  get: function(req, res, next){
    db.read_products(function(err, products){
      console.log(products);
      res.status(200).json(products);
    })
  },

  delete: function(req, res, next){
    db.delete_product([req.params.productId], function(err, products){
      res.status(200).json(products);
      console.log(products)
    })
  },

  getOneProduct: function(req, res, next){
    db.read_product([req.params.id], function(err, product){
      console.log(product);
      res.status(200).json(product)
    })
  },
    
  put: function(req, res, next){
    //var description = req.query;

    db.update_product([req.query.description,req.params.id], function(err, product){
      res.status(200).json(product);
      console.log(product);
    })
  }
}
