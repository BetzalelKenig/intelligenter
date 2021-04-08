/**
 * Todo:
 * types
 */

const nvt = require('node-virustotal');
const whois = require('whois');
import config from '../config/config';

/**Array for domains that on analysis*/
const onAnalysis: string[] = [];

/**check if domain is in onAnalysis array */
const isOnAnalysis = (url: string): boolean => {
    return onAnalysis.includes(url);
};

// create node-virustotal object. the free api is limited for four requests in minute
const defaultTimedInstance = nvt.makeAPI();
const timedInstance = defaultTimedInstance.setKey(process.env.VTAPIKEY);

const virustotalScan = (url: string) => {
    return new Promise((resolve, reject) => {
        timedInstance.domainLookup(url, (err: any, res: any) => {
            if (err) {
                console.log('Well, crap.');
                console.error(err);
                reject(err);
            }
            resolve(JSON.parse(res));
        });
    });
};

const whoisScan = (url: string) => {
    return new Promise((resolve, reject) => {
        whois.lookup('google.com', (err: any, data: any) => {
            if (err) {
                console.log('Well, crap.');
                console.error(err);
                reject(err);
            }
            resolve(JSON.parse(data));
        });
    });
};

export default { virustotalScan };
