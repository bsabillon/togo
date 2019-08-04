var app = require('express')();
var cors = require('cors');
var pgp = require("pg-promise")();
const port = 3000
var database = pgp("postgres://ofsoasjazfznro:8422453c66450cd02fe7a41a3fa1d20882e038ab1345b76bb7ee8cb64102146e@ec2-54-235-246-201.compute-1.amazonaws.com:5432/ddqto13jodnbe6?ssl=true&sslfactory=org.postgresql.ssl.NonValidatingFactory");
const express = require('express')


app.use(cors());

//endpoint test
app.get('/', function (request, response) { 
    response.send('{"result" : "success"}');

});

//create new user
app.post('/newuser', (request, response) => { 
            
    database.query('INSERT INTO "user" (${this:name}) VALUES (${this:csv})',
    request.body)
    .then((data) => {
        response
        .status(200)
        .json('{"response" : "user added succesfully!"}');
    })
    .catch( (error) => {
        response.send(error);
    });

});

//get user object by e-mail 
app.get('/user/:email', (request, response) => { 
    database.one(`SELECT * FROM "user" WHERE "userEmail" = '${request.params.email}'`)
    .then((data) => {
        response.json(data);
    })
    .catch((error) => {
        response.send(error);
    }) 

});



app.listen(process.env.PORT || port, () => console.log(`ToGo app listening on port ${port}!`))