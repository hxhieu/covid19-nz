const functions = require('firebase-functions')
const express = require('express')
const cors = require('cors')

// Routes
const cases = require('./routes/cases')

// App
const app = express()
app.use(
  cors({
    origin: [
      'http://localhost:8080',
      'https://covid19board.firebaseapp.com',
      'https://covid19board.web.app',
      'https://covid19board.now.sh',
      'https://covid19board-staging.firebaseapp.com',
      'https://covid19board-staging.web.app',
    ],
  })
)

// Router
app.get('/cases', cases.getAllCases)

exports.api = functions.region('asia-east2').https.onRequest(app)
