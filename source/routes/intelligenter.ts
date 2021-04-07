import express from 'express';
import controller from '../controllers/intelligenter';

const router = express.Router();

router.get('/get', controller.domainInfo);

export = router;
