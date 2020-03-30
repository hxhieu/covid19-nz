require('../common/firebase-init')
const functions = require('firebase-functions')

const bucket = require('firebase-admin')
  .storage()
  .bucket(functions.config().storage.bucket)

const getAllCases = async (req, res) => {
  try {
    const ref = bucket.file('__latest.NZ.json')
    const file = (await ref.get())[0]
    const stream = file.createReadStream()
    const chunks = []
    stream.on('data', data => {
      chunks.push(data.toString())
    })
    stream.on('end', () => {
      res.status(200).send(chunks.join(''))
    })
    stream.on('error', err => {
      res.status(500).send(`Error downloading data file. ${err}`)
    })
  } catch ({ message }) {
    res.status(500).send(message)
  }
}

module.exports = {
  getAllCases,
}
