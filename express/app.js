//DECELARATION
var express = require('express');
var home = require('./controller/home');
var login = require('./controller/login');
var admin = require('./controller/Admin');
var Employee = require('./controller/Employee');
var MyProfile = require('./controller/MyProfile');
var AddEmployee = require('./controller/AddEmployee');
var AllEmployeeList = require('./controller/AllEmployeeList');

var app 	= express();


//Configuration
app.set('view engine', 'ejs');
app.use('/login', login);
app.use('/Employee', Employee);
app.use('/Employee/MyProfile', MyProfile);
app.use('/Admin', admin);
app.use('/Admin/AddEmployee', AddEmployee);
app.use('/Admin/AllEmployeeList', AllEmployeeList);



//SERVER STARTUP
app.listen(3000, ()=>{
	console.log('express server started at 3000');
});