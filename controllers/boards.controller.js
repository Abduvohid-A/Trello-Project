import pool from "../db/database.js";


export const getAllBoards = async (req, res) => {
    try {
        const results = await pool.query("SELECT * FROM boards")
        res.send(results.rows).status(200)
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    };
};

export const getBoard = async (req, res) => {
    try {
        const { boardId } = req.params
        const results = await pool.query("SELECT * FROM boards WHERE id = $1", [boardId])
        res.send(results.rows).status(200)
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    };
};

export const createBoard = async (req, res) => {
    try {
        const { title, columnId } = req.body;
        if (title.length < 4 || columnId < 1) {
            return res.status(400).json({ message: "To'g'ri ma'lumot kiriting" })
        };
        const checkId = pool.query("SELECT * FROM columns WHERE id = $1", [columnId]);
        console.log(checkId.rows)
        if (checkId.rows) {
            const insert = "INSERT INTO boards (title, columnId) VALUES ($1, $2) RETURNING *"
            const results = await pool.query(insert, [title, columnId]);
            res.send(results.rows).status(200)
        } else {
            res.status(404).json({ message: "Bunaqa column yo'q" })
        }

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    };
};

export const updateBoard = async (req, res) => {
    try {
        const { title } = req.body;
        const { boardId } = req.params;
        if (title) {
            const update = "UPDATE boards set title = $1 WHERE id = $2 RETURNING *"
            const results = await pool.query(update, [title, boardId])
            res.send(results.rows).status(200);
        } else {
            res.status(400).json({ message: "Title yozmabsiz" })
        };
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    };
};

export const deleteBoard = async (req, res) => {
    try {
        const { boardId } = req.params
        const results = await pool.query("DELETE FROM boards WHERE id = $1 RETURNING *", [boardId])
        res.send(results.rows).status(200)
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    };
};