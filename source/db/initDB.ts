const { Pool, Client } = require('pg');
import config from '../config/config';
const connectionString = config.DB_URL;

module.exports = {
    /** check connection */
    connection: () => {
        const client = new Client({
            connectionString
        });
        client.connect();
        client.query('SELECT NOW()', (err: Error, res: Response) => {
            if (err) {
                console.log(err);
            } else {
                console.log('connect to database');
            }
            client.end();
        });
    },

    /** Create the database and table */
    createDatabase: () => {
        const pool = new Pool({
            connectionString
        });

        // pool.query('CREATE DATABASE domainanalysis;', (err: Error, res: Response) => {
        //     console.log(err, res);

        // pool.query('CREATE TABLE analysisdata(domain text UNIQUE NOT NULL, stdata text, whoisdata text, lastupdate timestamp)', (err: Error, res: Response) => {
        //     console.log(err, res);
        //     pool.end();
        // });
        // });
    }
};
