const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = function(mongoUrl){
  // mongoose.Promise = global.Promise;

  mongoose.connect(mongoUrl, {
    useMongoClient: true
  }, function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log('We are connected to: ' + mongoUrl);
    }
  });

  //format for saving shoes
  var shoeSchema = new Schema({
    brand : String,
    size : Number,
    colour : String,
    inStock : Number
  });

  const shoes = mongoose.model('shoes', shoeSchema);

  return {
    shoes
  }

  }
