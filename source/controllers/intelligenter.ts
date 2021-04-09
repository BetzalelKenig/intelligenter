import { NextFunction, Request, Response } from 'express';
import { analyzeDomain, isOnAnalysis } from '../services/analysis';
import exstractDomain from '../services/validation';
import db from '../db/domain_querys';

// for GET request
function getDomainInfo(req: Request, res: Response, next: NextFunction) {
    let domain = exstractDomain(req.query.domain as string);
    if (!domain) {
        return res.status(422).json({ message: 'no valid domain' });
    }
    if (isOnAnalysis(domain)) {
        return res.status(200).json({ domain, status: 'onAnalysis' });
    } else {
        db.getDomainData(domain).then((data) => {
            if (data) {
                return res.status(200).json(data);
            }
        });
    }
    analyzeDomain(domain);
    return res.status(200).json({
        domain,
        status: 'onAnalysis'
    });
}

// for POST method
const scanDomain = (req: Request, res: Response, next: NextFunction) => {
    let domain = exstractDomain(req.query.domain as string);

    if (domain) {
        analyzeDomain(req.query.domain as string);
        return res.status(200).json({ domain, status: 'onAnalysis' });
    } else {
        return res.status(422).json({ message: 'no valid domain' });
    }
};

export default { getDomainInfo, scanDomain };
