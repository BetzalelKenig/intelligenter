# Interligenter

## Server

#### Todo general

-   fix export import
-   check async
-   error handling
-   logs

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

### Functions for

-   create db and table if not exist
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
```bash
└─$ docker ps    
CONTAINER ID        IMAGE                    COMMAND                  CREATED             STATUS              PORTS                                            NAMES
eff9d3eeb8f7        portainer/portainer-ce   "/portainer"             23 hours ago        Up 23 hours         0.0.0.0:8000->8000/tcp, 0.0.0.0:9000->9000/tcp   portainer
9c66b53861b4        dpage/pgadmin4           "/entrypoint.sh"         24 hours ago        Up 24 hours         443/tcp, 0.0.0.0:8080->80/tcp                    intelligent_darwin
c968d06f65e1        postgres                 "docker-entrypoint.s…"   24 hours ago        Up 24 hours         0.0.0.0:5432->5432/tcp                           pg_domain
```

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

## Tests

```bash
curl -X POST localhost:4000/post?domain=google.com
```

### upsert work

```sql
postgres=# INSERT INTO analysisdata(domain, whoisdata, lastupdate) VALUES('test1.com', 'whois data', '2019/04/09') ON CONFLICT (domain) DO UPDATE SET whoisdata = 'whois data', lastupdate = '2019/04/09';
INSERT 0 1
postgres=# select * from analysisdata;
  domain   | vtdata | whoisdata  |     lastupdate
-----------+--------+------------+---------------------
 test1.com |        | whois data | 2019-04-09 00:00:00
(1 row)

postgres=# INSERT INTO analysisdata(domain, vtdata, lastupdate) VALUES('test1.com', 'vt data', '2019/04/09') ON CONFLICT (domain) DO UPDATE SET vtdata = 'vt data', lastupdate = '2019/04/09';
INSERT 0 1
postgres=# select * from analysisdata;
  domain   | vtdata  | whoisdata  |     lastupdate
-----------+---------+------------+---------------------
 test1.com | vt data | whois data | 2019-04-09 00:00:00
(1 row)
```

## For long-term

-   Planning Database according to requirements
-   Mechanism for control the scheduler
-   libraries vs implement myself consider pros & cons