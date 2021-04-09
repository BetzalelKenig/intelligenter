import express from 'express';
import controller from '../controllers/intelligenter';

const router = express.Router();

router.get('/get', controller.getDomainInfo);

router.post('/post', controller.scanDomain)

export = router;
