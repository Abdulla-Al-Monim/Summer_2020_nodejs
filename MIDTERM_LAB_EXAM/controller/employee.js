
var express 	= require('express');
var empmodel 	= require.main.require('./models/empmodel');
var userModel 	= require.main.require('./models/user');
var adminmodel 	= require.main.require('./models/adminmodel');

var router 		= express.Router();

router.get('/', function(req, res){
  res.render('employee/index');
});
router.get('/addPro', function(req, res){
  res.render('employee/addPro');
});
 router.get('/productList', function(req, res){
  empmodel.getAll(function(results){
    res.render('employee/productList', {productlist : results, uname : req.session.username});
  });;
 });
router.post('/updatePro', function(req, res){
  var user = {
	ID : req.body.id,
    name : req.body.name,
    quantity : req.body.quentity,
    price : req.body.price

	};
  empmodel.update(user, function(status){
    if(status){
      res.redirect("/employee/productList");
    }
  });
});
router.post('/deletePro', function(req, res){
  empmodel.delete(req.body.delete_button, function(status){
    if(status){
      res.redirect("/employee/productList");
    }
  });
});
router.post('/savePro', function(req, res, next){
  var user = {
	ID : req.body.id,
    name : req.body.name,
   	quantity : req.body.quantity,
    price : req.body.Price
	};
  empmodel.insert(user, function(status){
    if(status){
     res.redirect("/employee/productList");
    }
  });
});
module.exports = router;
