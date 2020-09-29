import { Router } from 'express';

const router = Router();

router.get('/list');
router.get('/detail/:storeId');

export default router;
