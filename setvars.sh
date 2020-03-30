# need a service-account.json downloaded from the Google console
firebase functions:config:set \
  serviceaccount="$(cat service-account.json)" \
  storage.bucket="gs://covid-19-datasource.appspot.com"