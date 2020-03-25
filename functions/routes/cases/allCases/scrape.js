const fs = require('fs')
const path = require('path')
const cheerio = require('cheerio')
const functions = require('firebase-functions')

const { cacheFileRaw } = require('./const')

const parseTable = ($, selector, index) => {
  const $table = $($(selector).get(index))
  const rows = $table.find('tbody tr').toArray()
  return rows.map(row => {
    const cells = $(row).find('td')
    const caseNo = parseInt($(cells[0]).text())
    const location = $(cells[1]).text()
    const age = $(cells[2]).text()
    const gender = $(cells[3]).text()
    const details = $(cells[4]).text()
    return {
      caseNo,
      location,
      // Fix up the age groups, where actual age was provided i.e. 64 not 60s
      age: age !== 'Teens' && !age.includes('0s') ? `${age[0]}0s` : age,
      gender,
      details,
    }
  })
}

module.exports = function() {
  const data = {
    confirmed: [],
    probable: [],
  }
  const cachePathRaw = path.join('/tmp', cacheFileRaw)
  if (fs.existsSync(cachePathRaw)) {
    const scraperTableConfig = functions.config().scraper.tables
    const {
      selector: confirmedTableSelector,
      index: confirmedTableIndex,
    } = scraperTableConfig.confirmed
    const {
      selector: probableTableSelector,
      index: probableTableIndex,
    } = scraperTableConfig.probable

    const html = fs.readFileSync(cachePathRaw, 'utf8')
    const $ = cheerio.load(html)
    data.confirmed = parseTable($, confirmedTableSelector, confirmedTableIndex)
    data.probable = parseTable($, probableTableSelector, probableTableIndex)
  }

  return data
}
