const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  label: String,
  description: String,
  starting_date: Date,
  ending_date: Date,
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project', // Reference to the Project model
  },
});

const TaskModel = mongoose.model('tasks', taskSchema);

module.exports = TaskModel;
