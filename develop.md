# Interligenter

## Server

### Validation

-   maybe convert https://www.google.com/ to google.com?🤔
-   check if need Sanitization, validator.js🤔
-   whois need only main domain

### Domain status

-   when domain go to analysis he enter to data structure in the server and when the analysis finish he removed this why it's posible to check if the domain is onAnalysis
-   what kind of data structure is prefer? array/json/redis🤔
-   some times the domain is onAnalysis for update and the client can get result from db 🤔

### Functions in analysis

-   i think that even if one source return error stil the other source can return data that can go to db🤔
-   do i need to enter to db only after geting response from both vt & whois or enter every response when it comes🤔
-   requests to virustotal & whois need to be async
-   get virustotal data & get whois data
-   check if domain onAnalysis

#### GET request flow:

1. check if the domain status is onAnalysis if yes return onAnalysis. q: even if is in db?🤔 if not continue
2. if not onAnalysis check if domain exist in db if exist return data if not return onAnalysis & send to analysis

#### POST request flow:

1. check if onAnalysis if yes return onAnalysis & done
2. if not onAnalysis check if exist on db return domain alrady exist else send to analysis & return onAnalysis

---

## Database

### Functions for db

-   insert domain
-   check if domain exist
-   update domain
-   check if last update is more then month

### domains table

#### columns

-   id ?
-   domain - uniq q: google.com vs https://www.google.com/
-   virustotal data
-   whois data
-   update time

---

## Scheduler

option 1) do monthly update for all the records in db \
option 2) do every night check for all the records and record that is month old do update \
I guess option 2 is better

-   find library node cron
-   in production maybe not by node


## docker
### postgres db
```bash
docker run --name pg_domain -e POSTGRES_PASSWORD=domain -p 5432:5432 -d postgres
```
### pgadmin
```bash 
docker run -p 8080:80 \            
    -e 'PGADMIN_DEFAULT_EMAIL=a@a.com' \
    -e 'PGADMIN_DEFAULT_PASSWORD=123456' \
    -d dpage/pgadmin4

```