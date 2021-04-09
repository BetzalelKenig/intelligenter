/** querys  for the domain table */

const { Pool, Client } = require('pg');
import config from '../config/config';
const connectionString = config.DB_URL;

async function dbQuery(query: { text: string; values: string[] }) {
    const client = new Client({
        connectionString
    });

    client.connect();

    const result = await client.query(query);
    client.end();
    return result;
}

// const dbQuery = (query: { text: string; values: string[] }) => {
//     const client = new Client({
//         connectionString
//     });
//     return new Promise(async (resolve, reject) => {
//         client.connect();

//        await client.query(query, (err: Error, res: Response) => {
//             if (err) {
//                 console.log('dbquery error=======',err);
//                 reject(err);
//             } else {
//                 resolve(res);
//             }
//         });
//     })
//         .catch((err) => {
//             console.log(err);
//         })
//         .finally(client.end());
// };

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
    isDomainInDB: (domain: string) => {
        const query = {
            text: 'SELECT exists(SELECT 1 FROM analysisdata WHERE $1)',
            values: [domain]
        };
        return dbQuery(query);
    },
    getDomainData: (domain: string) => {
        const query = {
            text: 'SELECT * FROM analysisdata WHERE $1 = domain',
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
