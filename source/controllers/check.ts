import { NextFunction, Request, Response } from 'express';

const sanityCheck = (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({
        message: 'The api works😃'
    });
};

export default { sanityCheck };
