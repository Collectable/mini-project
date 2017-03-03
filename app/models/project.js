var mongoose = require('mongoose');

var projectSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    url:String,
    studentname:String
})

var project = mongoose.model("project", projectSchema);

module.exports = project;
