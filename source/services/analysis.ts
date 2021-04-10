/**
 * Todo:
 * types
 * get whois as json
 * store relevent result
 */

const nvt = require('node-virustotal');
const whois = require('whois-json');
import config from '../config/config';
import logging from '../config/logging';
import db from '../db/domain_querys';

const NAMESPACE = 'AnalysisService';

/**Array for domains that on analysis*/
let onAnalysis: string[] = [];

/**check if domain is in onAnalysis array */
export const isOnAnalysis = (domain: string): boolean => {
    return onAnalysis.includes(domain);
};

// create node-virustotal object. the free api is limited for four requests in minute
const defaultTimedInstance = nvt.makeAPI();
const timedInstance = defaultTimedInstance.setKey(config.APIKEYS.vtKey);

async function virustotalScan(domain: string) {
    return await new Promise((resolve, reject) => {
        timedInstance.domainLookup(domain, (err: any, res: any) => {
            if (err) {
                console.log('Well, crap.');
                logging.error(NAMESPACE, err);

                reject(err);
            }
            resolve(JSON.parse(res));
        });
    });
}

async function whoisScan(domain: string) {
    const whoisResult = await whois(domain);
    db.addWhoisData(domain, JSON.stringify(whoisResult, null, 2));
}

// Todo: replace await with promiss for start whois & vt in parallel
export async function analyzeDomain(domain: string) {
    /** this function need to call whoisScan & vtScan and restore the result in db
     * probably need promis to execut both scans async
     */
    onAnalysis.push(domain);
    try {
        const whoisResult = await whoisScan(domain);
        db.addWhoisData(domain, JSON.stringify(whoisResult, null, 2));
        const vtdata = await virustotalScan(domain);

        db.addVTData(domain, JSON.stringify(vtdata, null, 2));
    } catch (error) {
        logging.error(`[${NAMESPACE}]`, ` Error while analysis: ${error}`);
    }

    onAnalysis = onAnalysis.filter((value) => value != domain);
}

/**  */
export async function getDomainInfo(domain: string) {
    if (isOnAnalysis(domain)) {
        return { domain, status: 'onAnalysis' };
    } else if (domain) {
        let data = await db.getDomainData(domain);
        data = data.rows[0];
        return data;
    }
}
