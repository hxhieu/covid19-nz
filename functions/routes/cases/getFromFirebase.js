require('../common/firebase-init')
const functions = require('firebase-functions')

const bucket = require('firebase-admin')
  .storage()
  .bucket(functions.config().storage.bucket)

const getFromFirebaseStorage = filename =>
  new Promise((resolve, reject) => {
    const ref = bucket.file(filename)
    ref.get((err, file) => {
      if (err) {
        if (err.message.includes('No such object')) {
          reject(new Error('Country data not found.'))
        } else {
          reject(err)
        }
      } else {
        try {
          const stream = file.createReadStream()
          const chunks = []
          stream.on('data', data => {
            chunks.push(data.toString())
          })
          stream.on('end', () => {
            resolve(chunks.join(''))
          })
          stream.on('error', err => {
            reject(new Error(`Error downloading data file. ${err}`))
          })
        } catch (error) {
          reject(error)
        }
      }
    })
  })

module.exports = getFromFirebaseStorage
