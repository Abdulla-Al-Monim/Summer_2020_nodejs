var express = require('express');
var router = express.Router();


router.get('/', (req, res)=>{
	
	res.render('AllEmployeeList');
});

router.post('/', (req, res)=>{

});


module.exports = router;