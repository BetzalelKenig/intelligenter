import express from 'express';
import controller from '../controllers/check';

const router = express.Router();

router.get('/', controller.sanityCheck);

export = router;
