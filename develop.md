# Interligenter

## Server

### Validation
* maybe convert https://www.google.com/ to google.com?
* check if need Sanitization, validator.js
\

### Domain status
* when domain go to analysis he enter to data structure in the server and when the analysis finish he removed this why it's posible to check if the domain is onAnalysis
* what kind of data structure is prefer? array/json/redis

-------
## Database

### Functions for db
* insert domain
* check if domain exist
* update domain
* check last update
### domains table

#### columns

* id ?
* domain - uniq q: google.com vs https://www.google.com/
* virustotal data
* whois data
* update time

-------
## Scheduler

option 1) do monthly update for all the records in db
\
option 2) do every night check for all the records and record that is month old do update

* find library node cron
* in production maybe not by node