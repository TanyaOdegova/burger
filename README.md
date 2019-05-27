README file helpful tutorial can be found [here](https://www.youtube.com/watch?v=HUBNt18RFbo "Markdown crash course")
<!-- Headings -->
# Eat Da Burger
## Summary
In this assignment we've been taught to create a full-stack application usinf ORM structure called MVC and deploy it on Heroku.
You can enter the name of burger in the search field.
Click on "Add a burger" button which will add this option into an array of burger options that you can devour.
Available for consumption burgers are buttonw with the orange backgorund.
Once you click on the burger you'd like to eat, it is being pushed onto Devoured or deleted burgers list.
![eat da burger gif](/public/assets/img/burgergif.gif "eat da salmon burger man!")
## Technology used:
MySQL, Node, Express, ORM, Handlebars.
## Where to start:
-Create ORM file structure with config folder, models, public, views folders and server.js file. 

- In server.js file pull your dependencies, create database connection.
- Create db folder where you are going to store your data and create table in schema file.
```javascript
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
  	ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  	dt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  	PRIMARY KEY(id)
);
``` 
- You can also enter burgers into the table by using seeds file.
- In server.js file establish connection and use port 3000, we will use a different port to host the entire application locally.
- You can include routes either in server.js or separately in the controllers filder.
```javascript
var express = require('express');
var router = express.Router();

var burger = require('../models/burger.js');
```
- In controllers folder establish the routes GET and PUT. You will use GET to "get" enered burger options and will post them as new buttons.
```javascript
router.get('/', function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    res.render('index', hbsObject);
  });
});
router.post('/burgers', function(req, res) {
  burger.insertOne([
    'burger_name'
  ], [
    req.body.burger_name
  ], function(data) {
    res.redirect('/');
  });
```
You will use PUT to devour burgers and change their chategory.
```javascript
router.put('/burgers/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;

  burger.updateOne({
    devoured: true
  }, condition, function(data) {
    res.redirect('/');
  });
});
```
## NODE modules:
- Dowload body parser, express, mysql and express handlebars node packages.
```bash 
npm install
```
I have also dowloaded some additional packages to help me structure my work and debug issues. Such as: chalk, nodemon, override, etc.
```javascript
"dependencies": {
    "body-parser": "^1.19.0",
    "chalk": "^2.4.2",
    "express": "^4.16.4",
    "express-handlebars": "^3.0.2",
    "i": "^0.3.6",
    "method-override": "^3.0.0",
    "mysql": "^2.17.1",
    "nodemon": "^1.19.0"
  }
```
### HTML and Views folder:
- Create 2 files: main and index. Main handlebars are going to be nested within laouts folder.
- In the main handlebars folder create a skeleton of your application.
It is going to look like a typical html file. 
- However in the body section of the main handlebars, use a reference to the index.handlebars file. This linkage will import style form the index.handlebars into the main. There is no linkage other than {{{body}}} needed in the header. However, use public folder and nested within it css folder to style your page. Index.handlebars will provide a struture and layout. 
3. Url to the heroku app-->
https://eatdaburgertanya.herokuapp.com/
4. *To see demo please follow the link below:*
[burger demo](https://youtu.be/dFMRq_Kr_hU/)
---
---
## Important note regarding Heroku deployment:
Since heroku needs connection to be established between its application and our local database, you have to:
* dowload plugin called __JAWS DB__. search for it on the heroku official website.
![Heroku plug in JAWS DB](/public/assets/img/jaws1.png)
* enter your credit card information under Settings in your profile on Heroku. Choose a free of charge plan.
![heroku and jaws](/public/assets/img/jaws2.png)
* go back to your connections file and make sure you update production environment with JAWS DB URL.
I found a very good tutotiral here:
[JAWSDB youtube tutorial](https://www.youtube.com/watch?v=AQp7b-1356k/ "Jaws DB and Heroku tutorial")
* Also I went to mySQL workbench and created new connection between heroku and my workbench.