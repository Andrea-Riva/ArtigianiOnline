const { Router } = require('express')
const controller = require('./controller')

const router = Router()

router.get('/', controller.getUtenti)   // Route per prendere tutti gli utenti
router.post('/', controller.registerUtente)  // Route per creare un utente
router.get('/:id', controller.getUtenteById)    // Route per prendere uno specifico utente in base all'id
router.delete('/:id', controller.deleteUtente)  // Route per eliminare un utente in base all'id
router.put('/:id', controller.updateUtente)  // Route per aggiornare un utente in base all'id
router.post('/login/:mail', controller.loginUtente)    // Route per il login dell'utente

module.exports = router