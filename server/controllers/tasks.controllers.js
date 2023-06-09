import { pool } from "../db.js";

export const getTasks = async(req,res) => {
    try{
        const [result]  = await pool.query("SELECT * FROM tasks WHERE user_id = ? ORDER BY createAt ASC", [req.params.user_id]);
        res.json(result);
    }
    catch(error){
        return res.status(500).json({message: error.message});
    }
}

export const getTask = async(req,res) => {
    try{
        const [result] = await pool.query("SELECT * FROM tasks WHERE id = ?", [req.params.id]);
    
        if(result.length === 0){
            return res.status(404).json({message: "Task not found"})
        }
        res.json(result[0]);
    }
    catch(error){
        return res.status(500).json({message: error.message});
    }
}

export const createTask = async(req,res) => {
    try{
        const {title, description, user_id} = req.body;
        const [result] = await pool.query('INSERT INTO tasks(title, description, user_id) VALUES (?, ?, ?)',[
            title,
            description,//Entonces al crear la tarea desde el cliente tambien se le envia al servidor el id del usuario para que lo guarde en la tabla de task como la clave foranea que ya definimos
            user_id
        ]);
        res.json({
            id: result.insertId,
            title,
            description,
            user_id
        });
    }
    catch(error){
        return res.status(500).json({message: error.message});
    }
}

export const updateTask = async(req,res) => {
    try{
        const result = await pool.query("UPDATE tasks SET ? WHERE id = ?", [req.body, req.params.id]);
        res.json(result);
    }
    catch(error){
        return res.status(500).json({message: error.message});
    }
}

export const deleteTask = async(req,res) => {
    try{
        const [result] = await pool.query("DELETE FROM tasks WHERE id = ?", [req.params.id]);
        if(result.affectedRows === 0){
            return res.status(404).json({message: "Task not found"});
        }
        res.sendStatus(204);
    }
    catch(error){
        return res.status(500).json({message: error.message});
    }
}