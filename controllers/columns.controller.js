import Joi from "joi";
import bcrypt from "bcrypt";
import pool from "../db/database.js";


export const getAllColumns = async(req, res) => {
    try {
        const results = await pool.query("SELECT * FROM columns")
        res.send(results.rows).status(200)
    } catch (err) {
        console.log(err);
        res.status(500).json({ error : err.message});
    };
};

export const getColumn = async(req, res) => {
    try {
        const { columnId } = req.params;
        const results = await pool.query("SELECT * FROM columns where id = $1", [columnId])
        res.send(results.rows).status(200)
    } catch (err) {
        console.log(err);
        res.status(500).json({ error : err.message});
    };
};

export const createColumn = async(req, res) => {
    try {
        const results = await pool.query("SELECT * FROM columns")
        res.send(results.rows).status(200)
    } catch (err) {
        console.log(err);
        res.status(500).json({ error : err.message});
    };
};

export const updateColumn = async(req, res) => {
    try {
        const { columnId } = req.params;
        const { name, created_at} = req.body;
        const results = await pool.query("SELECT * FROM columns")
        res.send(results.rows).status(200)
    } catch (err) {
        console.log(err);
        res.status(500).json({ error : err.message});
    };
};

export const deleteColumn = async(req, res) => {
    try {
        const { columnId } = req.params;
        const results = await pool.query("DELETE FROM columns WHERE id = $1 RETURNING *", [columnId])
        res.send(results.rows).status(200)
    } catch (err) {
        console.log(err);
        res.status(500).json({ error : err.message});
    };
};