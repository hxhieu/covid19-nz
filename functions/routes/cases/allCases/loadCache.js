const path = require('path')
const fs = require('fs')
const getHtml = require('./getHtml')
const scrape = require('./scrape')

const cacheFile = 'covid-19-nz-update.json'

module.exports = async function() {
  const cachePath = path.join(`/tmp/${cacheFile}`)
  // TODO: Refresh the cache
  if (!fs.existsSync(cachePath)) {
    await getHtml()
    const data = scrape()
    fs.writeFileSync(cachePath, JSON.stringify(data), 'utf8')
  }
  return require(cachePath)
}
