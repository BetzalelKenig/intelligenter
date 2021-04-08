/**
 * Todo:
 * types
 */

const nvt = require('node-virustotal');
const whois = require('whois');
import config from '../config/config';
import logging from '../config/logging';

const NAMESPACE = 'AnalysisService';

/**Array for domains that on analysis*/
const onAnalysis: string[] = [];

/**check if domain is in onAnalysis array */
const isOnAnalysis = (domain: string): boolean => {
    return onAnalysis.includes(domain);
};

// create node-virustotal object. the free api is limited for four requests in minute
const defaultTimedInstance = nvt.makeAPI();
const timedInstance = defaultTimedInstance.setKey(process.env.VTAPIKEY);

const virustotalScan = (domain: string) => {
    return new Promise((resolve, reject) => {
        timedInstance.domainLookup(domain, (err: any, res: any) => {
            if (err) {
                console.log('Well, crap.');
                logging.error(NAMESPACE, err);

                reject(err);
            }
            resolve(JSON.parse(res));
        });
    });
};

const whoisScan = (domain: string) => {
    return new Promise((resolve, reject) => {
        whois.lookup('google.com', (err: any, data: any) => {
            if (err) {
                console.log('Well, crap.');
                logging.error(NAMESPACE, err);
                reject(err);
            }
            resolve(JSON.parse(data));
        });
    });
};

const analyzeDomain = (domain: string) =>{
   return whoisScan(domain);
}
export default { analyzeDomain };
