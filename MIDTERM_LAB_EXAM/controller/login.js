var express 	= require('express');
var userModel 	= require.main.require('./models/user');
var router 		= express.Router();

router.get('/', function(req, res){
	res.render('login/index');
});

router.get('/registation', function(req, res){
	res.render('login/registation');
});
router.post('/', function(req, res){
  var user = {
		uname: req.body.userName,
		password: req.body.password
	};
	console.log(user);

  userModel.validate(user, function(status){
		if(status){
			req.session.username = user.uname;
			userModel.get(user.uname, function(result){
				if (result.role == 1){
					res.redirect('/admin');
				}
				else if (result.role == 2){
					res.redirect('/employee');
				}
			});
		}else{
      res.send('invalid usernam or password')
		}
	});

});
router.post('/saveUser', function(req, res, next){
  
  var user = {
    user_name : req.body.userName,
    password : req.body.password,
    role : req.body.role
	};
  userModel.insert(user, function(status){
    if(status){
     res.redirect("/Login/registation");
    }
  });
});
module.exports = router;
