var express = require('express');

var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var routes = require('./routes/home');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/miniproject');

app.disable('x-powered-by');

var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');
//MORE IMPORTS HERE

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
    secret: 'ilackimagination',
    resave: false,
    saveUninitialized: true
}));
app.use('/', routes);

app.listen(8080,function(){
    console.log("Server Listening On Port 8080");
});
