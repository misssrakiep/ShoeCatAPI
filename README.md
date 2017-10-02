# shoeCatalogueAPI

## Contents

 * Project Overview

 * Getting started on the API

 * Creating you development environment

 * Setting up the API

 * Running the app locally

 * Version control

 * Issues

 --------
## -Project oveview

This [API](https://en.wikipedia.org/wiki/Application_programming_interface) allows a user to enter data through an application called [POSTMAN](https://www.getpostman.com/postman). The user of this API can:

* view a list all shoes that are currently in the database
* view all shoes with a given brand
* view all shoes with a given size
* vie all shoes with a given brand and size
* update the stock levels when a shoe is sold
* and add a new shoe to the inventory

This API can be used in conjuction with a front-end application that will provide the user with an interface to do all the above mentioned.

## -Getting started on the API

Clone the git repository where the API is safely stashed [here](https://github.com/misssrakiep/ShoeCatAPI).

### - Cloning

In your terminal, copy and paste the following
command:

`$ git clone git@github.com:misssrakiep/ShoeCatAPI.git`

## Creating you development environment

### -Prerequisites

 To start contributing to the API you will need the following tools:


* NodeJS
* npm
* Nodemon
* A free Heroku account
* A text editor of your choice

**NodeJS**

Node.js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.

**npm**

npm , short for Node Package Manager, is two things: first and foremost, it is an online repository for the publishing of open-source Node.js projects; second, it is a command-line utility for interacting with said repository that aids in package installation, version management, and dependency management.

**Nodemon**

Nodemon is a utility that will monitor for any changes in your source and automatically restart your server. Perfect for development. Install it using npm. Just use nodemon instead of node to run your code, and now your process will automatically restart when your code changes.

**Heroku**

Heroku is a cloud platform that lets companies build, deliver, monitor and scale apps — we're the fastest way to go from idea to URL, bypassing all those infrastructure headaches.

Get started with Heroku [here](https://devcenter.heroku.com/start).

## -Setting up the API
### -Packages you will need to install



As an easy option you can open the package.json file:

```
"dependencies": {
  "body-parser": "^1.18.1",
  "express": "^4.15.4",
  "mongodb": "^2.2.31",
  "mongoose": "^4.11.11",
  "node-static": "^0.7.9"
}
```
 of the API and type
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

## -Running the app locally

Change directories into the API folder and run `$ nodemon` or `$ node index.js` in you terminal. The following text shoud then appear in your terminal: `Running on port 3010`

## -Version control

[Git](https://en.wikipedia.org/wiki/Git) is used for version control on this project.


## -Issues
 I am currently aware that the API does not understand the `POST` request on the "sold" route, although this does work when using the API in conjunction with POSTMAN.
