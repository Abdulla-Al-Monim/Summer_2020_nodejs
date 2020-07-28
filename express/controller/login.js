var express = require('express');
var router = express.Router();


router.get('/', (req, res)=>{
	
	res.render('login');
	res.redirect('/Admin');
});

router.post('/', (req, res)=>{

	res.redirect('/Admin');
});


module.exports = router;