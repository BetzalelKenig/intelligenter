const cron = require('node-cron');
import db from '../db/domain_querys';
import { analyzeDomain } from '../services/analysis';

export const scheduler = () => {
    /**this function running every day at midnight
     * get all outdated domains & send them to analysis
     */
    cron.schedule('00 00 * * *', async () => {
        const outdated = await db.findOutdated();
        console.log('outdated from scheduler', outdated);
        outdated.rows.forEach((row) => {
            analyzeDomain(row.domain);
        });
    });
};
