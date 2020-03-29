const fs = require('fs')
const path = require('path')
const cheerio = require('cheerio')
const functions = require('firebase-functions')

const { cacheFileRaw } = require('./const')

const parseTable = ($, selector, index) => {
  const parseString = str => {
    if (!str) return 'Unknown'
    const trim = str.trim()
    if (!trim) return 'Unknown'
    return trim
  }
  const parseDate = date => {
    return parseString(date).replace(/\//g, '-')
  }
  const parseGender = gender => parseString(gender)
  const parseAge = age => parseString(age)
  const parseLocation = location => parseString(location)
  const parseOverseas = overseas => parseString(overseas)

  const $table = $($(selector).get(index))
  const rows = $table.find('tbody tr').toArray()
  return rows.map(row => {
    const cells = $(row).find('td')
    const date = $(cells[0]).text()
    const gender = $(cells[1]).text()
    const age = $(cells[2]).text()
    const location = $(cells[3]).text()
    const overseas = $(cells[4]).text()
    return {
      date: parseDate(date),
      location: parseLocation(location),
      age: parseAge(age),
      gender: parseGender(gender),
      overseas: parseOverseas(overseas),
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
