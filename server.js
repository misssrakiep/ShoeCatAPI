//require all dependencies
const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Models = require('./shoeCatModel');
const models = Models(process.env.MONGO_DB_URL ||'mongodb://localhost/shoes');
const ShoeCat = require('./shoeCat')
const shoeCat = ShoeCat(models);

//require routes
// const shoeCat = require('./shoeCat');

//configure app to use bodyParser
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

//routes for shoeCatAPI
//===============================================================
//getting data from server
// ===============================================================

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', '"Origin, X-Requested-With, Content-Type, Accept"');
  next();
})


app.get('/', function(req, res){
  res.redirect('/api/shoes');
})

// -route for showing the list of all shoes in the database
// GET : /api/shoes
app.get('/api/shoes', shoeCat.index);

// -route for listing all shoes of a selected brand
// GET : /api/shoes/brand/:brand
app.get('/api/shoes/brand/:brand', shoeCat.getBrand);

// -route for listing all shoes of a selected size
// GET : /api/shoes/size/:size
app.get('/api/shoes/size/:size', shoeCat.getSize);

// -route that filters shoes by brand and size
// GET : /api/shoes/brand/:brand/size/:size
app.get('/api/shoes/brand/:brand/size/:size', shoeCat.getBrandAndSize);



// =================================================================
//sending data to server
// =================================================================
// -route that updates stock levels
// POST  : /api/shoes/sold/:id
app.post('/api/shoes/sold/:id', shoeCat.sold);

// -route that adds a new shoe to the stock
// POST : /api/shoes/
app.post('/api/shoes', shoeCat.addShoe);



/*
START THE SERVER
*/

const port = process.env.PORT || 3010;
app.listen(port, function() {
  console.log('Running on port ' + port);
});
app.set('port', process.env.PORT || port);
