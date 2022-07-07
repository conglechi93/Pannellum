var express = require('express');
var router = express.Router();
var User = require('../model/user.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/register',(req,res)=>{
  const {email,password,phone,address,username} = req.body
  if(email && password && phone && address && username ) {
    const user = new User()
    user.email = email
    user.password = password
    user.phone = phone
    user.address = address
    user.username = username
    user.save()
    res.status(200).json({'message': 'success'})
  }
  else{
    res.status(400).json({'message':'not value'})
  }
})

router.post('/login',(req,res)=>{
  if(res.body) {
    console.log(res.body);
    res.send(200).json({'message':'success'})
  }
  else {
    res.status(400).json({'message': 'not value'})
  }
})

module.exports = router;
