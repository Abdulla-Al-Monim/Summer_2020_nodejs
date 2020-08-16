var express 	= require('express');
var userModel 	= require.main.require('./models/user');
var adminmodel 	= require.main.require('./models/adminmodel');
const { body, validationResult } = require('express-validator');
var router 		= express.Router();

router.get('/', function(req, res){
  res.render('admin/index');
});
router.get('/addEmp', function(req, res){
  res.render('admin/addEmp');
});
router.get('/empList', function(req, res){
  adminmodel.getAll(function(results){
    res.render('admin/empList', {userlist : results, uname : req.session.username});
  });
});
router.post('/saveEmp', function(req, res, next){
  var user = {
	ID : req.body.id,
    name : req.body.name,
    email : req.body.phone,
    address : req.body.userName,
    phone_number : req.body.password
	};
  adminmodel.insert(user, function(status){
    if(status){
     res.redirect("/admin/addEmp");
    }
  });
});
router.post('/updateEmp', function(req, res){
  var user = {
		ID : req.body.id,
    name : req.body.name,
    email : req.body.email,
    address : req.body.address,
    phone_number : req.body.phone
	};
  adminmodel.update(user, function(status){
    if(status){
      res.redirect("/admin/empList");
    }
  });
});
router.post('/deleteEmp', function(req, res){
  adminmodel.delete(req.body.delete_button, function(status){
    if(status){
      res.redirect("/admin/empList");
    }
  });
});

module.exports = router;
