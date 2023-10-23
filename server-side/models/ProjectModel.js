const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  label: {
    type:String
  },
  description: {
    type:String
  },
  status:{
    type:String
  },
  starting_date: {
    type:String
  },
  ending_date: {
    type:String
  },
});

const ProjectModel = mongoose.model('projects', projectSchema);

module.exports = ProjectModel;
