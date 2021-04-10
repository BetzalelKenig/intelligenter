/** querys  for the domain table */

const { Pool, Client } = require('pg');
import { QueryResult } from 'pg';
import config from '../config/config';
const connectionString = config.DB_URL;

async function dbQuery(query: { text: string; values: string[] }) {
    try {
        const client = new Client({
            connectionString
        });

        client.connect();

        let result: QueryResult;
        result = await client.query(query);
        client.end();
        return result;
    } catch (error) {
        return error as QueryResult;
    }
}

const dbQueries = {
    addVTData: (domain: string, vtData: string) => {
        const query = {
            text: 'INSERT INTO analysisdata(domain, vtdata, lastupdate) VALUES($1, $2, current_date) ON CONFLICT (domain) DO UPDATE SET vtData = $2, lastupdate = current_date',
            values: [domain, vtData]
        };
        dbQuery(query);
    },
    addWhoisData: (domain: string, whoisdata: string) => {
        const query = {
            text: 'INSERT INTO analysisdata(domain, whoisdata, lastupdate) VALUES($1, $2, current_date) ON CONFLICT (domain) DO UPDATE SET vtData = $2, lastupdate = current_date',
            values: [domain, whoisdata]
        };
        dbQuery(query);
    },
    isDomainInDB: async function (domain: string) {
        const query = {
            text: 'SELECT exists(SELECT 1 FROM analysisdata WHERE domain = $1)',
            values: [domain]
        };
        const result = await dbQuery(query);
        return result.rows[0].exists;
    },
    getDomainData: (domain: string) => {
        const query = {
            text: 'SELECT * FROM analysisdata WHERE domain = $1',
            values: [domain]
        };
        return dbQuery(query);
    },
    findOutdated: () => {
        const query = {
            text: "SELECT domain FROM analysisdata WHERE lastupdate < (current_date - interval '1' month)",
            values: []
        };
        return dbQuery(query);
    }
};

export default dbQueries;
