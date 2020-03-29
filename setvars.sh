firebase functions:config:set \
  scraper.sourceurl="https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases/covid-19-current-cases-details" \
  scraper.tables.confirmed.selector=".table-style-two" \
  scraper.tables.confirmed.index="1" \
  scraper.tables.probable.selector=".table-style-two" \
  scraper.tables.probable.index="2"