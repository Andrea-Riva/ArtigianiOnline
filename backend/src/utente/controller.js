const pool = require("../../db")
const queries = require("./queries")

const getUtenti = async (req, res) => { // GET /
    try {
        const { rows } = await pool.query(queries.getUtenti);
        res.status(200).json(rows);
    } catch (error) {
        console.error("Errore nel recupero di tutti gli utenti:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

const getUtenteById = async (req, res) => { // GET /id
    const id = parseInt(req.params.id);
    try {
        const { rows } = await pool.query(queries.getUtenteById, [id]);
        if (rows.length === 0) {
            return res.status(404).json({ error: "Utente non presente nel DB" });
        }
        res.status(200).json(rows[0]);
    } catch (error) {
        console.error("Errore nel recupero dell'utente:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

const addUtente = async (req, res) => { // POST /
    const { nome, cognome, mail, pwd } = req.body;
    try {
        // Controlla se l'utente esiste già
        pool.query(queries.checkUtenteExists, [mail], (err, result) => {
            if (result.rows.length > 0) {
                res.send("La mail è già in uso")
            } else {    // Se l'utente non esiste, lo aggiunge
                pool.query(queries.addUtente, [nome, cognome, mail, pwd], (err, result) => {
                    if(err) {
                        console.error("Errore nella creazione dell'utente:", err);
                        res.status(500).json({ error: "Internal server error" });
                    }
                    res.status(201).json({ id: result.rows[0].id_utente });
                })
            }
        })
    } catch (error) {
        console.error("Errore nela creazione dell'utente:", error)
        res.status(500).json({ error: "Internal server error" })
    }
}

const deleteUtente = async (req, res) => {  // DELETE /id
    const id = parseInt(req.params.id);
    try {
        const result = await pool.query(queries.deleteUtente, [id]);
        if (result.rowCount === 0) {
            return res.status(404).json({ error: "Utente non trovato" });
        }
        res.status(204).send();
    } catch (error) {
        console.error("Errore nell'eliminazione dell'utente:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = {
    getUtenti,
    getUtenteById,
    addUtente,
    deleteUtente,
}