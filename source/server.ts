/**
 * Todo: In prod change http to https
 */
import http from 'http';
import express from 'express';
import logging from './config/logging';
import config from './config/config';
import sanityCheck from './routes/check';
import domainInfo from './routes/intelligenter';
import dbQueries from './db/domain_querys';
const db = require('./db/initDB');
import { scheduler } from './services/scheduler';

// namespace for logs
const NAMESPACE = 'Server';

const router = express();

//  check connection to database;
db.connection();


/** Rules of our API */
router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); //⛔ in prod '*' need to be replace with allwed ip's
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'POST, GET');
        return res.status(200).json({});
    }

    next();
});

/** Routes go here */
router.use('/api/check', sanityCheck);

router.use('/', domainInfo);

/** Error handling */
router.use((req, res, next) => {
    const error = new Error('Not found');

    res.status(404).json({
        message: error.message
    });
});

const httpServer = http.createServer(router);

httpServer.listen(config.SERVER.port, () => logging.info(NAMESPACE, `Server is running on ${config.SERVER.hostname}:${config.SERVER.port}`));

// scheduler for keep data up to date
scheduler();
