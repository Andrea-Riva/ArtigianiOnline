const getUtenti = "SELECT * FROM utente";   // Prende tutti gli utenti presenti nel sistema
const getUtenteById = "SELECT * FROM utente WHERE id_utente = $1"; // Prende uno specifico utente in base all'id

module.exports = {
    getUtenti,
    getUtenteById,
}