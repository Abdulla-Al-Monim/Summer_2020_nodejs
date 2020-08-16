var express 	= require('express');
var exSession 	= require('express-session');
var bodyParser 	= require('body-parser');
var login = require('./controller/login');
var employee = require('./controller/employee');
var admin = require('./controller/admin');
const { body, validationResult } = require('express-validator');

var app 		= express();

//config
app.set('view engine', 'ejs');

app.use('/Assets', express.static('assets'));


//middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(exSession({secret: 'my secret value', saveUninitialized: true, resave: false}));


app.use('/login', login);
app.use('/employee', employee);
app.use('/admin', admin);

app.get('/', function(req, res){
	res.redirect('/login');
});

app.listen(3000, function(){
	console.log('express http server started at...3000');
});
