import { Router } from 'express';
import trelloController from '../controller/trelloController';

const router = Router();

router.get('/', trelloController.getAll);

export default router;