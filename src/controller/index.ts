import { Router } from 'express';

import admin from './admin';
import store from './store';

const router = Router();

router.use('/admin', admin);
router.use('/store', store);

export default router;
