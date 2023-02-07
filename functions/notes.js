const express = require('express')
const serverless = require('serverless-http')
const path = require('path')
const api = require('./helpers/index.js')
const notes = require('./helpers/noteRoutes.js')

// require('dotenv').config()
// const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())
app.use('/api', api)
app.use('/notes', notes)
app.use(express.static(path.join(__dirname, 'dist')))

module.exports.handler = serverless(app)
