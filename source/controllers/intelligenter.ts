import { NextFunction, Request, Response } from 'express';
import analysis from '../services/analysis';

 async function domainInfo (req: Request, res: Response, next: NextFunction)  {

    const info = await analysis.virustotalScan(req.query.domain as string);
    return res.status(200).json({
        info
    });
};

export default { domainInfo };
