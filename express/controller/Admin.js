var express = require('express');
var router = express.Router();


router.get('/', (req, res)=>{
	
	res.render('Admin');
});

router.post('/', (req, res)=>{

});


module.exports = router;