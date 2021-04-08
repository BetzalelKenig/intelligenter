import express from 'express';
import controller from '../controllers/intelligenter';

const router = express.Router();

router.get('/get', controller.domainInfo);

router.post('/post', controller.scanDomain)

export = router;
