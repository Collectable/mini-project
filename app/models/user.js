var mongoose = require('mongoose');
var project = require('./project');

var userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
      type:String,
      required:true,
    },

    firstname:String,

    lastname:String,

    gucid:String,

    work:[{type:mongoose.Schema.Types.ObjectId,ref:'project'}]
})

var user = mongoose.model("user", userSchema);

module.exports = user;
