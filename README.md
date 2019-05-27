In this assignment we've been taught to create a full-stack application usinf ORM structure called MVC and deploy it on Heroku.
You can enter the name of burger in the search field.
Click on "Add a burger" button which will add this option into an array of burger options that you can devour.
Available for consumption burgers are buttonw with the orange backgorund.
Once you click on the burger you'd like to eat, it is being pushed onto Devoured or deleted burgers list. 
1. Technology used:
MySQL, Node, Express, ORM, Handlebars.
2. Where to start:
-Create ORM file structure with config folder, models, public, views folders and server.js file. 
- Download node modules based on your dependencies.
- In server.js file pull your dependencies, create database connection.
- Create db folder where you are going to store your data and create table in schema file. 
- You can also enter burgers into the table by using seeds file.
- In server.js file establish connection and use port 3000, we will use a different port to host the entire application locally.
- You can include routes either in server.js or separately in the controllers filder.
- In controllers folder establish the routes GET and PUT. You will use GET to "get" enered burger options and will post them as new buttons.
You will use PUT to devour burgers and change their chategory. 
NODE modules:
- Dowload body parser, express, mysql and express handlebars node packages.
I have also dowloaded some additional packages to help me structure my work and debug issues. Such as: chalk, nodemon, override, etc.
HTML and Views folder:
- Create 2 files: main and index. Main handlebars are going to be nested within laouts folder.
- In the main handlebars folder create a skeleton of your application.
It is going to look like a typical html file. 
- However in the body section of the main handlebars, use a reference to the index.handlebars file. This linkage will import style form the index.handlebars into the main. There is no linkage other than {{{body}}} needed in the header. However, use public folder and nested within it css folder to style your page. Index.handlebars will provide a struture and layout. 
3. Url to the heroku app-->
https://eatdaburgertanya.herokuapp.com/
4. To see demo please follow the link below:
https://youtu.be/dFMRq_Kr_hU/
