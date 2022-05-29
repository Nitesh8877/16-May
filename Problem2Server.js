const express = require('express')
const bodyParser = require('body-parser');
const { resolve } = require('path');
const App = express();
// using as a proxy for database

let users = [{"id":"1","name":"tushar Raina" ,
"email":"rainatushar22@gmail.com"}
,{"id":"2","name":"Sachin tendulkar", "email":"sachin112@gmail.com"}];


// Configuring body parser middleware

App.use(bodyParser.urlencoded({ extended: false }));
App.use(bodyParser.json());

App.get('/', (request, response) => {
   response.send('this is my home page')
    });
    
//Returns list of all the users
App.get('/users', (request, response) => {
response.json(users).status(200);
});

//Deletes user wth given id
App.delete('/user/:id', (req, res) => {
const id = req.params.id;
users = users.filter(user => {
if (user.id !== id) {
return true;
}
return false;
});
res.send('User is deleted').status(400);
});
//adds a new user
App.post('/user', (req, res) => {
const user = req.body;
for(count in users){
if(users[count]["id"] === user.id){
res.status(400).send('User cant be added to the database');
return;
}
}
users.push(user);
res.send('User is added to the database').status(200);
});
//Listens to given Port
App.listen(3000,
() => console.log(`Listening on port 3000`));