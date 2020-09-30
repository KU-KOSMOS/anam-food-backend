import { Router } from 'express';

import store from './store';

const router = Router();

router.use('/store', store);

export default router;
