const pool = require("../../db")
const queries = require("./queries")

const getUtenti = async (req, res) => {
    try {
        const { rows } = await pool.query(queries.getUtenti);
        res.status(200).json(rows);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

const getUtenteById = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const { rows } = await pool.query(queries.getUtenteById, [id]);
        if (rows.length === 0) {
            return res.status(404).json({ error: "Utente non presente nel DB" });
        }
        res.status(200).json(rows[0]);
    } catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = {
    getUtenti,
    getUtenteById,
}