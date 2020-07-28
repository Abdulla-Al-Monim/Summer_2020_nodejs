var express = require('express');
var router = express.Router();


router.get('/', (req, res)=>{
	
	res.render('MyProfile');
});

router.post('/', (req, res)=>{
});


module.exports = router;

