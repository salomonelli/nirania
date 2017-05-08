//this file is responsible for the node.js express server and routes
const express = require('express');
const mustacheExpress = require('mustache-express');
const path = require('path');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('mustache', require('hogan-express'));
app.set('view engine', 'mustache');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.render('layout', {
        partials: {
            content: 'index',
            callFunction: 'callGame'
        }
    });
});

app.get('/index', function(req, res) {
    res.render('layout', {
        partials: {
            content: 'index2'
        }
    });
});

app.get('/cheater', function(req, res) {
    res.render('layout', {
        partials: {
            content: 'cantBePlayed',
            callFunction: 'callLastSuccessfulLevel'
        }
    });
});

app.listen(18787, '0.0.0.0', function() {
    console.log('Listening on localhost!');
});
