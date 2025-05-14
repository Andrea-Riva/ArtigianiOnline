const pool = require("../../db");

const getUtenti = async (req, res) => {
    try {
        const { rows } = await pool.query("SELECT * FROM utente");
        res.status(200).json(rows);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = {
    getUtenti
}