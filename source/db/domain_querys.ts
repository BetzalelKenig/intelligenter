/** querys  for the domain table */

const { Pool, Client } = require('pg');
import config from '../config/config';
const connectionString = config.DB_URL;

const dbQuery = (query: { text: string; values: string[] }) => {
    const client = new Client({
        connectionString
    });
    return new Promise((resolve, reject) => {
        client.connect();

        client.query(query, (err: Error, res: Response) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                resolve(res);
            }
        });
    }).finally(client.end());
};

module.exports = {
    addVTData: (domain: string, vtData: string) => {
        const date = new Date().toJSON().slice(0, 10);
        const query = {
            text: 'INSERT INTO analysisdata(domain, vtdata, lastupdate) VALUES($1, $2, $3) ON CONFLICT (domain) DO UPDATE SET vtData = $2, lastupdate = date',
            values: [domain, vtData, date]
        };
        dbQuery(query);
    },
    isDomainInDB: (domain: string) => {
        const query = {
            text: 'SELECT exists(SELECT 1 FROM analysisdata WHERE $1)',
            values: [domain]
        };
        dbQuery(query);
    },
    getDomainData: (domain: string) => {
        const query = {
            text: 'SELECT * FROM analysisdata WHERE $1 = domain',
            values: [domain]
        };
        dbQuery(query);
    },
    findOldUpdates: (domain: string) => {}
};
