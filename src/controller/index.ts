import { Router } from 'express';

import admin from './admin';

const router = Router();

router.use('/admin', admin);

export default router;
