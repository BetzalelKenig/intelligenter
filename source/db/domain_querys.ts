/** queries  for the domain table */

const { Pool, Client } = require('pg');
import { QueryResult } from 'pg';
import config from '../config/config';
import logging from '../config/logging';
const connectionString = config.DB_URL;

const NAMESPACE = 'DBqueries';

async function dbQuery(query: { text: string; values: string[] }) {
    /**this function take query and return db result */
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
        logging.error(NAMESPACE, 'faild to execute query')
        return error as QueryResult;
    }
}

const dbQueries = {
    /**those functions build query by params and send the query to exute by dbQuery function & return the result */
    addVTData: (domain: string, vtData: string) => {
        logging.debug(NAMESPACE, 'execute db query addVTData');
        const query = {
            text: 'INSERT INTO analysisdata(domain, vtdata, lastupdate) VALUES($1, $2, current_date) ON CONFLICT (domain) DO UPDATE SET vtData = $2, lastupdate = current_date',
            values: [domain, vtData]
        };
        dbQuery(query);
    },
    addWhoisData: (domain: string, whoisdata: string) => {
        logging.info(NAMESPACE, 'execute db query addWhoisData');
        const query = {
            text: 'INSERT INTO analysisdata(domain, whoisdata, lastupdate) VALUES($1, $2, current_date) ON CONFLICT (domain) DO UPDATE SET vtData = $2, lastupdate = current_date',
            values: [domain, whoisdata]
        };
        dbQuery(query);
    },
    isDomainInDB: async function (domain: string) {
        logging.info(NAMESPACE, 'execute db query isDomainInDB');
        const query = {
            text: 'SELECT exists(SELECT 1 FROM analysisdata WHERE domain = $1)',
            values: [domain]
        };
        const result = await dbQuery(query);
        return result.rows[0].exists;
    },
    getDomainData: (domain: string) => {
        logging.info(NAMESPACE, 'execute db query getDomainData');
        const query = {
            text: 'SELECT * FROM analysisdata WHERE domain = $1',
            values: [domain]
        };
        return dbQuery(query);
    },
    findOutdated: () => {
        logging.info(NAMESPACE, 'execute db query findOutdated');
        const query = {
            text: "SELECT domain FROM analysisdata WHERE lastupdate < (current_date - interval '1' month)",
            values: []
        };
        return dbQuery(query);
    }
};

export default dbQueries;
