const { Router } = require('express')
const controller = require('./controller')

const router = Router()

router.get('/', controller.getUtenti)   // Route per prendere tutti gli utenti
router.post('/', controller.addUtente)  // Route per creare un utente
router.get('/:id', controller.getUtenteById)    // Route per prendere uno specifico utente in base all'id

module.exports = router