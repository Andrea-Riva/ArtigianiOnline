const pool = require("../../db");
const queries = require("./queries");

const getProdotti = async (req, res) => { // GET /
    try {
        const { rows } = await pool.query(queries.getProdotti);
        res.status(200).json(rows);
    } catch (error) {
        console.error("Errore nel recupero di tutti i prodotti:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

const getProdottoById = async (req, res) => { // GET /:id
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        return res.status(400).json({ error: "ID del prodotto non valido" });
    }

    try {
        const { rows } = await pool.query(queries.getProdottoById, [id]);
        if (rows.length === 0) {
            return res.status(404).json({ error: "Prodotto non trovato" });
        }
        res.status(200).json(rows[0]);
    } catch (error) {
        console.error("Errore nel recupero del prodotto:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = {
    getProdotti,
    getProdottoById
}