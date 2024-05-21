import Joi from "joi";
import bcrypt from "bcrypt";
import pool from "../db/database.js";



export const register = async(req, res) => {
    try {
        const {name, email, password} = req.body;
        const checkData = Joi.object({
            name : Joi.string().min(4).required(),
            email : Joi.string().email().required(),
            password : Joi.string().min(6).required()
        });

        const {err, value} = checkData.validate({name, email, password});
        if (err) return res.status(400).json({ message : err.details[0].message});

        const hashedPassword = await bcrypt.hash(value.password, 10);
        const insert = "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *";
        const values = [value.name, value.email, hashedPassword];

        const results = await pool.query(insert, values);
        res.send(results.rows).status(200);

    } catch (err) {
        console.log(err);
        res.status(500).json({ error : err.message});
    };
};

export const login = async(req, res) => {
    try {
        const { email, password} = req.body;
        const checkEmail = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
        console.log(checkEmail.rows);

        if (checkEmail.rows.length > 0) {
            const checkPassword = bcrypt.compare(password, checkEmail.rows[0].password)
            if (checkPassword) return res.send(checkEmail.rows[0]).status(200);
            else  return res.status(400).json({ message : "Invalid password"});
        } else {
            res.status(400).json({ message : "Invalid email"});
        }; 
    } catch (err) {
        console.log(err);
        res.status(500).json({ error : err.message});
    };
};


export const getAllUsers = async(req, res) => {
    try {
        const results = await pool.query("SELECT * FROM users")
        res.send(results.rows).status(200)
    } catch (err) {
        console.log(err);
        res.status(500).json({ error : err.message});
    };
};

export const getUser = async(req, res) => {
    try {
        const { userId }= req.params;
        const results = await pool.query("SELECT * FROM users WHERE id = $1", [userId])
        res.send(results.rows).status(200)
    } catch (err) {
        console.log(err);
        res.status(500).json({ error : err.message});
    };
};

export const UpdateUser = async(req, res) => {
    try {
        const { userId }= req.params;
        const { name }= req.body;
        if (name) {
            const results = await pool.query("UPDATE users set name = $1 WHERE id = $2 RETURNING *",[name, userId])
            res.send(results.rows).status(200);
        } else {
            res.json({message : "Bo'sh string jonatibsiz"}).status(400);
        };
    } catch (err) {
        console.log(err);
        res.status(500).json({ error : err.message});
    };
};

export const deleteUser = async(req, res) => {
    try {
        const { userId }= req.params;
        const results = await pool.query("DELETE FROM users WHERE id = $1 RETURNING *", [userId])
        res.send(results.rows).status(200)
    } catch (err) {
        console.log(err);
        res.status(500).json({ error : err.message});
    };
};