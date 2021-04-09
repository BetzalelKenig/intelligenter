const cron = require('node-cron');



// cron.schedule('00 00 * * *', () => {
//     console.log('check db and keep it up to date');
// });

cron.schedule('* * * * *', () => {
    console.log('running a task every minute');
});