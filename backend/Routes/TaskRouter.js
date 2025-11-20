const { createTask, fetchAllTasks, updateTaskById, deleteTaskById } = require('../Controllers/taskController.js');

const router = require('express').Router();

// To get all the tasks
router.get('/api/tasks', fetchAllTasks);

// To create a task
router.post('/api/tasks', createTask);

// To update a task
router.put('/api/tasks/:id', updateTaskById);

// To delete a task
router.delete('/api/tasks/:id', deleteTaskById);

module.exports = router;