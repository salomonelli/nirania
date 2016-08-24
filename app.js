/**
 * Created by sarasteiert on 05/08/16.
 */
var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
    res.sendFile(__dirname +'/intro.html');
}); 

app.get('/game', function(req, res){
  res.sendFile(__dirname +'/index.html');
});

app.get('/de', function(req, res){
    res.sendFile(__dirname +'/intro-ger.html');
});

app.get('/outro', function(req, res){
    res.sendFile(__dirname +'/outro.html');
});

app.get('/outro-ger', function(req, res){
    res.sendFile(__dirname +'/outro-ger.html');
});

app.listen(3000, '0.0.0.0', function(){
    console.log('Listening on localhost:3000');
});
