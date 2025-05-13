// Inizializzazione del server Express
const express = require('express')
const app = express()
const port = 3000

// Inizializzazione del middleware Helmet per la sicurezza degli header HTTP
const helmet = require('helmet')
app.use(helmet())

// Implementazione Middleware
app.use(express.json())

// Connessione al database
const pgp = require('pg-promise')()
const db = pgp('postgres://postgres:root@localhost:5432/ArtigianiOnlineDB')

db.one('SELECT $1 AS value', 123)
  .then((data) => {
    console.log('DATA:', data.value)
  })
  .catch((error) => {
    console.log('ERROR:', error)
  })