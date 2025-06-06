const getUtenti = 
    "SELECT * FROM utente";   // Prende tutti gli utenti presenti nel sistema
const getUtenteById = 
    "SELECT * FROM utente WHERE id_utente = $1"; // Prende uno specifico utente in base all'id
const addUtente = 
    "INSERT INTO utente (nome, cognome, mail, pwd, ruolo_utente) VALUES ($1, $2, $3, $4, $5) RETURNING id_utente"; // Aggiunge un nuovo utente al DB
const checkUtenteExists = 
    "SELECT * FROM utente WHERE mail = $1"; // Controlla se l'utente esiste già nel DB
const deleteUtente = 
    "DELETE FROM utente WHERE id_utente = $1";  // Elimina un utente in base all'id
const updateUtente =
    "UPDATE utente SET nome = $1, cognome = $2, mail = $3, pfp = $4 WHERE id_utente = $5"; // Aggiorna un utente in base all'id
const loginUtente = 
    "SELECT * FROM utente WHERE mail = $1 AND pwd = $2";    // Controlla se mail e pwd sono corretti

module.exports = {
    getUtenti,
    getUtenteById,
    addUtente,
    checkUtenteExists,
    deleteUtente,
    updateUtente,
    loginUtente
}