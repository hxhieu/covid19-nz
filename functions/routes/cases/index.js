const getFromFirebaseStorage = require('./getFromFirebase')

const getAllCases = async (req, res) => {
  try {
    const data = await getFromFirebaseStorage(`__latest.json`)
    res.status(200).send(data)
  } catch ({ message }) {
    res.status(500).send(message)
  }
}

const getCountryDetail = async (req, res) => {
  try {
    const { country } = req.params
    if (!country)
      res.status(400).send('Country code ISO-3166 Alpha-3 is required.')
    else {
      const data = await getFromFirebaseStorage(
        `__latest.${country.toUpperCase()}.json`
      )
      res.status(200).send(data)
    }
  } catch ({ message }) {
    res.status(500).send(message)
  }
}

module.exports = {
  getAllCases,
  getCountryDetail,
}
