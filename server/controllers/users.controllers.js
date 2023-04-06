import { pool } from "../db.js";

export const getUsers = async(req,res) => {
    try{
        const [result]  = await pool.query("SELECT * FROM users ORDER BY user_id ASC");
        res.json(result);
    }
    catch(error){
        return res.status(500).json({message: error.message});
    }
}

export const getUser = async(req,res) => {
    try{
        const [result] = await pool.query("SELECT * FROM users WHERE user_id = ?", [req.params.id]);
    
        if(result.length === 0){
            return res.status(404).json({message: "User not found"})
        }
        res.json(result[0]);
    }
    catch(error){
        return res.status(500).json({message: error.message});
    }
}

export const createUser = async(req,res) => {
    try{
        const {name, email, password} = req.body;
        const [result] = await pool.query('INSERT INTO users(name, email, password) VALUES (?, ?, ?)',[
            name,
            email,//Entonces al crear la tarea desde el cliente tambien se le envia al servidor el id del usuario para que lo guarde en la tabla de task como la clave foranea que ya definimos
            password
        ]);
        res.json({
            id: result.insertId,
            name,
            email,
            password
        });
    }
    catch(error){
        return res.status(500).json({message: error.message});
    }
}

export const updateUser = async(req,res) => {
    try{
        const result = await pool.query("UPDATE users SET ? WHERE user_id = ?", [req.body, req.params.id]);
        res.json(result);
    }
    catch(error){
        return res.status(500).json({message: error.message});
    }
}

export const deleteUser = async(req,res) => {
    try{
        const [result] = await pool.query("DELETE FROM users WHERE user_id = ?", [req.params.id]);
        if(result.affectedRows === 0){
            return res.status(404).json({message: "User not found"});
        }
        res.sendStatus(204);
    }
    catch(error){
        return res.status(500).json({message: error.message});
    }
}