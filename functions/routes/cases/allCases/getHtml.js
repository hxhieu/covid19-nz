const fetch = require('node-fetch')
const functions = require('firebase-functions')
const fs = require('fs')
const path = require('path')

const { cacheFileRaw } = require('./const')

module.exports = async function () {
  const data = await fetch(functions.config().scraper.sourceurl)
  const html = await data.text()
  fs.writeFileSync(path.join('/tmp', cacheFileRaw), html, 'utf8')
}
