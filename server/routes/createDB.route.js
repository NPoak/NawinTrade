import express from 'express';
import { insertHistory, insertStock } from '../controllers/createDB.controller.js';

const router = express.Router();

router.get('/insertStock', insertStock);
router.get('/insertHistory', insertHistory);

export default router;