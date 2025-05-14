// Setup express
const express = require('express')
// Routes
const utenteRoutes = require('./src/utente/routes')

const app = express()
// Setup porta del server
const port = 3000
// Middleware parsare le richieste in JSON
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Benvenuto nel server Express!")
})

app.use('/api/utenti', utenteRoutes)
app.use('api/utenti/:id', utenteRoutes)

// Attiva il server sulla porta 3000
app.listen(port, () => {
    console.log(`Server attivo presso http://localhost:${port}`)
})