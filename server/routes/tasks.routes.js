import { Router } from "express";
import {
    getTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
} from "../controllers/tasks.controllers.js";

const router = Router();

router.get('/tasks/:user_id', getTasks);

router.get('/tasks/task/:id', getTask);

router.post('/tasks', createTask);

router.put('/tasks/:id', updateTask);

router.delete('/tasks/:id', deleteTask);

export default router;