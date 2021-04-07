const nvt = require('node-virustotal');

const defaultTimedInstance = nvt.makeAPI();
const timedInstance = defaultTimedInstance.setKey(process.env.VTAPIKEY);

const virustotalScan = (url: string) => {

    return new Promise( (resolve, reject) => {

            timedInstance.domainLookup(url, (err: any, res: any) => {
                if (err) {
                    console.log('Well, crap.');
                    console.error(err);
                    reject(err);
                }
                resolve(JSON.parse(res));
            });

    })


    

};
export default { virustotalScan };
