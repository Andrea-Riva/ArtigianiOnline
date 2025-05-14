const { Router } = require('express')
const controller = require('./controller')

const router = Router()

router.get('/', controller.getUtenti)
router.get('/:id', controller.getUtenteById)

module.exports = router