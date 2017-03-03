let user = require('../models/user');

let userController = {

  register:function(req,res){
    var username = req.body.username;
    var password = req.body.password;
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var gucid = req.body.gucid;

    var newUser = new user(req.body);
    newUser.username = username;
    newUser.password = password;
    newUser.firstname = firstname;
    newUser.lastname = lastname;
    newUser.gucid = gucid;

    newUser.save(function(err,newObject){
      if(err){
        console.log(err);
        res.status(500).send();
      }else {
        res.status(200).send();
        console.log(newObject);
      }
    })

  },

  login:function(req,res){
    var username = req.body.username;
    var password = req.body.password;
    user.findOne({username:username,password:password},function(err,foundObject){
          if(err){
            console.log(err);
          }else{
            if(!foundObject){
              console.log("an error occured");
              res.redirect(303,'/loginfailed');
            }
            else{
              req.session.user = foundObject;
              console.log("Logged in");
              res.redirect(303,'/studenthome');
            }
          }

        });
    },

  findUserProject: function(req,res){
      if(req.session.user){
          var curruser = req.session.user;
          user.findOne(curruser,function(err,found){
              if(err){
                console.log(err);
              }
              else{
                var work = found.work;
                return work;
              }
          })
      }
  }


}

module.exports = userController;
