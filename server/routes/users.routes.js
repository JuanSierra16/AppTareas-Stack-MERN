import { Router } from "express";
import {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    login
} from "../controllers/users.controllers.js";

const router = Router();

router.get('/users', getUsers);

router.get('/users/:email', getUser);

router.post('/users', createUser);

router.put('/users/:id', updateUser);

router.delete('/users/:id', deleteUser);

router.post('/login', login)

export default router;