import express from "express";
import cors from "cors";
import {dirname, join} from "path";
import { fileURLToPath } from "url";
import {PORT} from "./config.js";

import indexRoutes from './routes/index.routes.js';
import taskRoutes from './routes/tasks.routes.js';
import usersRoutes from './routes/users.routes.js';

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(cors());//Aqui se le puede decir que servidor se puede conectar, en este caso esta para que cualquiera pueda, pero se puede modificar
app.use(express.json());

app.use(indexRoutes);
app.use(taskRoutes);
app.use(usersRoutes);

app.use(express.static(join(__dirname, '../client/dist')))

app.listen(PORT);
console.log(`Server is running on port ${PORT}`);