const admin = require('firebase-admin')
const functions = require('firebase-functions')
const cred = functions.config().serviceaccount
admin.initializeApp({
  credential: admin.credential.cert(cred),
})
