module.exports = function(models) {

  const index = function(req, res, next) {
//fucntion to show all shoes in database
    models.shoes.find({}, function(err, shoes) {
      if (err) {
        res.send(err);
      }
      res.json(shoes);
    })

  }

  const addShoe = function(req, res, next) {
//function to add a new shoe to the database
    models.shoes.findOne({
      _id: req.body.id,
      brand: req.body.brand,
      size: req.body.size,
      colour: req.body.colour
    }, function(err, shoe) {
      console.log('Shoe already in stock');
      if (shoe) {
        res.json({
          _id: req.body.id,
          brand: req.body.brand,
          size: req.body.size,
          colour: req.body.colour,
          inStock: req.body.inStock
        });
      }
      if (!shoe) {
        models.shoes.create({
          _id: req.body.id,
          brand: req.body.brand,
          size: req.body.size,
          colour: req.body.colour,
          inStock: req.body.inStock
        }, function(err, newShoe) {
          console.log(arguments);
          if (err) {
            return next(err);
          }
          if (newShoe) {
            newShoe.save(function(err) {
              if (err) {
                res.send(err)
              }
              res.json({
                _id: req.body.id,
                brand: req.body.brand,
                size: req.body.size,
                colour: req.body.colour,
                inStock: req.body.inStock
              })
            })
          }
        })
      }
    })
  }

  const getBrand = function(req, res, next){
    //fucntion to filter shoes by brand
    var brand = req.params.brand;
    models.shoes.find({brand: req.params.brand}, function(err, shoes){
      if(err){
        res.send(err);
      }
      if(shoes){
        res.json(shoes)
      }
    })
  };

  const getSize = function(req, res, next){
    //function to get the size from the url and return results
    var size = req.params.size;
    models.shoes.find({size: req.params.size}, function(err, shoes){
      if(err){
        res.send(err);
      }
      if(shoes){
        res.json(shoes)
      }
    })
    }

  const getBrandAndSize = function(req, res, next){

    //function to filter shoes by size and brand and return results
    var brand = req.params.brand;
    var size = req.params.size;

    models.shoes.find({size: req.params.size, brand: req.params.brand}, function(err, shoes){
      if(err){
        res.send(err);
      }
      if(shoes){
        res.json(shoes)
      }
    })
  }

  const sold = function(req, res, next){
    //find shoes, sell them and update stock count
    var id = req.params.id;

    models.shoes.findById(req.params.id, function(err, shoes){
      if (err){
        res.send(err);
      }
      if(shoes){
        shoes.inStock --;
        shoes.save(function(err, result){
          if (err) {
            res.send(err);
          }
          if (result) {
            console.log('Result after save: ' + result);
            res.redirect('/api/shoes');
          }
          })
      }
    })
  }

  return {
    //what does this need to send back to the server?
    index,
    addShoe,
    getBrand,
    getSize,
    getBrandAndSize,
    sold
    }
}
