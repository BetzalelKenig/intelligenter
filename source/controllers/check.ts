import { NextFunction, Request, Response } from 'express';
// import {createDatabase} from '../db/initDB'
const db = require('../db/initDB');

const sanityCheck = (req: Request, res: Response, next: NextFunction) => {

    db.createDatabase()
    return res.status(200).json({
        
        message: 'The api works😃'
    });
};

export default { sanityCheck };
