
var express 	= require('express');
var userModel 	= require.main.require('./models/user');
var router 		= express.Router();

router.get('/', function(req, res){
  res.render('employee/index');
});




module.exports = router;
