// Setup express
const express = require('express')
const path = require('path')
const cors = require('cors')    // Policy CORS
// Routes
const utenteRoutes = require('./src/utente/routes')

const app = express()
// Setup porta del server
const port = 3000
// Attiva le policy CORS
app.use(cors())
// Middleware parsare le richieste in JSON
app.use(express.json())

// Display del file statico per la homepage del server
app.use(express.static(path.join(__dirname, 'public')))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.use('/api/utenti', utenteRoutes)
app.use('api/utenti/:id', utenteRoutes)

// Attiva il server sulla porta 3000
app.listen(port, () => {
    console.log(`Server attivo presso http://localhost:${port}`)
})