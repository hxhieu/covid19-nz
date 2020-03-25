const loadCache = require('./allCases/loadCache')

const getAllCases = async (req, res) => {
  try {
    const cases = await loadCache()
    res.status(200).send(cases)
  } catch (err) {
    res.status(500).send(err)
  }
}

module.exports = {
  getAllCases,
}
