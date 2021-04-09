const cron = require('node-cron');
import db from '../db/domain_querys';
import { analyzeDomain, isOnAnalysis } from '../services/analysis';


// running every day at midnight
cron.schedule('00 00 * * *', async () => {
    const outdated = await db.findOutdated();
    const outdatedArray: Object[] = []
    outdatedArray.forEach((element) => {});
    console.log('check db and keep it up to date');
});
