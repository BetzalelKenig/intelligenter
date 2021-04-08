import { NextFunction, Request, Response } from 'express';
import analysis from '../services/analysis';

 async function domainInfo (req: Request, res: Response, next: NextFunction)  {

    const info = await analysis.analyzeDomain(req.query.domain as string);
    return res.status(200).json({
        info
    });
};

const scanDomain = (req: Request, res: Response, next: NextFunction) => {

    analysis.analyzeDomain(req.query.domain as string);
    return res.status(200).json({
        domain: 'domain'
    });
};

export default { domainInfo , scanDomain};
