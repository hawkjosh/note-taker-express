const express = require('express')

const notesRouter = require('./noteRoutes.js')

const app = express()

app.use('/notes', notesRouter)

module.exports = app
