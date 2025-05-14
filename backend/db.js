// Creazione oggetto Pool per la gestione del db
const Pool = require('pg').Pool;
// Connessione al db
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'ArtigianiOnlineDB',
    password: 'root',
    port: 5432
})

module.exports = pool