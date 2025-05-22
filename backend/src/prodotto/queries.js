const getProdotti = 
    'SELECT * FROM prodotto';   // Prende tutti i prodotti

const getProdottoById = 
    'SELECT * FROM prodotto WHERE id_prodotto = $1'; // Prende un prodotto in base all'id

module.exports = {
    getProdotti,
    getProdottoById
}