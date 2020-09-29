import { Router } from 'express';
import { getStoreList, getStoreDetail } from './store.ctrl';

const router = Router();

router.get('/list', getStoreList);
router.get('/detail/:storeId', getStoreDetail);

export default router;
