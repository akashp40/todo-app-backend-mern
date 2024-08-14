const router = require('express').Router();
const {createTask,fetchAllTasks,updateTaskById,deleteTaskById} = require('../controllers/TaskController')


//to get all the tasks
router.get("/tasks",fetchAllTasks)
//To create Task
router.post("/task",createTask)
//to update a task
router.put("/task/:id",updateTaskById)
//to delete a task
router.delete("task/:id",deleteTaskById)


module.exports = router;


