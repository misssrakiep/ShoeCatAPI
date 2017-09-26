# shoeCatalogueAPI

## -Project oveview

This [API](https://en.wikipedia.org/wiki/Application_programming_interface) allows a user to enter data through an application called [POSTMAN](https://www.getpostman.com/postman). The user of this API can:

* view a list all shoes that are currently in the database
* view all shoes with a given brand
* view all shoes with a given size
* vie all shoes with a given brand and size
* update the stock levels when a shoe is sold
* and add a new shoe to the inventory

This API can be used in conjuction with a front-end application that will rpovide the user with an interface to do all the above mentioned.

## -Getting started on the API

Clone the git repository where the API is safely stashed [here](https://github.com/misssrakiep/ShoeCatAPI).

## Creating you development environment



### -Prerequisites

 To start contributing to the API you will need the following tools:
* [NodeJS](https://nodejs.org/en/)
* [npm](https://www.npmjs.com/)
* [Nodemon](https://nodemon.io/)
* A text editor of your choice

## -Setting up the API
### -Packages you will need to install

As an easy option you can open the package.json file of the API and type
`$ npm install`
in your command line,

 Or alternatively you could install them one at a time to make sure they are all there:


* [ExpressJS](https://expressjs.com/), a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

  `$ npm install express --save`

* [Mongo DB](https://www.mongodb.com/) ,a free and open-source cross-platform document-oriented database program.

  `$ npm install mongodb --save`

* [Mongoose](http://mongoosejs.com/),a straight-forward, schema-based solution to model your application data.

  `$ npm install mongoose --save`

* [Body-parser](https://www.npmjs.com/package/body-parser), extracts the entire body portion of an incoming request stream and exposes it on req.body .

  `$ npm install body-parser --save`

* [Node-static](https://www.npmjs.com/package/node-static), understands and supports conditional GET and HEAD requests.

  `$ npm install node-static --save`

## -Testing or Running

Change directories into the API folder and run `$ nodemon` or `$ node index.js` in you terminal.

## -Issues
 I am currently aware that the API does not understand the `POST` request on the "sold" route, although this does work when using the API in conjunction with POSTMAN.
