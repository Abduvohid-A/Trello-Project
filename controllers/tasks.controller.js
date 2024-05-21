import pool from "../db/database.js";

export const getAllTasks = async (req, res) => {
    try {
        const results = await pool.query("SELECT * FROM tasks")
        res.send(results.rows).status(200)
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    };
};

export const getTask = async (req, res) => {
    try {
        const { taskId } = req.params;
        const results = await pool.query("SELECT * FROM tasks WHERE id = $1", [taskId])
        res.send(results.rows).status(200)
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    };
};

export const createTask = async (req, res) => {
    try {
        const results = await pool.query("SELECT * FROM tasks")
        res.send(results.rows).status(200)
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    };
};

export const updateTask = async (req, res) => {
    try {
        const { taskId } = req.params;
        const results = await pool.query("SELECT * FROM tasks")
        res.send(results.rows).status(200)
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    };
};

export const deleteTask = async (req, res) => {
    try {
        const { taskId } = req.params;
        const results = await pool.query("DELETE FROM tasks WHERE id = $1 RETURNING *", [taskId])
        res.send(results.rows).status(200)
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    };
};