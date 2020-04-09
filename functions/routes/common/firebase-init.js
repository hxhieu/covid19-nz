const admin = require('firebase-admin')
// Check if the DEFAULT app has been initialised
if (admin.apps.length === 0) {
  const cred = require('firebase-functions').config().serviceaccount
  admin.initializeApp({
    credential: admin.credential.cert(cred),
  })
}
