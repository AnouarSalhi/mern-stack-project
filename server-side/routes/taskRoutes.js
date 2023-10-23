const express = require('express');
const router = express.Router();
const taskController = require('../controllers/TaskController');


// Create a new task
router.post('/', taskController.createTask);

// Get all tasks
router.get('/', taskController.getAllTasks);

// Get a specific task by ID
router.get('/:id', taskController.getTaskById);

// Update an existing task by ID
router.put('/:id', taskController.updateTask);

// Delete a task by ID
router.delete('/:id', taskController.deleteTask);

module.exports = router ;