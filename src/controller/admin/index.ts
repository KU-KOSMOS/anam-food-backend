import { Router } from 'express';

import { postData } from './admin.ctrl';

const router = Router();

router.post('/', postData);

export default router;