var express = require('express');
var router = express.Router();
var project = require('../app/controllers/projectController');
var user = require('../app/controllers/userController');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
});

router.get('/register',function(req,res,next){
    res.render('register');
});

router.post('/register',function(req,res){
    user.register(req,res);
    res.redirect(303,'/thanks');
});

router.get('/signin',function(req,res){
    res.render('signin');
});

router.post('/signin',function(req,res){
    user.login(req,res);
    //res.redirect(303,'/studenthome');
});

router.get('/search',function(req,res){
    res.render('search');
});

router.get('/thanks',function(req,res){
    res.render('thanks');
});

router.get('/upload',function(req,res){
    res.render('upload');
});

router.post('/upload',function(req,res){
    project.createProject(req,res);
    res.redirect(303,'/thanks');
});

router.get('/studenthome',function(req,res){
    if(req.session.user){
    var work = req.session.user.work;
    res.render('studenthome',{work:work});
  }
  else{
    res.redirect(303,'/error');
  }

});

router.get('/error',function(req,res){
    res.render('error');
});

router.get('/loginfailed',function(req,res){
    res.render('loginfailed');
});

router.get('/logout',function(req,res){
    req.session.destroy();
    console.log("Logged Out");
    res.redirect(303,'/');
});

module.exports = router;
