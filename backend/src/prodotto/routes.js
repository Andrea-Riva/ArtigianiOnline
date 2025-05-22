const { Router } = require('express');
const controller = require('./controller');

const router = Router();

// Route per prendere tutti i prodotti
router.get('/', controller.getProdotti);
// Route per prendere un prodotto in base all'id
router.get('/:id', controller.getProdottoById);

module.exports = router;