let project = require('../models/project');
let user = require('../models/user');


let projectController = {

    getAllProjects:function(req, res){

        project.find(function(err, projects){

            if(err)
                res.send(err.message);
            else
                res.render('allprojects', {projects});
        })
    },

    createProject:function(req,res){
      var title = req.body.username;
      var url = req.body.url;
      var name = req.body.studentname;

      var newProject = new project(req.body);
      newProject.title = title;
      newProject.url = url;
      newProject.studentname = name;

      newProject.save(function(err,newObject){
        if(err){
          console.log(err);
          res.status(500).send();
        }else {
          //res.status(200).send();
          console.log(newObject);
          user.findOne({username:req.session.user.username},function(err,user){
            user.work.push(newObject);
            user.save({user},function(err,object){
              if(err){
                console.log(err);
              }
            })
          })
          console.log("pushed");
        }
      })
    },
}

module.exports = projectController;
