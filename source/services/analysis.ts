/**
 * Todo:
 * types
 * get whois as json
 * store relevent result
 */

const nvt = require('node-virustotal');
const whois = require('whois');
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
const timedInstance = defaultTimedInstance.setKey(process.env.VTAPIKEY);

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
    return await new Promise((resolve, reject) => {
        whois.lookup(domain, (err: any, data: any) => {
            if (err) {
                console.log('Well, crap.');
                logging.error(NAMESPACE, err);
                reject(err);
            }

            resolve({ whoisdata: data });
        });
    });
}


export async function analyzeDomain(domain: string) {
    /** this function need to call whoisScan & vtScan and restore the result in db */
    onAnalysis.push(domain);

    const whoisResult = await whoisScan(domain);
    await db.addWhoisData(domain, JSON.stringify(whoisResult));
    onAnalysis = onAnalysis.filter(value => value != domain)
}

/**  */
export async function getDomainInfo(domain: string){
    if (isOnAnalysis(domain)) {
        return { domain, status: 'onAnalysis' };
    } else if (domain) return await db.getDomainData(domain);
};
