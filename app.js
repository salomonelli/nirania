/**
 * Created by sarasteiert on 05/08/16.
 */
var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
    res.sendFile(__dirname +'/index.html');
});

app.listen(3000, function(){
    console.log('Listening on localhost:3000');
});