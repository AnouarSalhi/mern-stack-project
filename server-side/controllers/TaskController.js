const Task = require('../models/TaskModel');

// Create a new task
exports.createTask = (req, res) => {
  const taskData = req.body;
  const task = new Task(taskData);
  task.save()
    .then((data) => {
      res.status(201).json(data); // HTTP 201 Created
    })
    .catch((error) => {
      res.status(500).send(error); // HTTP 500 Internal Server Error
    });
};

// Get all tasks
exports.getAllTasks = (req, res) => {
  Task.find()
    .then((tasks) => {
      res.json(tasks);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

// Get a specific task by ID
exports.getTaskById = (req, res) => {
  const taskId = req.params.id;
  Task.findById(taskId)
    .then((task) => {
      if (!task) {
        return res.status(404).send('Task not found'); // HTTP 404 Not Found
      }
      res.json(task);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

// Update an existing task by ID
exports.updateTask = (req, res) => {
  const taskId = req.params.id;
  const taskData = req.body;
  Task.findByIdAndUpdate(taskId, taskData, { new: true })
    .then((task) => {
      if (!task) {
        return res.status(404).send('Task not found');
      }
      res.json(task);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

// Delete a task by ID
exports.deleteTask = (req, res) => {
  const taskId = req.params.id;
  Task.findByIdAndRemove(taskId)
    .then((task) => {
      if (!task) {
        return res.status(404).send('Task not found');
      }
      res.json(task);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};
